import { computed, inject, Injectable, signal } from '@angular/core';
import { LoginCredentials, LoginResponse, TokenPayload } from './auth.interface';
import { ApiService } from '@core/api/api.service';
import { Router } from '@angular/router';
import { catchError, Observable, switchMap, tap, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private api = inject(ApiService);
    private router = inject(Router);

    // Estado reactivo del usuario autenticado
    private _currentUser = signal<TokenPayload | null>(null);

    readonly currentUser = this._currentUser.asReadonly();
    readonly isAuthenticated = computed(() => this._currentUser() !== null);
    readonly userRole = computed(() => this._currentUser()?.role ?? null);

    loadCurrentUser(): Observable<TokenPayload | null> {
        return this.api.get<TokenPayload>('users/me').pipe(
            tap((user) => {
                this._currentUser.set(user);
            }),
            catchError((error) => {
                this._currentUser.set(null);
                return throwError(() => error);
            }),
        );
    }

    login(credentials: LoginCredentials): Observable<TokenPayload | null> {
        return this.api.post<LoginResponse, LoginCredentials>('users/login', credentials).pipe(
            switchMap(() => this.loadCurrentUser()),
            catchError((error) => {
                this._currentUser.set(null);
                return throwError(() => error);
            }),
        );
    }

    private _handleLogout(): void {
        this._currentUser.set(null);
        this.router.navigate(['/auth/login']);
    }

    logout(): void {
        this.api.post<Object, null>('users/logout').subscribe({
            complete: () => this._handleLogout(),
            error: () => this._handleLogout(),
        });
    }

    hasRole(role: string): boolean {
        return this.userRole() === role;
    }
}

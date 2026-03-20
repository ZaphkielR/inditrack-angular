import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const router = inject(Router);
    const authService = inject(AuthService);

    const authReq = req.clone({ withCredentials: true });

    return next(authReq).pipe(
        catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
                // La cookie expiró o es inválida: limpiamos el estado sin llamar al backend
                authService['_currentUser'].set(null);
                router.navigate(['/auth/login']);
            }

            if (error.status === 403) {
                router.navigate(['/auth/login']);
            }

            return throwError(() => error);
        }),
    );
};

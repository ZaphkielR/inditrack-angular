import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '@core/api/api.service';
import { LoginCredentials } from '@core/auth/auth.interface';
import { AuthService } from '@core/auth/auth.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
    selector: 'app-login',
    imports: [
        ReactiveFormsModule,
        NzButtonModule,
        NzCheckboxModule,
        NzFormModule,
        NzInputModule,
        NzIconModule,
    ],
    templateUrl: './login.html',
})
export class Login {
    private fb = inject(NonNullableFormBuilder);
    private authService = inject(AuthService);
    private router = inject(Router);
    private notification = inject(NzNotificationService);

    loading = signal(false);

    validateForm = this.fb.group({
        email: this.fb.control('', [Validators.required, Validators.email]),
        password: this.fb.control('', [Validators.required]),
        remember: this.fb.control(true),
    });

    submitForm(): void {
        if (this.validateForm.invalid) {
            Object.values(this.validateForm.controls).forEach((control) => {
                control.markAsDirty();
                control.updateValueAndValidity({ onlySelf: true });
            });
            return;
        }

        const { email, password } = this.validateForm.getRawValue();

        this.loading.set(true);

        this.authService.login({ email, password }).subscribe({
            next: () => {
                this.router.navigate(['/machines']);
            },
            error: (err) => {
                const msg =
                    err.status === 401
                        ? 'Credenciales incorrectas'
                        : 'Error al iniciar sesión. Intenta nuevamente.';

                this.notification.error('Error', msg);
            },
            complete: () => this.loading.set(false),
        });
    }
}

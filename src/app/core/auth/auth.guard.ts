import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserRole } from './auth.interface';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.isAuthenticated()) {
        router.navigate(['/auth/login']);
        return false;
    }

    const requiredRoles = route.data?.['roles'] as UserRole[] | undefined;

    if (!requiredRoles) {
        router.navigate(['/auth/login']);
        return false;
    }

    for (let index = 0; index < requiredRoles.length; index++) {
        if (authService.hasRole(requiredRoles[index])) {
            return true;
        }
    }

    router.navigate(['/auth/login']);
    return false;
};

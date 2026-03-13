import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { map, catchError, of } from 'rxjs';

export const AuthGuard: CanActivateFn = () => {
  const api = inject(ApiService);
  const router = inject(Router);

  return api.get('users/me').pipe(
    map(() => true),
    catchError(() => {
      router.navigate(['/auth/login']);
      return of(false);
    }),
  );
};

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptorProvider: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  req = req.clone({
    withCredentials: true,
  });

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        router.navigate(['/auth/login']);
      }

      return throwError(() => error);
    }),
  );
};

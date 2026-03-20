import {
    ApplicationConfig,
    inject,
    provideAppInitializer,
    provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { icons } from './icons-provider';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { es_ES, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '@core/auth/auth.interceptor';
import { AuthService } from '@core/auth/auth.service';
import { catchError, lastValueFrom, of } from 'rxjs';

registerLocaleData(es);

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),
        provideNzIcons(icons),
        provideNzI18n(es_ES),
        provideHttpClient(withInterceptors([authInterceptor])),
        provideAppInitializer(() => {
            const auth = inject(AuthService);
            return lastValueFrom(auth.loadCurrentUser().pipe(catchError(() => of(null))));
        }),
    ],
};

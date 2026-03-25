import { Routes } from '@angular/router';
import { SidebarLayout } from '@core/layout/sidebar-layout/sidebar-layout';
import { AUTH_ROUTES } from '@features/auth/auth.routes';
import { INCIDENT_ROUTES } from '@features/incident/incident.routes';
import { MACHINE_ROUTES } from '@features/machine/machine.routes';
import { MAINTENANCE_ROUTES } from '@features/maintenance/maintenance.routes';
import { USER_ROUTES } from '@features/user/user.routes';

export const routes: Routes = [
    {
        path: 'auth',
        children: AUTH_ROUTES,
    },
    {
        path: 'machines',
        component: SidebarLayout,
        children: MACHINE_ROUTES,
    },
    {
        path: 'incidents',
        component: SidebarLayout,
        children: INCIDENT_ROUTES,
    },
    {
        path: 'maintenance',
        component: SidebarLayout,
        children: MAINTENANCE_ROUTES,
    },
    {
        path: 'users',
        component: SidebarLayout,
        children: USER_ROUTES,
    },
    {
        path: '**',
        redirectTo: 'auth/login',
    },
];

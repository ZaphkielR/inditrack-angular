import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './features/auth/auth.routes';
import { MACHINVES_ROUTES } from './features/machines/machines.routes';
import { SidebarLayout } from './core/layout/sidebar-layout/sidebar-layout';
import { INCIDENTS_ROUTES } from './features/incidents/incidents.routes';

export const routes: Routes = [
  {
    path: 'auth',
    children: AUTH_ROUTES,
  },
  {
    path: 'machines',
    component: SidebarLayout,
    children: MACHINVES_ROUTES,
  },
  {
    path: 'incidents',
    component: SidebarLayout,
    children: INCIDENTS_ROUTES,
  },
];

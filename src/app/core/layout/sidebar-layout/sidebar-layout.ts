import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LucideIconsModule } from '@app/shared/icons/icons-module';

const routes = [
  {
    name: 'Máquinas',
    path: '/machines',
    icon: 'speaker',
  },
  {
    name: 'Incidentes',
    path: '/incidents',
    icon: 'triangle-alert',
  },
  {
    name: 'Usuarios',
    path: '/users',
    icon: 'user',
  },
  {
    name: 'Mantenimiento',
    path: 'maintenance',
    icon: 'wrench',
  },
];

@Component({
  selector: 'app-sidebar-layout',
  imports: [RouterOutlet, LucideIconsModule],
  templateUrl: './sidebar-layout.html',
})
export class SidebarLayout {
  routes = routes;

  constructor(private router: Router) {}

  changeRoute(route: string) {
    this.router.navigate([route]);
  }
}

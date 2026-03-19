import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { icons } from '../../../icons-provider';

@Component({
  selector: 'app-sidebar-layout',
  imports: [RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule],
  templateUrl: './sidebar-layout.html',
  styleUrl: './sidebar-layout.css',
})
export class SidebarLayout {
  isCollapsed = false;

  SECTIONS = [
    {
      title: 'Dashboard',
      route: '/dashboard',
      icon: 'dashboard',
    },
    {
      title: 'Máquinas',
      route: '/machines',
      icon: 'hdd',
    },
    {
      title: 'Incidentes',
      route: '/incidents',
      icon: 'warning',
    },
    {
      title: 'Mantenimiento',
      route: '/maintenance',
      icon: 'tool',
    },
    {
      title: 'Usuarios',
      route: '/users',
      icon: 'team',
    },
  ];
}

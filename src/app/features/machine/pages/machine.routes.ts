import { Routes } from '@angular/router';
import { MachineList } from './machine-list/machine-list';
import { MachineCreate } from './machine-create/machine-create';
import { MachineEdit } from './machine-edit/machine-edit';

export const MACHINE_ROUTES: Routes = [
  {
    path: '',
    component: MachineList,
  },
  {
    path: 'create',
    component: MachineCreate,
  },
  {
    path: 'edit/:id',
    component: MachineEdit,
  },
];

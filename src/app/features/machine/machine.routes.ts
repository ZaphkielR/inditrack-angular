import { Routes } from '@angular/router';
import { MachineList } from './pages/machine-list/machine-list';
import { MachineCreate } from './pages/machine-create/machine-create';
import { MachineEdit } from './pages/machine-edit/machine-edit';

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

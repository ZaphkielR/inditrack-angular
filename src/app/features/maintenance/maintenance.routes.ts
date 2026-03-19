import { MaintenanceCreate } from './pages/maintenance-create/maintenance-create';
import { MaintenanceList } from './pages/maintenance-list/maintenance-list';

export const MAINTENANCE_ROUTES = [
  {
    path: '',
    component: MaintenanceList,
  },
  {
    path: 'create',
    component: MaintenanceCreate,
  },
];

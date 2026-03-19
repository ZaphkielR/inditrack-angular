import { IncidentCreate } from './pages/incident-create/incident-create';
import { IncidentEdit } from './pages/incident-edit/incident-edit';
import { IncidentList } from './pages/incident-list/incident-list';

export const INCIDENT_ROUTES = [
  {
    path: '',
    component: IncidentList,
  },
  {
    path: 'create',
    component: IncidentCreate,
  },
  {
    path: 'edit/:id',
    component: IncidentEdit,
  },
];

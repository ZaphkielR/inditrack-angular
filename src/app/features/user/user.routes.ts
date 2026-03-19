import { UserList } from './pages/user-list/user-list';
import { UserRegister } from './pages/user-register/user-register';

export const USER_ROUTES = [
  {
    path: '',
    component: UserList,
  },
  {
    path: 'register',
    component: UserRegister,
  },
];

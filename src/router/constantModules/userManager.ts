import { RouteRecordRaw } from 'vue-router';
const UserManagerRouter: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user-manager/login/index.vue')
  }
];

export default UserManagerRouter;

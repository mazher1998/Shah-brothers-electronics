import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [{ name:'Login', path: 'login', component: () => import('pages/login/module/LoginComponent.vue'), }],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name:'DashBoard', path: 'dashboard', component: () => import('pages/dashboard/module/DashBoard.vue') },
      { name:'User', path: 'user', component: () => import('pages/user/module/UserComponent.vue') },
      { name:'AddEditUser', path: 'add-edit-user', component: () => import('pages/user/module/AddEditUser.vue') },
      { name:'Order', path: 'order', component: () => import('pages/order/module/OrderComponent.vue') },
      { name:'AddEditOrder', path: 'add-edit-order', component: () => import('pages/order/module/helper/AddEditOrder.vue') },

    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

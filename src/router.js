import { createRouter, createWebHistory } from 'vue-router';

import ProductsList from './pages/ProductsList.vue';
import UserCart from './pages/UserCart.vue';
import ShopAdmin from './pages/ShopAdmin.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList, name: 'products' },
    { path: '/cart', component: UserCart, name: 'cart' },
    { path: '/admin', component: ShopAdmin, name: 'admin' },
  ],
});

export default router;

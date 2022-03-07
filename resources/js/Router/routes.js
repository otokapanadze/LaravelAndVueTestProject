import store from "../Store";

const routes = [
    {
        path: '/',
        component: () => import('../views/Home.vue'),
        name: 'home',
    },
    {
        path: '/login',
        component: () => import('../views/Auth/Login.vue'),
        name: 'login',
    },
    {
        path: '/products',
        component: () => import('../views/Product/Products.vue'),
        name: 'products',
        beforeEnter: (to, from, next) => {
            if (store.state.auth.authenticated) {
                next();
            } else {
                next('/login');
            }
        },
    },
    {
        path: '/products/:id',
        component: () => import('../views/Product/ShowProduct.vue'),
        name: 'products-show',
    }
]

export default routes;

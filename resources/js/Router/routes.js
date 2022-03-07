const routes = [
    {
        path: '/',
        component: () => import('../Views/Home.vue'),
        name: 'home',
    },
    {
        path: '/login',
        component: () => import('../Views/Auth/Login.vue'),
        name: 'login',
        meta: {
            hideForAuth: true,
        }
    },
    {
        path: '/products',
        component: () => import('../Views/Product/Products.vue'),
        name: 'products',
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/products/:id',
        component: () => import('../Views/Product/ShowProduct.vue'),
        name: 'products-show',
    }
]

export default routes;

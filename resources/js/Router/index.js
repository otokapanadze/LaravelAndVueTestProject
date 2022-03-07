import { createRouter, createWebHistory } from 'vue-router';
import routes from "./routes";
import store from "../Store";

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

router.beforeEach( (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.state.auth.authenticated) {
            next();
        }else{
            next('/login');
        }
    } else if (to.matched.some(record => record.meta.hideForAuth)) {
        if (store.state.auth.authenticated) {
            next('/');
        }else{
            next();
        }
    } else {
        next();
    }
});

export default router;

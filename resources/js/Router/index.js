import { createRouter, createWebHistory } from 'vue-router';
import routes from "./routes";
import store from "../Store";

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

const protectedRoutes = [];

router.beforeEach((to, from, next) => {
    if (protectedRoutes.includes(to.path)) {
        if (store.state.auth.getters.authenticated) {
            next();
        } else {
            next('/Login')
        }
    } else {
        next();
    }
});

export default router;

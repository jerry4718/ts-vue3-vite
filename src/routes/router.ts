import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import { defineComponent, h } from 'vue';

export const routes: RouteRecordRaw[] = [{
    path: "/",
    component: defineComponent(() => {})
}];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export function addRoutes(routes: RouteRecordRaw[]) {
    routes.forEach(route => router.addRoute(route));
}

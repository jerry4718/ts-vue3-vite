import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import {MenuProto} from "../model/MenuProto";
import { getRouteRaw, parseRouteName } from './dynamic-routes';
import { defineAsyncComponent } from 'vue';
// import {asyncLoaderMapper} from "./dynamic-route-loaders";



export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/index/indexMain",
    },
    getRouteRaw("/index/indexMain"),
    {
        path: "/404",
        // @ts-ignore
        component: {template: '404'}
    }
];

const history = createWebHashHistory();

export const router = createRouter({
    history: history,
    routes: routes,
});

addRoute(history.location);

export function addRoute(routePath: string) {
    const routeName = parseRouteName(routePath);

    if (!router.hasRoute(routeName)) {
        // router.addRoute()
        const routeRecordRaw = getRouteRaw(routePath);
    
        if (routeRecordRaw) {
            router.addRoute(routeRecordRaw);
        }
    }
}

export function registerRoute(menu: MenuProto) {
    const routeRecordRaw = getRouteRaw(menu.moduleUrl);

    if (routeRecordRaw) {
        router.addRoute(routeRecordRaw);
    }
}

export function registerRoutes(menus: MenuProto[]) {
    menus.forEach(menu => registerRoute(menu));
}
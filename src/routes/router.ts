import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import {MenuProto} from "../model/MenuProto";
import {asyncRoutes} from "./async-routes";

export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/index/indexMain",
    },
    ...asyncRoutes
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export function registerRoutes(menus: MenuProto[]) {

    /*menus.forEach(menu => {
        const {moduleUrl} = menu;

        const modulePath = moduleUrl.replace(/^(\/|)/, '/');
        const hasParams = moduleUrl.indexOf('?') > -1;

        // 可以在这里指定哪些页面是公用模板的
        // todo: 这个配置可以修改为通过后台配置
        const cfg = [
            '/config/thirdConfigList',
        ];
        let routePath = modulePath.split('?').shift() ?? ""
        let path = routePath;
        for (let match of cfg) {
            if (modulePath.indexOf(match) === 0) {
                path = match;
            }
        }

        let configPath = modulePath.replace(path, "");
        let configParams =
            (modulePath.split('?')[1] ?? '')
                .split("&")
                .filter(Boolean)
                .map(p => {
                    let [key, value] = p.split('=');
                    return {key, value};
                });

        const LazyComponent = defineAsyncComponent(() => import(`../pages${path}/${path.split(/\//g).pop()}.vue`));

        function parseParams() {
            return {
                configPath: configPath,
                configParams: configParams,
            }
        }

        router.addRoute({
            path: routePath,
            component: LazyComponent,
        })
    })*/
}

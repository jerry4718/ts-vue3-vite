import {
    AsyncComponentLoader,
    AsyncComponentOptions,
    Component,
    ComponentPublicInstance,
    defineAsyncComponent
} from 'vue';

type AnonymousAsyncComponent = new () => ComponentPublicInstance;

function convertAnonymousAsyncComponent<T extends Component = {new (): ComponentPublicInstance;}>(source: AsyncComponentLoader<T> | AsyncComponentOptions<T>): T {
    return defineAsyncComponent(source);
}

const routesMapper = {
    // @ts-ignore
    "/account/accountList": defineAsyncComponent(() => (import("../pages/account/accountList/accountList.vue"))),
    // @ts-ignore
    "/config/localConfigList": defineAsyncComponent(() => import("../pages/config/localConfigList/localConfigList.vue")),
    // @ts-ignore
    "/config/thirdConfigList/AliyunOSS": defineAsyncComponent(() => import("../pages/config/thirdConfigList/thirdConfigList.vue")),
    // @ts-ignore
    "/config/thirdConfigList/QiniuCloud": defineAsyncComponent(() => import("../pages/config/thirdConfigList/thirdConfigList.vue")),
    // @ts-ignore
    "/index/indexMain": defineAsyncComponent(() => import("../pages/index/indexMain/indexMain.vue")),
    // @ts-ignore
    "/log/logList": defineAsyncComponent(() => import("../pages/log/logList/logList.vue")),
    // @ts-ignore
    "/menu/menuList": defineAsyncComponent(() => import("../pages/menu/menuList/menuList.vue")),
    // @ts-ignore
    "/order/normalList": defineAsyncComponent(() => import("../pages/order/normalList/normalList.vue")),
    // @ts-ignore
    "/order/overList": defineAsyncComponent(() => import("../pages/order/overList/overList.vue")),
    // @ts-ignore
    "/order/verifyList": defineAsyncComponent(() => import("../pages/order/verifyList/verifyList.vue")),
    // @ts-ignore
    "/role/roleList": defineAsyncComponent(() => import("../pages/role/roleList/roleList.vue")),
    // @ts-ignore
    "/user/blackList": defineAsyncComponent(() => import("../pages/user/blackList/blackList.vue")),
    // @ts-ignore
    "/user/businessList": defineAsyncComponent(() => import("../pages/user/businessList/businessList.vue")),
    // @ts-ignore
    "/user/normalList": defineAsyncComponent(() => import("../pages/user/normalList/normalList.vue")),
};

export const asyncRoutes = [

];
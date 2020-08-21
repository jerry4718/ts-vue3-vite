import {defineAsyncComponent} from 'vue';

export const asyncRoutes = [
    {
        path: "/account/accountList",
        // @ts-ignore
        component: defineAsyncComponent(() => import("../pages/account/accountList/accountList.vue")),
    },
    {
        path: "/config/localConfigList",
        // @ts-ignore
        component: defineAsyncComponent(() => import("../pages/config/localConfigList/localConfigList.vue")),
    },
    {
        path: "/config/thirdConfigList/:configType",
        // @ts-ignore
        component: defineAsyncComponent(() => import("../pages/config/thirdConfigList/thirdConfigList.vue")),
    },
    {
        path: "/index/indexMain",
        // @ts-ignore
        component: defineAsyncComponent(() => import("../pages/index/indexMain/indexMain.vue")),
    },
    {
        path: "/log/logList",
        // @ts-ignore
        component: defineAsyncComponent(() => import("../pages/log/logList/logList.vue")),
    },
    {
        path: "/menu/menuList",
        // @ts-ignore
        component: defineAsyncComponent(() => import("../pages/menu/menuList/menuList.vue")),
    },
    {
        path: "/order/normalList",
        // @ts-ignore
        component: defineAsyncComponent(() => import("../pages/order/normalList/normalList.vue")),
    },
    {
        path: "/order/overList",
        // @ts-ignore
        component: defineAsyncComponent(() => import("../pages/order/overList/overList.vue")),
    },
    {
        path: "/order/verifyList",
        // @ts-ignore
        component: defineAsyncComponent(() => import("../pages/order/verifyList/verifyList.vue")),
    },
    {
        path: "/role/roleList",
        // @ts-ignore
        component: defineAsyncComponent(() => import("../pages/role/roleList/roleList.vue")),
    },
    {
        path: "/user/blackList",
        // @ts-ignore
        component: defineAsyncComponent(() => import("../pages/user/blackList/blackList.vue")),
    },
    {
        path: "/user/businessList",
        // @ts-ignore
        component: defineAsyncComponent(() => import("../pages/user/businessList/businessList.vue")),
    },
    {
        path: "/user/normalList",
        // @ts-ignore
        component: defineAsyncComponent(() => import("../pages/user/normalList/normalList.vue")),
    },
];
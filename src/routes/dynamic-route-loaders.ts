export const dynamicRouteLoaders = new Map<string, () => Promise<any>>([
        // @ts-ignore
   ['/account/accountList', () => import("../pages/account/accountList/accountList.vue")],
    // @ts-ignore
   ['/config/localConfigList', () => import("../pages/config/localConfigList/localConfigList.vue")],
    // @ts-ignore
   ['/config/thirdConfigList', () => import("../pages/config/thirdConfigList/thirdConfigList.vue")],
    // @ts-ignore
   ['/index/indexMain', () => import("../pages/index/indexMain/indexMain.vue")],
    // @ts-ignore
   ['/log/logList', () => import("../pages/log/logList/logList.vue")],
    // @ts-ignore
   ['/menu/menuList', () => import("../pages/menu/menuList/menuList.vue")],
    // @ts-ignore
   ['/order/normalList', () => import("../pages/order/normalList/normalList.vue")],
    // @ts-ignore
   ['/order/overList', () => import("../pages/order/overList/overList.vue")],
    // @ts-ignore
   ['/order/verifyList', () => import("../pages/order/verifyList/verifyList.vue")],
    // @ts-ignore
   ['/role/roleList', () => import("../pages/role/roleList/roleList.vue")],
    // @ts-ignore
   ['/user/blackList', () => import("../pages/user/blackList/blackList.vue")],
    // @ts-ignore
   ['/user/businessList', () => import("../pages/user/businessList/businessList.vue")],
    // @ts-ignore
   ['/user/normalList', () => import("../pages/user/normalList/normalList.vue")],
]);

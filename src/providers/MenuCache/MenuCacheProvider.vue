<template>
    <slot></slot>
</template>

<script lang="ts">
import {defineComponent, ref, provide} from "vue";
import {MenuProto} from "../../model/MenuProto";
import {menuList} from "../../common/api/api";
import {VarUtil} from "../../common/utils/VarUtil";
import {Injection} from "../../common/constant/Injection";
import { parseRouteName, parseComponentName } from "../../routes/dynamic-routes";
import { registerRoute } from "../../routes/router";

export default defineComponent(() => {
    // 缓存权限菜单
    const cacheMenus = ref([] as MenuProto[]);

    const addCacheMenu = (add: MenuProto[]) => {
        const {value: cache} = cacheMenus;

        const newAdd = add.filter(addOne => cache.every(cacheOne => cacheOne.id !== addOne.id));

        newAdd.forEach(addOne => {
            const {moduleUrl} = addOne;

            if (moduleUrl) {
                registerRoute(addOne);
            }
        })

        cacheMenus.value = cache.concat(newAdd);
    };

    const getOrFromCache = async (parentId: number): Promise<MenuProto[]> => {
        let cacheChildren = cacheMenus.value.filter(cacheOne => cacheOne.parentId === parentId);

        if (cacheChildren.length > 0) {
            return cacheChildren;
        }

        const {data} = await menuList({parentId: parentId});

        if (VarUtil.isArray(data)) {
            addCacheMenu(data);
        }

        return data ?? [];
    };

    provide(Injection.NavMenu.getOrFromCache, getOrFromCache);
});
</script>
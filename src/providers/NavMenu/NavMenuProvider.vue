<template>
    <slot></slot>
</template>

<script lang="ts">
import {inject, onMounted, provide, reactive, toRef, defineComponent} from "vue";
import {MenuProto} from "../../model/MenuProto";
import {Injection} from "../../common/constant/Injection";

export default defineComponent(() => {
    const getOrFromCache = inject(Injection.NavMenu.getOrFromCache);
    // 提供head的状态
    const headerState = reactive({
        headerMenus: [] as MenuProto[],
        headerSelected: -1,
    });

    function setHeaderMenus(menus: MenuProto[]) {
        headerState.headerMenus = menus;
    }

    function setHeaderSelected(selected: number) {
        headerState.headerSelected = selected;
    }

    provide(Injection.NavMenu.headerMenus, toRef(headerState, "headerMenus"));
    provide(Injection.NavMenu.headerSelected, toRef(headerState, "headerSelected"));
    provide(Injection.NavMenu.updateHeaderSelected, setHeaderSelected);

    // 提供left的状态
    const lefterState = reactive({
        lefterSelected: -1,
    });

    function setLefterSelected(selected: number) {
        lefterState.lefterSelected = selected;
    }

    provide(Injection.NavMenu.lefterSelected, toRef(lefterState, "lefterSelected"));
    provide(Injection.NavMenu.updateLefterSelected, setLefterSelected);

    // 初始加载header中的菜单
    onMounted(async () => {
        // 获取
        const menus = await getOrFromCache(0);

        setHeaderMenus(menus);
        if (menus.length) {
            setHeaderSelected(menus[0].id);
        }
    });
});
</script>
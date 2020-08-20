<template>
    <div class="sub-nav-left">
        <router-link
                v-for="(menu, mdx) in menus"
                :key="mdx"
                :to='parseSubLeftMenuRoute(menu)'
        >
            <div
                    class="sub-nav-left-item"
                    :class="{'selected': menu.id === selected}"
            >
                {{menu.moduleName}}
            </div>
        </router-link>
    </div>
</template>

<script lang="ts">
import {MenuProto} from "../../model/MenuProto";
import {parseMenuRoute} from "../../common/utils/UrlUtils";
import {inject, onMounted, ref} from "vue";
import {Injection} from "../../common/constant/Injection";

interface NavSubLeftProps {
    parentId: number,
}

export default {
    props: {
        parentId: Number,
    },
    setup(props: NavSubLeftProps) {
        const {parentId} = props;

        const getOrFromCache = inject(Injection.NavMenu.GET_OR_FROM_CACHE);

        const headerSelected = inject(Injection.NavMenu.HEADER_SELECTED);
        const lefterSelected = inject(Injection.NavMenu.LEFTER_SELECTED);

        const menus = ref([] as MenuProto[]);
        const selected = ref(-1);

        function setMenus(newMenus: MenuProto[]) {
            menus.value = newMenus;
        }

        function setSelected(newSelected: number) {
            selected.value = newSelected;
        }

        onMounted(async () => {
            if (parentId !== -1) {
                const menus = await getOrFromCache(parentId);
                setMenus(menus);
            }
        })

        function parseSubLeftMenuRoute(menu: MenuProto) {
            const params = [{key: "route-space", value: [headerSelected.value, lefterSelected.value, menu.id].join(".")}];
            return parseMenuRoute(menu, params);
        }

        return {menus, selected, parseSubLeftMenuRoute}
    }
};
</script>
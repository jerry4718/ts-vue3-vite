<template>
    <div class="sub-nav-left">
        <div v-for="(menu, mdx) in menus"
             :key="mdx"
             class="sub-nav-left-item"
             :class="{'selected': menu.id === selected}"
             :title="parseMenuRoute(menu)"
        >
            {{menu.moduleName}}
        </div>
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

        return {menus, selected, parseMenuRoute}
    }
};
</script>
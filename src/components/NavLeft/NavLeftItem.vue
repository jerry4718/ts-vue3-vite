<template>
    <div class="nav-left">
        <div
                v-for="(menu, mdx) in menus"
                :key="mdx"
                class="nav-left-content"
                :class="{'selected': menu.id === selected}"
        >
            <div class="nav-left-item" @click="setSelected(menu.id)">
                <span>{{menu.moduleName}}</span>
            </div>
            <NavSubLeft
                    v-if="menu.id === selected"
                    :parentId="menu.id"
            />
        </div>
    </div>
</template>

<script lang="ts">
import NavSubLeft from "../NavSubLeft/NavSubLeft.vue";
import {MenuProto} from "../../model/MenuProto";
import {Injection} from "../../common/constant/Injection";
import {inject, onMounted, reactive, toRefs} from "vue";

export default {
    name: "NavLeft",
    components: {
        NavSubLeft,
    },
    props: {
        headerMenuId: Number,
    },
    setup(props) {
        const {headerMenuId} = props;

        const getOrFromCache = inject(Injection.NavMenu.getOrFromCache);

        const selected = inject(Injection.NavMenu.lefterSelected);
        const setSelected = inject(Injection.NavMenu.updateLefterSelected);

        const state = reactive({
            menus: [],
            selected: selected,
        });

        function setMenus(menus: MenuProto[]) {
            state.menus = menus;
        }

        onMounted(async () => {
            if (headerMenuId !== -1) {
                const menus = await getOrFromCache(headerMenuId);
                setMenus(menus);
            }
        });

        return {
            ...toRefs(state),
            setSelected,
        };
    }
};
</script>
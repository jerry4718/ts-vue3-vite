<template>
    <NopElement 
        v-for="headerMenu in headerMenus"
        :key="headerMenu.id"
    >
        <NavLeftItem
                v-if="headerMenu.id === headerSelected"
                :headerMenuId="headerMenu.id"
        />
    </NopElement>
</template>

<script lang="ts">
import NopElement from "../NopElement/NopElement.vue";
import NavLeftItem from "./NavLeftItem.vue";
import NavSubLeft from "../NavSubLeft/NavSubLeft.vue";
import {inject} from "vue";
import {Injection} from "../../common/constant/Injection";

export default {
    name: "NavLeft",
    components: {
        NopElement,
        NavLeftItem,
        NavSubLeft,
    },
    setup() {
        const headerMenus = inject(Injection.NavMenu.HEADER_MENUS);
        const headerSelected = inject(Injection.NavMenu.HEADER_SELECTED);

        return {
            headerMenus,
            headerSelected,
        };
    }
};
</script>
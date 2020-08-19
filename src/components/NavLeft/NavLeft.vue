<template>
    <NopElement v-for="headerMenu in headerMenus">
        <NavLeftItem
                v-if="headerMenu.id === headerSelected"
                :headerMenuId="headerMenu.id"
        />
    </NopElement>
</template>

<script lang="ts">
import NopElement from "../NoneElement/NoneElement.vue";
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
        let headerMenus = inject(Injection.NavMenu.HEADER_MENUS);
        let headerSelected = inject(Injection.NavMenu.HEADER_SELECTED);

        return {
            headerMenus,
            headerSelected,
        };
    }
};
</script>
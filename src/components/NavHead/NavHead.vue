<template>
    <div class="nav-head">
        <div
                v-for="(menu, mdx) in menus"
                :key="mdx"
                class="nav-head-item"
                :class="{ 'selected': menu.id === selected }"
                @click="onChangeHandler(menu.id)"
        >
            {{menu.moduleName}}
        </div>
    </div>
</template>

<script lang="ts">
import {inject} from "vue";
import {Injection} from "../../common/constant/Injection";

export default {
    setup() {
        let menus = inject(Injection.NavMenu.HEADER_MENUS);
        let selected = inject(Injection.NavMenu.HEADER_SELECTED);
        let updateSelectedHeader = inject(Injection.NavMenu.UPDATE_HEADER_SELECTED);

        function onChangeHandler(selected: number) {
            updateSelectedHeader(selected);
        }

        return {menus, selected, onChangeHandler};
    }
};
</script>
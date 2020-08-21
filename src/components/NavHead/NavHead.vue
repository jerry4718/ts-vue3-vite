<template>
    <div class="nav-head">
        <div
                v-for="menu in menus"
                :key="menu.id"
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
        let menus = inject(Injection.NavMenu.headerMenus);
        let selected = inject(Injection.NavMenu.headerSelected);
        let updateSelectedHeader = inject(Injection.NavMenu.updateHeaderSelected);

        function onChangeHandler(selected: number) {
            updateSelectedHeader(selected);
        }

        return {menus, selected, onChangeHandler};
    }
};
</script>
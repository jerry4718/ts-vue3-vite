<template>
    <div class="menu-menu-list">
        <div>menu/menuList</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

interface MenuListProps {

}

export default defineComponent({
    name: "MenuList",
    setup(props: MenuListProps) {
        return {};
    },
});
</script>

<style scoped>
.menu-menu-list {
    background: #FA67FD;
}
</style>
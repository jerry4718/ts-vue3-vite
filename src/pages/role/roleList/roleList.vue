<template>
    <div class="role-role-list">
        <div>role/roleList</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

interface RoleListProps {

}

export default defineComponent({
    name: "RoleList",
    setup(props: RoleListProps) {
        return {};
    },
});
</script>

<style scoped>
.role-role-list {
    background: #778FAD;
}
</style>
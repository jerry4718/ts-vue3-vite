<template>
    <div class="user-business-list">
        <div>user/businessList</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

interface BusinessListProps {

}

export default defineComponent({
    name: "BusinessList",
    setup(props: BusinessListProps) {
        return {};
    },
});
</script>

<style scoped>
.user-business-list {
    background: #8EFCE6;
}
</style>
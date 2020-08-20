<template>
    <div class="user-black-list">
        <div>user/blackList</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

interface BlackListProps {

}

export default defineComponent({
    name: "BlackList",
    setup(props: BlackListProps) {
        return {};
    },
});
</script>

<style scoped>
.user-black-list {
    background: #7AB6D6;
}
</style>
<template>
    <div class="user-normal-list">
        <div>user/normalList</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

interface NormalListProps {

}

export default defineComponent({
    name: "NormalList",
    setup(props: NormalListProps) {
        return {};
    },
});
</script>

<style scoped>
.user-normal-list {
    background: #A86F8A;
}
</style>
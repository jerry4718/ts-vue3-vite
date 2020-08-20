<template>
    <div class="user-black-list">
        <div>user/blackList</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import "./user-black-list.css";

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

</style>
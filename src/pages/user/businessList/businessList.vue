<template>
    <div class="user-business-list">
        <div>user/businessList</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import "./user-business-list.css";

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

</style>
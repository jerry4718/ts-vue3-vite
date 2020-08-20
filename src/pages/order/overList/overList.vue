<template>
    <div class="order-over-list">
        <div>order/overList</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

interface OverListProps {

}

export default defineComponent({
    name: "OverList",
    setup(props: OverListProps) {
        return {};
    },
});
</script>

<style scoped>
.order-over-list {
    background: #B7CDCA;
}
</style>
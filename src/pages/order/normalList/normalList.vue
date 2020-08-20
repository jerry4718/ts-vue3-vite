<template>
    <div class="order-normal-list">
        <div>order/normalList</div>
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
.order-normal-list {
    background: #F669EF;
}
</style>
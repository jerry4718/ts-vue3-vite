<template>
    <slot></slot>
</template>

<script>
import {defineComponent, ref, provide} from "vue";

export default defineComponent(() => {
    const count = ref(0);

    function addCount() {
        count.value = count.value + 1;
    }
    provide("provide.count", count);
    provide("provide.addCount", addCount);
});
</script>

<style scoped>

</style>
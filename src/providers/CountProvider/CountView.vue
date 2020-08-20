<template>
    <div>
        <button @click="addCount()">
            addCount: {{count}}
        </button>
    </div>
</template>

<script>
import {defineComponent, inject} from "vue";

export default defineComponent(() => {
    const count = inject("provide.count");
    const addCount = inject("provide.addCount");

    return {count, addCount};
});
</script>

<style scoped>

</style>
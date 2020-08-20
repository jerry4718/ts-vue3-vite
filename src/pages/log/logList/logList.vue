<template>
    <div class="log-log-list">
        <div>log/logList</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

interface LogListProps {

}

export default defineComponent({
    name: "LogList",
    setup(props: LogListProps) {
        return {};
    },
});
</script>

<style scoped>
.log-log-list {
    background: #A8A6FF;
}
</style>
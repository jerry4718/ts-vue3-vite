<template>
    <div class="config-local-config-list">
        <div>config/localConfigList</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

interface LocalConfigListProps {

}

export default defineComponent({
    name: "LocalConfigList",
    setup(props: LocalConfigListProps) {
        return {};
    },
});
</script>

<style scoped>
.config-local-config-list {
    background: #ADDE8C;
}
</style>
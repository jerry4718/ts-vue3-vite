<template>
    <div class="config-third-config-list">
        <div>config/thirdConfigList</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

interface ThirdConfigListProps {

}

export default defineComponent({
    name: "ThirdConfigList",
    setup(props: ThirdConfigListProps) {
        return {};
    },
});
</script>

<style scoped>
.config-third-config-list {
    background: #BFC77D;
}
</style>
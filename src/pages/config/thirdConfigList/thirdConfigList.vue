<template>
    <div class="config-third-config-list">
        <div>config/thirdConfigList</div>
    
        <CountProvider>
            <CountView></CountView>
        </CountProvider>

        <CountProvider>
            <CountView></CountView>
        </CountProvider>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CountProvider from "../../../providers/CountProvider/CountProvider.vue";
import CountView from "../../../providers/CountProvider/CountView.vue";

interface ThirdConfigListProps {

}

export default defineComponent({
    name: "ThirdConfigList",
    components: {
        CountProvider,
        CountView,
    },
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
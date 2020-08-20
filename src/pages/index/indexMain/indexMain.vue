<template>
    <div class="index-index-main">
        <div>
            <button @click="addMenus([{moduleName: '', id: -2}])">add menus</button>
            <div>
                {{menus}}
            </div>
        </div>
        <div>
            <CountProvider>
                <CountView></CountView>
            </CountProvider>

            <CountProvider>
                <CountView></CountView>
            </CountProvider>
        </div>
        <div>
        </div>
    </div>
</template>

<script lang="ts">
import {reactive, toRefs, defineComponent} from "vue";
import CountProvider from "../../../providers/CountProvider/CountProvider.vue";
import CountView from "../../../providers/CountProvider/CountView.vue";
import { MenuProto } from "../../../model/MenuProto";

interface IndexMainProps {

}

export default defineComponent({
    name: "IndexMain",
    components: {
        CountProvider,
        CountView,
    },
    setup(props: IndexMainProps) {
        const indexMain = {moduleUrl: "/index/indexMain", moduleName: '首页', id: -1} as MenuProto;

        const state = reactive({
            menus: [indexMain],
        });

        function addMenus(newMenus: MenuProto[]) {
            const {menus} = state;
            state.menus = menus.concat(newMenus.filter(newOne => menus.every(oldOne => oldOne.id !== newOne.id)));
        }

        return { ...toRefs(state), addMenus, }
    },
});
</script>

<style scoped>
.index-index-main {
    background: #8A86BD;
}
</style>
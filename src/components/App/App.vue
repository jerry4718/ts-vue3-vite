<template>
    <ContentPack>
        <template #nav-head>
            <NavHead/>
        </template>

        <template #nav-left>
            <NavLeft/>
        </template>

        <template #pack-center>
            <div>
                <button @click="addMenus([{moduleName: '', id: -2}])">add menus</button>
            </div>
            <div>
                {{state.menus}}
            </div>
        </template>
    </ContentPack>
</template>

<script lang="ts">
import ContentPack from "../ContentPack/ContentPack.vue";
import NavHead from '../NavHead/NavHead.vue'
import NavLeft from '../NavLeft/NavLeft.vue'
import {MenuProto} from "../../model/MenuProto";
import {reactive, defineAsyncComponent} from "vue";
import "./App.css";

export default {
    name: 'App',
    components: {
        ContentPack,
        NavHead,
        NavLeft,
    },
    setup() {
        const indexMain = {moduleUrl: "/index/indexMain", moduleName: '首页', id: -1} as MenuProto;

        const state = reactive({
            menus: [indexMain],
        });

        function addMenus(newMenus: MenuProto[]) {
            const {menus} = state;
            state.menus = menus.concat(newMenus.filter(newOne => menus.every(oldOne => oldOne.id !== newOne.id)));
        }

        return {
            state,
            addMenus,
        }
    }
}
</script>

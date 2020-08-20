<template>
    <ContentPack>
        <template #nav-head>
            <NavHead/>
        </template>

        <template #nav-left>
            <NavLeft/>
        </template>

        <template #pack-center>
            <router-view />
        </template>
    </ContentPack>
</template>

<script lang="ts">
import ContentPack from "../ContentPack/ContentPack.vue";
import NavHead from '../NavHead/NavHead.vue'
import NavLeft from '../NavLeft/NavLeft.vue'
import {MenuProto} from "../../model/MenuProto";
import "./App.css";

export default {
    name: 'App',
    components: {
        ContentPack,
        NavHead,
        NavLeft,
    },
    setup() {
        return {};
    }
}
</script>

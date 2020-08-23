<template>
    <ContentPack>
        <template #nav-head>
            <NavHead/>
        </template>

        <template #nav-left>
            <NavLeft/>
        </template>

        <template #pack-center>
            <div class="route-tab-bar">
                <div class="route-tab-item-container">
                    <!-- <div class="route-tab-item"
                         v-for="(routeName) in keepAliveNames"
                         :class="{'selected': showingAlive === routeName}"
                         @click.stop="tapRouteNav(aliveRoutes[routeName])"
                         :title="aliveRoutes[routeName].moduleDescribe"
                    >
                        <span>
                            <FaIcon class="trans-on-.5s"
                                    :class="{'fa-lg': showingAlive === routeName}"
                                    :name="aliveRoutes[routeName].moduleIcon"></FaIcon>
                            {{aliveRoutes[routeName].moduleName}}
                        </span>
                        <FaIcon class="fa-pull-right" name="icon-remove" @click="removeKeepAlive(routeName)"></FaIcon>
                    </div> -->
                </div>
            </div>
            <div class="route-content">
                <router-view v-slot="{ Component }">
                    <keep-alive>
                        <component :is="Component" />
                    </keep-alive>
                </router-view>
            </div>
        </template>
    </ContentPack>
</template>

<script lang="ts">
import ContentPack from "../ContentPack/ContentPack.vue";
import NavHead from '../NavHead/NavHead.vue'
import NavLeft from '../NavLeft/NavLeft.vue'
import {MenuProto} from "../../model/MenuProto";
import NavTabProvider from "../../providers/NavTab/NavTabProvider.vue";
import "./App.css";

export default {
    name: 'App',
    components: {
        ContentPack,
        NavHead,
        NavLeft,
        NavTabProvider,
    },
    setup() {
        return {};
    }
}
</script>


<style>
.route-content {
    flex-grow: 1;
    background-color: #ffffff;
    display: flex;
    flex-flow: column nowrap;
}
.route-content>:nth-child(1) {
  flex-grow: 1;
}

.route-tab-bar {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden; }
.route-tab-bar::-webkit-scrollbar {
    display: none; }

.route-tab-item-container {
    flex-flow: row nowrap;
    display: flex;
    height: 25px;
    width: max-content;
    min-width: 100%;
    padding: 2px 5px 0;
    border-bottom: #4875a4 solid 1px; }

.route-tab-item {
    height: 24px;
    font-size: 14px;
    text-align: center;
    border: #4875a4 solid;
    border-radius: 5px 5px 0 0;
    border-width: 1px 1px 0;
    margin-left: 5px;
    flex-shrink: 0; }
.route-tab-item:nth-child(1) {
    margin-left: 0; }
.route-tab-item.selected {
    z-index: 1;
    background-color: #ffffff;
    border-bottom: #ffffff 2px solid; }
.route-tab-item span {
    display: inline-block;
    min-width: 80px;
    padding: 0 15px; }
</style>

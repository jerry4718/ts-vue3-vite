<template>
    <ContentPack>
        <template #nav-head>
            <NavHead/>
        </template>

        <template #nav-left>
            <NavLeft/>
        </template>

        <template #pack-center>
            <div class="route-history-bar">
                <div class="route-history-item-container">
                    <div class="route-history-item"
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
                    </div>
                </div>
            </div>
            <div class="route-content">
                <router-view />
            </div>
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

.route-history-bar {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden; }
.route-history-bar::-webkit-scrollbar {
    display: none; }

.route-history-item-container {
    flex-flow: row nowrap;
    display: flex;
    height: 25px;
    width: max-content;
    min-width: 100%;
    padding: 2px 5px 0;
    border-bottom: #4875a4 solid 1px; }

.route-history-item {
    height: 24px;
    font-size: 14px;
    text-align: center;
    border: #4875a4 solid;
    border-radius: 5px 5px 0 0;
    border-width: 1px 1px 0;
    margin-left: 5px;
    flex-shrink: 0; }
.route-history-item:nth-child(1) {
    margin-left: 0; }
.route-history-item.selected {
    z-index: 1;
    background-color: #ffffff;
    border-bottom: #ffffff 2px solid; }
.route-history-item span {
    display: inline-block;
    min-width: 80px;
    padding: 0 15px; }
</style>

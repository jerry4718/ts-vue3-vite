<template>
    <div class="content-pack">
        <CacheMenusProvider>
            <NavMenuProvider>
                <div class="header-pack">
                    <slot name="nav-head"></slot>
                </div>
                <div class="center-pack">
                    <div class="pack-left">
                        <slot name="nav-left"></slot>
                    </div>
                    <div class="pack-center">
                        <slot name="pack-center"></slot>
                    </div>
                    <!--<div class="pack-right"></div>-->
                </div>
                <!--<div class="footer-pack"></div>-->
            </NavMenuProvider>
        </CacheMenusProvider>
    </div>
</template>

<script>
import NavMenuProvider from "../../providers/NavMenu/NavMenuProvider.vue";
import CacheMenusProvider from "../../providers/CacheMenus/CacheMenusProvider.vue";

export default {
    components: {
        NavMenuProvider,
        CacheMenusProvider,
    },
    name: "ContentPack"
}
</script>
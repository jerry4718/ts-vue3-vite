<template>
  <slot></slot>
</template>

<script lang="ts">
import {inject, onMounted, provide, reactive, toRef, defineComponent, ref} from "vue";
import {Injection} from "../../common/constant/Injection";

export default defineComponent(() => {
  const includes = ref([] as string[]);
  
  function addKeepAlive(componentName: string) {
    removeKeepAlive(componentName);

    includes.value = includes.value.concat([componentName]);
  }
  function removeKeepAlive(componentName: string) {
    const {value: oldIncludes} = includes;

    includes.value = oldIncludes.filter(include => include === componentName);
  }

  provide(Injection.NavTab.keepAliveIncludes, includes);
  provide(Injection.NavTab.addKeepAlive, addKeepAlive);
  provide(Injection.NavTab.removeKeepAlive, removeKeepAlive);
});
</script>
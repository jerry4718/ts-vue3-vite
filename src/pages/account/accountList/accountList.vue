<template>
    <div class="account-account-list">
        <div>account/accountList</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

interface AccountListProps {

}

export default defineComponent({
    name: "AccountList",
    setup(props: AccountListProps) {
        return {};
    },
});
</script>

<style scoped>
.account-account-list {
    background: #FFEAEE;
}
</style>
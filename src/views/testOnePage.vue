<template>
  <div class="testOnePage">
    <h1>This is an testOne page</h1>
    <test-one-comp />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
import testOneComp from "@/components/testOneComp.vue";
import ViewStoreData from "@/components/viewStoreData.vue";

export default defineComponent({
  components: { testOneComp, ViewStoreData },
  setup() {},
});
</script>

<style>
@media (min-width: 1024px) {
  .testOnePage {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

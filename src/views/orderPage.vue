<template>
  <div>
    <order-comp />

    <RouterLink to="/orderTwoPage">
      <button class="nextButton">다음</button>
    </RouterLink>

    <br />
    <br />
    <br />
    <view-store-data />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
import orderComp from "@/components/orderComp.vue";
import ViewStoreData from "@/components/viewStoreData.vue";

export default defineComponent({
  components: { orderComp, ViewStoreData },
  setup() {},
});
</script>

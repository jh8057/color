<template>
  <div>
    <order-two-comp />

    <RouterLink to="/testOne">
      <button class="nextButton">다음</button>
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
import orderTwoComp from "@/components/orderTwoComp.vue";

export default defineComponent({
  components: { orderTwoComp },
  setup() {},
});
</script>

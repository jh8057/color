<template>
  <div>
    <introduction-comp />

    <RouterLink to="/userInfo">
      <button class="nextButton">다음</button>
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
import introductionComp from "@/components/introductionComp.vue";

export default defineComponent({
  components: { introductionComp },
  setup() {},
});
</script>

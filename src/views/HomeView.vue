<template>
  <div>
    <introduction-comp v-if="step === 0" />
    <user-info-comp v-if="step === 1" />
    <order-comp v-if="step === 2" />
    <order-two-comp v-if="step === 3" />
    <test-one-comp v-if="step === 4" />
    <view-store-data />

    <button class="nextButton" @click="nextStep" v-if="showNextButton">
      다음
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useStore } from "vuex";
import introductionComp from "@/components/introductionComp.vue";
import OrderComp from "@/components/orderComp.vue";
import OrderTwoComp from "@/components/orderTwoComp.vue";
import ViewStoreData from "@/components/viewStoreData.vue";
import TestOneComp from "@/components/testOneComp.vue";
import UserInfoComp from "@/components/userInfoComp.vue";

export default defineComponent({
  components: {
    introductionComp,
    OrderComp,
    OrderTwoComp,
    ViewStoreData,
    TestOneComp,
    UserInfoComp,
  },
  setup() {
    const store = useStore();
    const step = computed(() => store.state.step);

    const showNextButton = computed(() => step.value !== 1 && step.value !== 4);

    const nextStep = () => {
      store.commit("upStep");
    };

    return { step, nextStep, showNextButton };
  },
});
</script>

<template>
  <div>
    <introduction-comp v-if="step === 0" />
    <user-info-comp v-if="step === 1" />
    <order-comp v-if="step === 2" />
    <order-two-comp v-if="step === 3" />
    <test-one-comp v-if="step === 4" />
    <!-- <view-store-data v-if="step !== 4" /> -->
    <order-three-comp v-if="step === 5" />
    <order-four-comp v-if="step === 6" />
    <test-two-comp v-if="step === 7" />
    <color-test v-if="step === 8" />
    <result-end v-if="step === 9" />

    <button v-if="showNextButton" class="nextButton" @click="nextStep">
      다음
    </button>
    <button v-if="showResetButton" @click="reset">처음으로</button>
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
import OrderThreeComp from "../components/orderThreeComp.vue";
import OrderFourComp from "../components/orderFourComp.vue";
import TestTwoComp from "../components/testTwoComp.vue";
import ResultEnd from "../components/resultEnd.vue";
import ColorTest from "../components/colorTest.vue";

export default defineComponent({
  components: {
    introductionComp,
    OrderComp,
    OrderTwoComp,
    ViewStoreData,
    TestOneComp,
    UserInfoComp,
    OrderThreeComp,
    OrderFourComp,
    TestTwoComp,
    ResultEnd,
    ColorTest,
  },
  setup() {
    const store = useStore();
    const step = computed(() => store.state.step);

    const showNextButton = computed(
      () =>
        step.value !== 1 &&
        step.value !== 4 &&
        step.value !== 7 &&
        step.value !== 8 &&
        step.value !== 9
    );

    const showResetButton = computed(() => step.value == 9);

    const nextStep = () => {
      store.commit("upStep");
    };

    const reset = () => {
      localStorage.removeItem("vuex");
      location.reload();
    };

    return { step, nextStep, showNextButton, showResetButton, reset };
  },
});
</script>

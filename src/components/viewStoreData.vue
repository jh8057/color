<template>
  <div class="testStore">
    --개발확인용: 데이터 저장확인--<br />
    {{ age }} | {{ gender }} | {{ nickName }} | step : {{ step }} | list :{{
      answerList.length
    }}
    <button @click="reset">처음으로</button>
    <button @click="resetList">reset</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const age = computed(() => store.getters.getAge);
    const gender = computed(() => store.state.gender);
    const nickName = computed(() => store.state.nickName);
    const step = computed(() => store.state.step);
    const selectedAnswer = computed(() => store.state.selectedAnswer);
    const answerList = computed(() => store.state.answerList);

    const reset = () => {
      store.commit("setStep", 0);
    };
    const resetList = () => {
      store.commit("resetList");
    };

    return {
      age,
      gender,
      nickName,
      step,
      reset,
      selectedAnswer,
      answerList,
      resetList,
    };
  },
});
</script>

<style>
.testStore {
  position: absolute;
  bottom: -80px;
}
</style>

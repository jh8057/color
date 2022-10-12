<template>
  <div class="testStore">
    --개발확인용: 데이터 저장확인--<br />
    {{ age }} | {{ gender }} | {{ nickName }} | step : {{ step }}
    <button @click="reset">처음으로</button>
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

    const reset = () => {
      store.commit("setStep", 0);
    };

    return {
      age,
      gender,
      nickName,
      step,
      reset,
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

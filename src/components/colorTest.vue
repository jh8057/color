<template>
  <div class="testTwoComp">
    <article v-if="init" class="Question">
      <div class="Question__color">
        <img src="@/assets/colorTest/12.jpg" class="imgList__item--img" />
        <input v-model="colorInput" />&nbsp;
        <button @click="showEnd" style="font-size: 15px; padding: 10px">
          다음
        </button>
      </div>
    </article>
    <article v-else class="QuestionEnd">
      <div>
        설문이 종료되었습니다.<br />
        결과물을 담당자에게 보내주세요!<br />
        귀한 시간 내주셔서 감사합니다.<br />
      </div>
      <button @click="goNextStep" style="font-size: 15px; padding: 10px">
        결과보기</button
      ><br />
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const colorInput = ref("");
    const init = ref(true);
    const store = useStore();

    const showEnd = () => {
      store.commit("setColorTwo", colorInput.value);
      init.value = false;
    };
    const goNextStep = () => {
      store.commit("setStep", 9);
    };
    return {
      colorInput,
      goNextStep,
      showEnd,
      init,
    };
  },
});
</script>

<style>
.orderComp {
  margin: auto;
  width: 90vw;
  height: 70vh;
  text-align: center;
  align-content: center;
}
.orderComp__center {
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
</style>

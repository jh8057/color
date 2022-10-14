<template>
  <div class="testTwoComp">
    <h1>두번째 테스트</h1>
    <main v-show="question" class="Question">
      <div class="Question__center">
        <h3>보았던 자극물을 하나 선택해주세요.</h3>
      </div>
    </main>
    <main v-show="showCenter" class="breakTime">
      <div class="centerPoint">
        <img src="/center.png" class="centerPoint__img" />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";

export default defineComponent({
  setup() {
    const question = ref(false);
    const showCenter = computed(() => {
      return !question.value;
    });

    const showCenterPoint = () => {
      console.log("showCenter");
      question.value = false;
      //question 다음꺼를 여기서 미리 작업 시작
      //   if (this.len > 0) {
      //     // 16개중 랜덤으로 하나를 뽑아야 된다.
      //     // 쓰고 다시 나오면 안되므로 버려야된다.
      //     this.doSelect();
      setTimeout(showQuestion, 1000);
      //   }
    };
    const showQuestion = () => {
      console.log("showQuestion");
      question.value = true;
      setTimeout(saveResult, 3000);
    };
    const saveResult = () => {
      console.log("SAVED");
      showCenterPoint();
    };

    //걍 시작
    showCenterPoint();

    return { question, showCenter };
  },
});
</script>

<style>
/* .testOneComp {
    margin: auto;
    width: 80vh;
    height: 80vh;
    text-align: center;
    align-content: center;
  } */
</style>

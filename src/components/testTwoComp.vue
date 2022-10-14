<template>
  <div class="testTwoComp">
    <h1>두번째 테스트</h1>
    {{ Arr }}
    <button @click="resetpop">pop</button>
    <main v-show="question" class="Question">
      <div class="Question__center">
        <h3>보았던 자극물을 하나 선택해주세요.</h3>
        <div class="imgList">
          <template v-for="i in Arr" :key="i + 'arr'">
            <img :src="`/colorProject/answer/${i}.png`" />
          </template>
        </div>
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
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const question = ref(false);
    const showCenter = computed(() => {
      return !question.value;
    });
    const store = useStore();
    const len = computed(() => store.getters.getTotalArrLength);
    const Arr = computed(() => store.state.selectedArr);
    const showCenterPoint = () => {
      console.log("--showCenter--");
      question.value = false;
      //question 다음꺼를 여기서 미리 작업 시작
      if (len.value > 0) {
        // 4개짜리 배열 받기
        store.commit("popArr");
        console.log("====");
        console.log(Arr.value);
        console.log(Arr);
        console.log("====");
        setTimeout(showQuestion, 1000);
      }
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

    const resetpop = () => {
      store.commit("resetpop");
    };

    /**
     * Shuffles array in place.
     * @param {Array} a items An array containing the items.
     */
    const shuffle = (a: Array<number>) => {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    };

    //걍 시작
    console.log("-----");
    showCenterPoint();

    return { question, showCenter, resetpop, Arr };
  },
});
</script>

<style>
.testTwoComp {
  margin: auto;
  width: 80vh;
  height: 80vh;
  text-align: center;
  align-content: center;
}
.imgList {
  display: flex;
}
</style>

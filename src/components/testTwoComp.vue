<template>
  <div class="testTwoComp">
    <main v-show="question" class="Question">
      <h3>보았던 자극물을 하나 선택해주세요.</h3>
      <div class="QuestionTwo__center">
        <div class="imgList">
          <div
            v-for="(i, index) in ArrShffuled"
            :key="i + 'arr'"
            class="imgList__item"
          >
            <img
              :src="`/colorProject/total/${i}.png`"
              class="imgList__item--img"
            />
            <div class="selectSection__item">
              <label :for="`select${index + 1}`">{{ index + 1 }}</label>
              <input
                type="radio"
                :id="`select${index + 1}`"
                :value="i"
                v-model="selected"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    <main v-show="showCenter" class="breakTime">
      <div class="centerPointTwo">
        <img src="/center.png" class="centerPoint__img" />
      </div>
    </main>
    <article v-show="end" class="Question">
      <div class="Question__color">
        <p>이시하라 색맹 테스트입니다.<br /> 보이는 숫자를 적어주세요.</p>
        <img :src="`/colorProject/colorTest/${colorNum}.jpg`" class="imgList__item--img" />
        <input v-model="colorInput" />&nbsp;
        <button @click="goNextStep" style="font-size: 15px; padding: 10px">
          다음
        </button>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import type { finalResultTwo } from "../types/types";
export default defineComponent({
  setup() {
    const selected = ref("");
    const colorInput = ref("");
    const question = ref(false);
    const showCenter = computed(() => {
      return !question.value && !end.value;
    });
    const store = useStore();
    const len = computed(() => store.getters.getTotalArrLength);
    const Arr = computed(() => store.state.selectedArr);
    const ArrAnswer = computed(() => store.state.selectedArrAnswer);
    const ArrShffuled = computed(() => shuffle(store.state.selectedArr));
    const finalResultTwo: Array<finalResultTwo> = [];
    const end = computed(() => store.state.testTwoEnd);
    const finData = computed(() => store.state.finalResultTwo);

    const colorArr = [2,3,5,6,7,8,12,16,29,42,45,74,97]
    const colorNum = computed(()=> colorArr[Math.floor(Math.random()*colorArr.length)])

    const showCenterPoint = () => {
      question.value = false;
      //question 다음꺼를 여기서 미리 작업 시작
      if (len.value > 0) {
        // 4개짜리 배열 받기
        store.commit("popArr");
        setTimeout(showQuestion, 1000);
      }
    };

    const showQuestion = () => {
      question.value = true;
      setTimeout(saveResult, 5000);
    };
    const saveResult = () => {
      let extraIdx = ArrShffuled.value.indexOf(ArrAnswer.value);
      let extra = ArrShffuled.value.slice();
      extra.splice(extraIdx, 1);

      let result = {
        totalArr: ArrShffuled.value,
        selected: selected.value,
        answer: ArrAnswer.value,
        extra,
      };

      finalResultTwo.push(result);
      console.log("result", result);
      selected.value = "";

      if (len.value > 0) {
        saveFinal();
      } else {
        console.log("end");
        question.value = false;
        store.commit("setTestTwoEnd", true);
      }

      showCenterPoint();
    };
    const saveFinal = () => {
      store.commit("setFinalResultTwo", finalResultTwo);
    };

    const goNextStep = () => {
      store.commit("setColorOne", { answer : colorNum,input :colorInput.value});
      store.commit("setStep", 8);
    };

    /**
     * Shuffles array in place.
     * @param {Array} arr items An array containing the items.
     */
    const shuffle = (arr: Array<number>) => {
      var j, x, i;
      let a = arr.slice();
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

    onMounted(() => {
      if (finData.value.length > 0) finalResultTwo.push(...finData.value);
    });

    return {
      question,
      showCenter,
      Arr,
      selected,
      ArrShffuled,
      end,
      goNextStep,
      finData,
      finalResultTwo,
      colorInput,
      colorNum
    };
  },
});
</script>

<style>
.testTwoComp {
  margin: auto;
  padding-top: 1rem;
  width: 80vw;
  height: 80vh;
  text-align: center;
  align-content: center;
}
.centerPointTwo,
.QuestionTwo__center {
  width: 100%;
  height: 85%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}

/* .QuestionTwo__center {
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 22vh;
} */
.imgList {
  display: flex;
  width: 100%;
  justify-content: space-between;
  object-fit: cover;
}
.imgList__item {
  width: 15vw;
  height: 15vw;
}
.imgList__item--img {
  width: 100%;
  height: 100%;
}

.Question__color {
  margin: auto;
  width: 40vw;
  height: 40vw;
}
</style>

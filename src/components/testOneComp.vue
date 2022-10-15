<template>
  <div class="testOneComp">
    <main v-show="question" class="Question">
      <div class="Question__center">
        <h3>색상은 {{ one }}인가요 {{ two }}인가요?</h3>
        <img :src="`/colorProject/answer/${num}.png`" />
        <section class="selectSection">
          <div class="selectSection__item">
            <label for="select1">{{ one }}</label>
            <input type="radio" id="select1" :value="one" v-model="selected" />
          </div>
          <div class="selectSection__item">
            <label for="select2">{{ two }}</label>
            <input type="radio" id="select2" :value="two" v-model="selected" />
          </div>
        </section>
      </div>
    </main>
    <main v-show="showCenter" class="breakTime">
      <div class="centerPoint">
        <img src="/center.png" class="centerPoint__img" />
      </div>
    </main>

    <article v-show="end" class="QuestionEnd">
      <div>
        창을 종료하지 말고 지시가 있기 전까지<br />
        대기하여 주시기 바랍니다.<br />
      </div>
      <div style="margin: 30px">
        <button @click="goTestTwo" style="font-size: 15px; padding: 10px">
          다음</button
        ><br />
      </div>
      <!-- <div>
        <button @click="resetList">다시 한번 - 테스트용</button><br />
        <button @click="reset">페이지 처음으로 - 테스트용</button><br />
        <button @click="showResult">
          결과보기(아래) - 2번 테스트 끝난 지점으로 이동
        </button>
      </div> -->
    </article>

    <article v-if="showFin" class="result" id="resultElement">
      <p style="font-weight: bold">전문이 보이도록 세로모드로 캡쳐해주세요.</p>
      <table-result v-model:result="finalResult" :key="finData[0]" />
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { mapMutations } from "vuex";
import tableResult from "./tableResult.vue";
import type { finalResult } from "../types/types";

export default defineComponent({
  components: { tableResult },
  setup() {
    const selected = ref("");
    const question = ref(false);
    const answerList: Array<string> = [];

    const finalResult: Array<finalResult> = [];
    const store = useStore();

    const selectedAnswer = computed(() => store.state.selectedAnswer);
    const one = computed(() => store.state.selectedAnswer.one);
    const two = computed(() => store.state.selectedAnswer.two);
    const num = computed(() => store.state.selectedAnswer.num || 1);
    const answer = computed(() => store.state.selectedAnswer.answer);
    const len = computed(() => store.getters.getAnswerListLength);
    const finData = computed(() => store.state.finalResult);
    const end = computed(() => store.state.testOneEnd);

    //computed
    const showCenter = computed(() => {
      return !question.value && !end.value;
    });

    const doSelect = async () => {
      store.commit("popAnswer");
      return true;
    };

    const resetList = () => {
      store.commit("resetList");
      location.reload();
    };
    const reset = () => {
      store.commit("setStep", 0);
    };
    const saveFinal = () => {
      store.commit("setFinalResult", finalResult);
    };

    const showFin = ref(false);
    const showResult = () => {
      showFin.value = showFin.value ? false : true;
    };

    const goTestTwo = () => {
      store.commit("setStep", 5);
    };

    // const imgSrc = computed(() => {
    //   return process.env.PUBLIC_URL + `/answer/${num}.png`;
    // });
    return {
      selected,
      question,
      answerList,
      selectedAnswer,
      one,
      two,
      num,
      answer,
      doSelect,
      len,
      resetList,
      reset,
      showResult,
      finalResult,
      showFin,
      saveFinal,
      finData,
      showCenter,
      end,
      goTestTwo,
    };
  },
  mounted() {
    // 재시작 방지 --미완
    if (this.finData.length > 0) this.finalResult = this.finData;

    // 처음에 조준점으로 시작
    // 검색 끝난 뒤 다시 실행하면 안됨
    if (this.len > 0) this.showCenterPoint();
  },
  methods: {
    ...mapMutations(["setTestOneEnd"]),
    showCenterPoint() {
      this.question = false;
      //question 다음꺼를 여기서 미리 작업 시작
      if (this.len > 0) {
        // 16개중 랜덤으로 하나를 뽑아야 된다.
        // 쓰고 다시 나오면 안되므로 버려야된다.
        this.doSelect();
        setTimeout(this.showQuestion, 1000);
      }
    },
    async showQuestion() {
      this.question = true;
      setTimeout(this.saveResult, 3000);
    },
    saveResult() {
      let result = {
        num: this.num,
        answer: this.selected,
        realAnswer: this.answer,
      };
      this.finalResult.push(result);
      this.selected = "";
      console.log(result);
      this.saveFinal();

      if (this.len > 0) {
        this.showCenterPoint();
      } else {
        console.log("end");
        this.question = false;
        this.setTestOneEnd(true);
      }
    },
  },
});
</script>

<style>
.testOneComp {
  margin: auto;
  width: 80vh;
  height: 80vh;
  text-align: center;
  align-content: center;
}
.breakTime,
.Question,
.QuestionEnd {
  width: 100%;
  height: 100%;
}
.QuestionEnd {
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

img {
  width: 45vh;
  height: 45vh;
}
.centerPoint {
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.Question__center {
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

.centerPoint__img {
  width: 30px;
  height: 30px;
}

.selectSection {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.selectSection__item {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>

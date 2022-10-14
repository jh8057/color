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
    <main v-show="end" class="QuestionEnd">
      16번 끝<br />
      임시 테스트 확인용버튼<br />
      <button @click="resetList">다시반복</button><br />
      <button @click="reset">페이지 처음으로</button><br />
      <button @click="showResult">결과보기</button>
    </main>

    <article v-if="showFin" class="result">
      <table-result :result="finalResult" />
      **어떻게 나오게 할지는 고민을 조금 더 해봐야할 것 같습니다.
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
      console.log("1", num.value);
      store.commit("popAnswer");
      console.log("2", num.value);
      // if(result) return true
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

    const imgSrc = computed(() => {
      return process.env.PUBLIC_URL + `/answer/${num}.png`;
    });
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
      imgSrc,
      showCenter,
      end,
    };
  },
  mounted() {
    // 재시작 방지 --미완
    if (this.finData.length > 0) this.finalResult = this.finData;

    // 처음에 조준점으로 시작
    // 1초 뒤에 문제 출제
    // 검색 끝난 뒤 다시 실행하면 안됨
    if (this.len > 0) setTimeout(this.showCenterPoint, 1000);
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
      setTimeout(this.saveResult, 1000);
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
.Question {
  width: 100%;
  height: 100%;
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

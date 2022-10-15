<template>
  <div class="testTwoComp">
    <h3>보았던 자극물을 하나 선택해주세요.</h3>
    <main v-show="question" class="Question">
      <div class="QuestionTwo__center">
        <div class="imgList">
          <div v-for="(i, index) in Arr" :key="i + 'arr'" class="imgList__item">
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
  </div>
  <div style="display: absolute">
    {{ Arr }} <button @click="resetpop">pop</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const selected = ref("");
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
        setTimeout(showQuestion, 1000);
      }
    };
    const showQuestion = () => {
      console.log("showQuestion");
      question.value = true;
      setTimeout(saveResult, 5000);
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

    return { question, showCenter, resetpop, Arr, selected };
  },
});
</script>

<style>
.testTwoComp {
  margin: auto;
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
</style>

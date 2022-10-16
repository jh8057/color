import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import answerJson from "@/data/answer.json";
export const store = createStore({
  plugins: [createPersistedState()],
  state: {
    step: 0,
    gender: "",
    age: "",
    nickName: "",
    answerList: answerJson.answerList,
    selectedAnswer: {},
    finalResult: [],
    finalResultTwo: [],
    testOneEnd: false,
    testTwoEnd: false,
    totalArr: answerJson.total,
    answerArr: answerJson.answer,
    selectedArr: [] as Array<number>,
    selectedArrAnswer: 0,
    colorOne: "",
    colorTwo: "",
  },
  getters: {
    getGender(state) {
      return state.gender;
    },
    getAge(state) {
      return state.age;
    },
    getNickName(state) {
      return state.nickName;
    },
    getAnswerListLength(state) {
      return state.answerList.length;
    },
    getTotalArrLength(state) {
      return state.totalArr.length;
    },
  },
  mutations: {
    setStep(state, value) {
      state.step = value;
    },
    upStep(state) {
      state.step = state.step + 1;
    },
    setGender(state, value) {
      state.gender = value;
    },
    setAge(state, value) {
      state.age = value;
    },
    setNickName(state, value) {
      state.nickName = value;
    },
    setFinalResult(state, value) {
      state.finalResult = value;
    },
    setFinalResultTwo(state, value) {
      state.finalResultTwo = value;
    },
    resetState(state) {
      state.age = "";
      state.gender = "";
      state.step = 0;
      state.nickName = "";
      state.answerList = answerJson.answerList;
      state.testOneEnd = false;
      state.selectedAnswer = {};
      state.finalResult = [];
    },
    resetList(state) {
      state.answerList = answerJson.answerList;
      state.selectedAnswer = {};
      state.finalResult = [];
      state.testOneEnd = false;
    },
    popAnswer(state) {
      let random = Math.floor(Math.random() * state.answerList.length);
      state.selectedAnswer = state.answerList[random];
      //삭제
      state.answerList.splice(random, 1);
    },
    popArr(state) {
      state.selectedArr = [];
      for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * state.totalArr.length);
        state.selectedArr.push(state.totalArr[random]);
        state.totalArr.splice(random, 1);
      }

      let random = Math.floor(Math.random() * state.answerArr.length);
      state.selectedArr.push(state.answerArr[random]);
      state.selectedArrAnswer = state.answerArr[random];
      state.answerArr.splice(random, 1);
    },
    setTestOneEnd(state, value) {
      state.testOneEnd = value;
    },
    setTestTwoEnd(state, value) {
      state.testTwoEnd = value;
    },
    setColorOne(state, value) {
      state.colorOne = value;
    },
    setColorTwo(state, value) {
      state.colorTwo = value;
    },
  },
  actions: {},
});

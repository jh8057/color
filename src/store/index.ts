import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
  plugins: [createPersistedState()],
  state: {
    step: 0,
    gender: "",
    age: "",
    nickName: "",
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
  },
});

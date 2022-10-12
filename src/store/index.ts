import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
  plugins: [createPersistedState()],
  state: {
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

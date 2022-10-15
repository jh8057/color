<template>
  <div class="userInfoComp">
    <h2>당신의 정보를 알려주세요.</h2>
    <p>
      나이 :
      <input v-model="age" maxlength="3" style="width: 23px" />
    </p>
    <br />
    <p>
      성별 :
      <input type="radio" id="man" value="남" v-model="gender" />
      <label for="man">남</label>
      &nbsp;
      <input type="radio" id="women" value="여" v-model="gender" />
      <label for="women">여</label>
    </p>
    <br />
    <p>
      닉네임 :
      <input v-model="nickName" maxlength="100" style="width: 200px" />
    </p>

    <button class="nextButton" @click.prevent="saveData">다음</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();

    const age = ref("");
    const gender = ref("");
    const nickName = ref("");

    const saveData = () => {
      let valid = validate();
      if (valid) {
        store.commit("setAge", age);
        store.commit("setGender", gender);
        store.commit("setNickName", nickName);
        store.commit("upStep");
      }
    };
    const validate = () => {
      if (!age.value || age.value.length < 0) {
        alert("나이를 입력해주세요.");
        return false;
      }
      if (!gender.value || gender.value.length < 0) {
        alert("성별을 선택해주세요.");
        return false;
      }
      if (!nickName.value || nickName.value.length < 0) {
        alert("닉네임을 입력해주세요.");
        return false;
      }
      if (isNaN(parseInt(age.value))) {
        alert("나이는 숫자로 입력해주세요.");
        return false;
      }
      return true;
    };

    return {
      age,
      gender,
      nickName,
      saveData,
    };
  },
});
</script>

<style></style>

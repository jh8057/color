<template>
  <div>
    <p>
      *휴대전화 화면을 세로 모드로 변경 한 후 전체 데이터가 나오도록 캡쳐하여
      담당자에게 전송부탁드립니다!
    </p>
    <p>*담당자 임지현 : 010-5470-2750</p>
  </div>
  <br />
  <hr />
  <div class="userInfo">
    <p>테스트 조건 : shallow-color</p>
    <p>
      사용자 정보 : {{ userInfo.nickName }} | {{ userInfo.gender }} |
      {{ userInfo.age }}세
    </p>
  </div>
  <table-result :result1="result1" :result2="result2" />
  <br />
  <hr />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import tableResult from "./tableResult.vue";
export default defineComponent({
  components: { tableResult },
  setup() {
    const store = useStore();

    const result1 = computed(() => store.state.finalResult);
    const result2 = computed(() => store.state.finalResultTwo);
    const userInfo = computed(() => {
      return {
        nickName: store.state.nickName,
        age: store.state.age,
        gender: store.state.gender,
      };
    });

    return {
      result1,
      result2,
      userInfo,
    };
  },
});
</script>

<style scoped>
* {
  padding: 0;
}
.tableData {
  margin: auto;
}
.userInfo {
  font-size: 12px;
}
</style>

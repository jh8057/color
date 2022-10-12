<template>
  <div class="testStore">
    --개발확인용: 데이터 저장확인--<br />
    {{ age }} | {{ gender }} |
    {{ nickName }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const age = computed(() => store.getters.getAge);
    const gender = computed(() => store.state.gender);
    const nickName = computed(() => store.state.nickName);

    return {
      age,
      gender,
      nickName,
    };
  },
});
</script>

<style>
.testStore {
  margin: 40px;
}
</style>

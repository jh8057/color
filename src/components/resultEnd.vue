<template>
  <div>*해당 화면을 캡쳐해서 담당자에게 전송부탁드립니다.</div>
  <table-result :result1="result1" :result2="result2" />
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
    // finalResultTwo
    return {
      result1,
      result2,
    };
  },
});
</script>

<style>
.tableData {
  margin: auto;
}
</style>

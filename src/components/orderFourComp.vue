<template>
  <div class="orderComp">
    <div class="orderComp__center">
      <h1>** 설문은 다음 순서로 진행됩니다.</h1>
      <p>
        1.설문이 시작됨과 함께 십자가가 1초 동안 등장합니다. 십자가의 중앙에
        시선을 고정시켜 주십시오.
      </p>
      <p>
        2.이후 네 개의 시각자극이 동시에 제시되면
        <span style="font-weight: bold">앞에서 보았던 자극 하나</span>를 5초
        이내에 선택하십시오.
      </p>
      <p>3.이러한 과정이 총 16번 반복됩니다.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style>
.orderComp {
  width: 100%;
  height: 100%;
}
.orderComp__center {
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
</style>

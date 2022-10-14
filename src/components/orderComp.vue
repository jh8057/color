<template>
  <div class="orderComp">
    <div class="orderComp__center">
      <h1>[ 지시문 ]</h1>
      <p>
        본 연구는 사람들이 색상을 어떻게 지각하는지 알아보기 위해
        고안되었습니다. 질문에 대한 정답은 정해져 있지 않으니 본인이 생각하기에
        가장 적합하다고 생각하는 선택지를 골라주십시오.
      </p>
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

<template>
  <div class="tableFlex">
    <div class="tableFlex__item">
      <h3>부호화</h3>
      <table class="tableData">
        <thead>
          <tr>
            <th scope="col">시행순서</th>
            <th scope="col">자극물</th>
            <th scope="col">선택정답</th>
            <th scope="col">실제정답</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(r, index) in result1" :key="r.num">
            <td>{{ index + 1 }}</td>
            <td>{{ r.num }}</td>
            <td>{{ r.answer }}</td>
            <td>{{ r.realAnswer }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tableFlex__item">
      <h3>인출</h3>
      <table class="tableData">
        <thead>
          <tr>
            <th scope="col">시행순서</th>
            <th scope="col">자극물</th>
            <th scope="col">방해자극</th>
            <th scope="col">배치순서</th>
            <th scope="col">선택정답</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(r, index) in result2" :key="r.num">
            <td>{{ index + 1 }}</td>
            <td>{{ r.answer }}</td>
            <td>{{ r.extra.join(",") }}</td>
            <td>{{ r.totalArr.join(",") }}</td>
            <td>{{ r.selected }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    result1: { type: Array as any, default: [] },
    result2: { type: Array as any, default: [] },
  },
};
</script>

<style scoped>
* {
  padding: 0;
}
.tableData {
  margin: auto;
  border: 1px solid black;
  border-collapse: collapse;
}
.tableFlex {
  display: flex;
  width: 95vw;
  margin: 10px;
}
th,
td {
  border: 1px solid #444444;
}
</style>

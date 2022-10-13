<template>
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
      <tr v-for="(r, index) in result" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ r.num }}</td>
        <td>{{ r.answer }}</td>
        <td>{{ r.realAnswer }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
export default {
  props: {
    result: { type: Array as any, deafult: [] },
  },
};
</script>

<style>
.tableData {
  margin: auto;
}
</style>

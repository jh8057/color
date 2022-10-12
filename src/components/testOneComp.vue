<template>
  <div class="testOneComp">
    <main v-if="question" class="Question">
      <h3>색상은 자주인가요 빨강인가요?</h3>
      <img src="@/assets/answer/1.png" />
      <section class="selectSection">
        <input type="radio" id="select1" value="자주" v-model="selected" />
        <label for="select1">자주</label>

        <input type="radio" id="select2" value="빨강" v-model="selected" />
        <label for="select2">빨강</label>
      </section>
    </main>
    <main v-else class="breakTime">
      <img src="@/assets/centerBar.png" style="width: 30px; height: 30px" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  setup() {
    const selected = ref("");
    const question = ref(true);

    return {
      selected,
      question,
    };
  },
  mounted() {
    console.log("T");
    setTimeout(this.printAA, 3000);
  },
  methods: {
    printAA() {
      this.question = false;
      console.log("TRQW");
      setTimeout(this.showQuestion, 1000);
    },
    showQuestion() {
      this.question = true;
      setTimeout(this.printAA, 3000);
    },
  },
});
</script>

<style>
.testOneComp {
  margin: auto;
  text-align: center;
  align-content: center;
}

img {
  width: 50vh;
  height: 50vh;
}
</style>

<!-- index.vue -->
<script setup lang="ts">
useHead({
  title: "Quiz app with Xata",
});

const questionsAnswered = 0;
const totalCorrect = 0;
const { data: questions } = await useFetch(`/api/questions`);
const { data: answers } = await useFetch(`/api/answers`);

console.log(answers);

const results = [
  {
    min: 0,
    max: 2,
    title: "Try again!",
    desc: "Do a little more studying and you may succeed!",
  },
  {
    min: 4,
    max: 4,
    title: "Wow, you're a genius!",
    desc: "Studying has definitely paid off for you!",
  },
];
</script>

<template>
  <main>
    <div class="ctr">
      <Questions
        v-if="questionsAnswered < questions.length"
        :questions="questions"
        :answers="answers" />
      <Result v-else />
      <button type="button" class="reset-btn">Reset</button>
    </div>
  </main>
</template>

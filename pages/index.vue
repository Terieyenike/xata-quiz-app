<script setup lang="ts">
useHead({
  title: "Quiz app with Xata",
});

let questionsAnswered = useState("questionsAnswered", () => 0);
let totalCorrect = useState("totalCorrect", () => 0);

const { data: questions } = await useFetch(`/api/questions`);
const { data: answers } = await useFetch(`/api/answers`);

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

const questionAnswered = (is_correct: boolean) => {
  if (is_correct) {
    totalCorrect.value++;
  }
  questionsAnswered.value++;
};
</script>

<template>
  <main>
    <div class="ctr">
      <Questions
        v-if="questionsAnswered < questions?.length"
        :questions="questions"
        :questionsAnswered="questionsAnswered"
        @question-answered="questionAnswered"
        :answers="answers" />
      <Result v-else />
      <button type="button" class="reset-btn">Reset</button>
    </div>
  </main>
</template>

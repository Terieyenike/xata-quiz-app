<script setup>
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

const questionAnswered = (is_correct) => {
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
    <footer class="footer">
      <div class="info">
        <p>Quiz app with Xata</p>
        <p>
          Built with <span class="hearts">&hearts;</span> by
          <a
            href="https://twitter.com/terieyenike"
            target="_"
            rel="noopener noreferrer"
            >teri</a
          >
        </p>
      </div>
    </footer>
  </main>
</template>

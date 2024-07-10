<script setup>
useSeoMeta({
  title: "Quiz - QA app",
  ogTitle: "Quiz - QA app",
  description:
    "Let's test your knowledge with our engaging and challenging quiz app.",
  ogDescription:
    "Let's test your knowledge with our engaging and challenging quiz app.",
  ogImage:
    "https://res.cloudinary.com/terieyenike/image/upload/v1720489148/quiz_vyvk4d.png",
  twitterCard: "summary_large_image",
});

const questionsAnswered = useState("questionsAnswered", () => 0);
const totalCorrect = useState("totalCorrect", () => 0);

const { data: questions } = await useFetch(`/api/questions`);
const { data: answers } = await useFetch(`/api/answers`);

const numQuestions = questions.value.length;

const results = [
  {
    min: 0,
    max: 2,
    title: "Try again!",
    desc: "Do a little more studying and you may succeed!",
  },
  {
    min: numQuestions,
    max: numQuestions,
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

const reset = () => {
  totalCorrect.value = 0;
  questionsAnswered.value = 0;
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
      <Result
        v-else
        :results="results"
        :totalCorrect="totalCorrect"
        :questionsAnswered="questionsAnswered" />
      <button
        type="button"
        class="reset-btn"
        @click.prevent="reset"
        v-if="questionsAnswered === questions.length">
        Reset
      </button>
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

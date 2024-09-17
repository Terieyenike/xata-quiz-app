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
    <Header />
    <div class="ctr">
      <Questions
        v-if="questionsAnswered < questions.length"
        :questions="questions"
        :answers="answers"
        :questionsAnswered="questionsAnswered"
        @question-answered="questionAnswered" />
      <Result
        v-else
        :results="results"
        :totalCorrect="totalCorrect"
        :questionsAnswered="questionsAnswered" />
      <button
        type="button"
        class="reset-btn"
        v-if="questionsAnswered === questions.length"
        @click.prevent="reset">
        Reset
      </button>
    </div>
    <Footer />
  </main>
</template>

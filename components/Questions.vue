<script setup>
const props = defineProps({
  questions: Array,
  answers: Array,
  questionsAnswered: Number,
});

const getAnswersForQuestion = (questionId) => {
  return props.answers.filter((answer) => answer.question.id === questionId);
};
const emit = defineEmits(["question-answered"]);

const selectAnswer = (is_correct) => {
  emit("question-answered", is_correct);
};
</script>

<template>
  <div class="questions-ctr">
    <div class="progress">
      <div
        class="bar"
        :style="{
          width: `${(questionsAnswered / questions.length) * 100}%`,
        }"></div>
      <div class="status">
        {{ questionsAnswered }} out of {{ questions.length }} questions answered
      </div>
    </div>
    <div
      class="single-question"
      v-for="(question, qi) in questions"
      :key="question.id"
      v-show="questionsAnswered === qi">
      <div class="question">{{ question.question_text }}</div>
      <div class="answers">
        <div
          class="answer"
          v-for="answer in getAnswersForQuestion(question.id)"
          :key="answer.answer_text"
          @click.prevent="selectAnswer(answer.is_correct)">
          {{ answer.answer_text }}
        </div>
      </div>
    </div>
  </div>
</template>

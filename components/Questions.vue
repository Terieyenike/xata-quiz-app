<template>
  <div class="questions-ctr">
    <div class="progress">
      <div class="bar"></div>
      <div class="status">
        1 out of {{ questions.length }} questions answered
      </div>
    </div>
    <div
      class="single-question"
      v-for="question in questions"
      :key="question.xata_id">
      <div class="question">{{ question.question_text }}</div>
      <div class="answers">
        <div
          class="answer"
          v-for="answer in getAnswersForQuestion(question.xata_id)"
          :key="answer.xata_id">
          {{ answer.answer_text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["questions", "answers"],
  methods: {
    getAnswersForQuestion(questionId) {
      return this.answers
        .filter((answer) => answer.xata_id === questionId)
        .slice(0, 4);
    },
  },
};
</script>

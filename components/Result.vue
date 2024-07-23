<script setup>
const props = defineProps({
  results: Array,
  totalCorrect: Number,
  questionsAnswered: Number,
});

const resultIndex = computed(() => {
  let index = 0;
  props.results.findIndex((e, i) => {
    if (props.totalCorrect >= e.min && props.totalCorrect <= e.max) {
      index = i;
    }
  });
  return index;
});

const currentResult = computed(() => props.results[resultIndex.value]);

const titleClass = computed(() => {
  return {
    title: true,
    correct: props.totalCorrect === props.questionsAnswered,
    incorrect: props.totalCorrect !== props.questionsAnswered,
  };
});
</script>

<template>
  <div class="result">
    <div :class="titleClass">{{ currentResult.title }}</div>
    <div class="desc">
      {{ currentResult.desc }}
    </div>
    <div class="score">
      You answered {{ totalCorrect }} out of {{ questionsAnswered }} correctly.
    </div>
  </div>
</template>

<template>
  <div class="result">
    <div class="title">{{ currentResult.title }}</div>
    <div class="desc">
      {{ currentResult.desc }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  results: Array,
  totalCorrect: Number,
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
</script>

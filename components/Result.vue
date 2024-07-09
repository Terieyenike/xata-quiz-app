<template>
  <div class="result">
    <div class="title">You got sample result 1!</div>
    <div class="desc">Enter a short description here about the result.</div>
  </div>
</template>

<script setup>
const props = defineProps({
  results: Array,
  totalCorrect: Number,
});
</script>

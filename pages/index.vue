<script setup lang="ts">
useHead({
  title: "Quiz app with Xata",
});
</script>

<template>
  <main>
    <div class="ctr">
      <Questions />
      <Result />
      <button type="button" class="reset-btn">Reset</button>
    </div>
  </main>
</template>

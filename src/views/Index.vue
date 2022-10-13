<template>
  <main>
    INDEX
  </main>
</template>

<script lang="ts" setup>
import { useTestStore } from '../stores/TestStore';

const counter = useTestStore();
counter.count++;
console.log(counter.count);
</script>

<style scoped>

</style>
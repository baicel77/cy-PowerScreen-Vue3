

<template>
  <RouterView />
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import useScale from '@/hooks/useScale'
  const options = {
    targetX: 1920,
    targetY: 1080,
    targetRatio: 16 / 9
  }
  useScale(options)

</script>

<style scoped></style>
<script setup lang="ts">
import { useData } from 'vitepress'

const { theme } = useData()
</script>

<template>
  <header class="d-header">
    <div class="flex flex-none h-full">1</div>
  </header>
</template>

<style scoped lang="pcss">
.d-header {
  @apply fixed top-0 inset-x-0 z-50 flex items-center;
  height: var(--header-height);
}
</style>


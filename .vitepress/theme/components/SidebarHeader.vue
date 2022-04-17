<script setup lang="ts">
import { useRepo } from '@/composables/repo'
const repo = useRepo()
defineEmits(['close'])

</script>

<template>
  <div class="h-[var(--header-height)] bg-light-700 dark:bg-dark-400 flex lg:hidden items-center justify-between px-2">
    <IconButton @click="$emit('close')">
      <carbon:arrow-left />
    </IconButton>
    <IconButton :href="repo?.link">
      <carbon:logo-github />
    </IconButton>
    <ToggleDark />
  </div>
</template>

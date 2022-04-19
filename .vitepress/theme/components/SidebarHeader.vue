<script setup lang="ts">
import { useRepo } from '@/composables/repo'
const repo = useRepo()
const $emit = defineEmits<{
  (event: 'close'): void
}>()

</script>

<template>
  <div class="h-[var(--header-height)] bg-light-700 dark:bg-dark-400 flex lg:hidden items-center justify-between px-2">
    <IconButton @click="$emit('close')">
      <carbon:arrow-left />
    </IconButton>
    <div class="flex items-center">
      <IconButton :href="repo?.link">
        <carbon:logo-github />
      </IconButton>
      <ToggleDark />
    </div>
  </div>
</template>

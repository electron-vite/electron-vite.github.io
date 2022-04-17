<script setup lang="ts">
import { openSideBar } from '@/composables/sideBar'
</script>

<template>
  <IconButton @click="openSideBar = true">
    <heroicons-outline:menu-alt-2 />
  </IconButton>
</template>

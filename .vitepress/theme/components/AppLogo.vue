<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
const { site, theme, localePath } = useData()
</script>

<template>
  <a class="inline-flex items-center text-xl lg:text-2xl font-bold" :href="localePath">
    <img :src="withBase(theme.logo)" class="inline-flex mr-1 lg:mr-3 h-8 lg:h-10" alt="Logo">
    {{ site.title }}
  </a>
</template>

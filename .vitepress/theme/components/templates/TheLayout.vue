<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import TheHome from './TheHome.vue'
import ThePage from './ThePage.vue'

const { frontmatter } = useData()

const page = computed(() => {
  if (frontmatter.value.home)
    return TheHome
  else
    return ThePage
})

</script>

<template>
  <div class="relative antialiased">
    <keep-alive>
      <component :is="page" />
    </keep-alive>
  </div>
</template>

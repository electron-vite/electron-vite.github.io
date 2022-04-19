<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import TheHome from './TheHome.vue'
import ThePage from './ThePage.vue'
import ThePlay from './ThePlay.vue'

const { frontmatter } = useData()

const page = computed(() => {
  if (frontmatter.value.home)
    return TheHome
  else if (frontmatter.value.playground)
    return ThePlay
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

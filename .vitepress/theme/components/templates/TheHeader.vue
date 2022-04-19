<script setup lang="ts">
import { useData } from 'vitepress'
import { useRepo } from '@/composables/repo'

const { theme } = useData()
const repo = useRepo()
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 bg-[color:var(--electron-vite-bg)] flex items-center border-b border-[color:var(--electron-vite-bc)] h-[var(--header-height)]"
  >
    <div class="flex flex-none h-full container !max-w-screen-2xl mx-auto px-2 md:px-6">
      <div class="flex items-center lg:hidden">
        <ToggleSidebar />
      </div>
      <div class="flex items-center lg:flex-none flex-1">
        <AppLogo />
      </div>
      <div class="flex items-center order-last ml-2 lg:order-none lg:flex-1 lg:ml-4 xl:ml-10">
        <AlgoliaSearchBox :options="theme.algolia" />
      </div>
      <div class="hidden lg:flex items-center flex-1 flex-row-reverse">
        <DropdownMenu />
      </div>
      <div class="flex items-center lg:space-x-3 lg:pl-3 xl:pl-6">
        <IconButton class="hidden lg:inline-flex" :href="repo?.link">
          <carbon:logo-github />
        </IconButton>
        <ToggleDark />
      </div>
    </div>
  </header>
</template>

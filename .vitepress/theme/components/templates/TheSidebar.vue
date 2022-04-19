<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vitepress'
import { openSideBar } from '@/composables/sideBar'

const route = useRoute()

watch(() => route.path, () => openSideBar.value = false)

watch(openSideBar, (v) => {
  v
    ? document.documentElement.classList.add('overflow-hidden')
    : document.documentElement.classList.remove('overflow-hidden')
})
</script>

<template>
  <aside class="sidebar fixed z-50 lg:z-0 lg:static">
    <div class="h-full pointer-events-none">
      <SidebarBackground />
      <div class="
          fixed top-0 left-0
          w-auto h-full pointer-events-auto
          transform -translate-x-full lg:transform-none transition-transform duration-200 ease-linear
          min-w-62
          lg:sticky
          lg:h-[var(--full-header)]
          lg:top-[var(--header-height)]"
          :class="{ '-translate-x-0': openSideBar }">
        <div class="w-auto h-full lg:bg-transparent bg-[color:var(--electron-vite-bg)]">
          <SidebarHeader @close="openSideBar = false" />
          <div class="sticky top-[var(--header-height)] h-[var(--full-header)] overflow-y-auto">
            <TreeMenu />
            <SidebarNav />
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

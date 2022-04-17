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
  <aside class="sidebar fixed z-50 lg:static lg:z-0">
    <div class="h-full pointer-events-none">
      <div
        class="
          lg:sticky
          lg:h-[var(--full-header)]
          lg:mt-[var(--header-height)]
          sidebar-container
          fixed top-0 left-0
          w-auto h-full pointer-events-none
          transform -translate-x-full lg:transform-none transition-transform duration-200 ease-linear
          min-w-62
          "
      >
        <div class="w-auto h-full bg-transparent">
          <div class="sticky overflow-y-auto height-[var(--full-header)] mt-[var(--header-height)] menu-container">
            <SidebarHeader @close="openSideBar = false" />
            <div class="sticky top-[var(--header-height)] h-[var(--full-header)] overflow-y-auto">
              <TreeMenu />
              <SidebarNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

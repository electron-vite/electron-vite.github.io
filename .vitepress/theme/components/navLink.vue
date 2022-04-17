<script setup lang="ts">
import { toRefs } from 'vue'
import type { DefaultTheme } from 'vitepress'
import { useNavLink } from '@/composables/NavLink'
const props = defineProps<{
  item: DefaultTheme.NavItemWithLink
  dropdown?: boolean
}>()
const propsRefs = toRefs(props)
const { props: linkProps } = useNavLink(propsRefs.item, props.dropdown) as any
</script>

<template>
  <a
    class="p-2 inline-flex items-center transition duration-50" :class="{ 'nav-dropdown': dropdown }"
    v-bind="linkProps"
  >
    {{ item.text }}
  </a>
</template>

<style scoped lang="pcss">
.nav-dropdown {
  @apply hover:text-primary hover:bg-[color:var(--vite-electron-hover-bg)] whitespace-nowrap font-normal rounded w-full text-sm;
}
</style>

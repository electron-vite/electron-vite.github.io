<script lang="ts" setup>
import type { PropType } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  outline: {
    type: Boolean,
    default: false,
  },
  size: String as PropType<'sm' | 'lg'>,
})
const styles = computed(() => ([
  `
  inline-flex items-center justify-center
  px-3 py-2
  border border-transparent rounded-md
  bg-primary
  hover:bg-primary-800
  shadow-sm
  text-base text-gray-100 font-medium
  transition duration-150 ease-in-out
  ring-primary focus:ring-3 ring-opacity-50
  `, {
    'text-sm px-2.5 py-2': props.size === 'sm',
    'text-base px-3 py-2.5 md:text-lg md:px-4 md:py-3 border-2': props.size === 'lg',
    'bg-[color:transparent] border border-primary text-primary-500 hover:text-gray-100': props.outline,
  },
]))
</script>

<template>
  <a :href="props.href" :class="styles">
    <div v-if="$slots.icon" class="inline-block mr-1">
      <slot name="icon" />
    </div>
    <slot />
  </a>
</template>

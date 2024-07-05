<template>
  <component :is="tag" class="font-bold" :class="[tags[tag as keyof typeof tags]]">
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
    tag: string
}

defineProps<Props>()

const tags = {
  h1: 'text-4xl lg:text-5xl',
  h2: 'text-3xl lg:text-4xl',
  h3: 'text-2xl lg:text-3xl',
  h4: 'text-xl lg:text-2xl',
  h5: 'text-lg lg:text-xl',
  h6: 'text-base lg:text-lg'
}
</script>

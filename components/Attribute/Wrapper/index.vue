<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-col gap-1">
      <CmsBaseHeading v-if="title" tag="h6">
        {{ title }}
      </CmsBaseHeading>
      <p v-if="description" class="text-sm">
        {{ description }}
      </p>
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
    title?: string;
    description?: string;
}

defineProps<Props>()
</script>

<template>
  <div class="min-w-[330px] resize-x bg-surface rounded shadow p-4 h-max sticky">
    <div v-if="elementStore.element" class="">
      <CmsBaseHeading tag="h6" class="mb-4">
        {{ elementStore.element.name }}
      </CmsBaseHeading>

      <component
        :is="getComponent(el.attribute)"
        v-for="(el, index) in elementStore.activeElementAttributes"
        v-bind="el"
        :key="`${el.attribute}-${index}`"
        :element="elementStore.element"
      />
    </div>
    <div v-else class="">
      <CmsBaseHeading tag="h6" class="text-secondary">
        Select an item to get started
      </CmsBaseHeading>
    </div>
  </div>
</template>

<script setup lang="ts">
const elementStore = useElementStore()

const getComponent = (attribute: string) => {
  return resolveComponent(`Cms${attribute}`)
}
</script>

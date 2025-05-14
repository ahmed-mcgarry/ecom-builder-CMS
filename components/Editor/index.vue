<template>
  <AnimatePresence>
    <motion.div
      v-if="elementStore.isEditing"
      :initial="{ opacity: 0, y: 100 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6, type: spring }"
      :exit="{ opacity: 0, y: 100 }"
      class="max-w-[420px] resize-x bg-surface rounded shadow p-4 h-auto fixed bottom-12 inset-0 top-auto m-auto"
    >
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
    </motion.div>
  </AnimatePresence>
</template>

<script setup lang="ts">
import { motion, AnimatePresence, spring } from 'motion-v'

const elementStore = useElementStore()

const getComponent = (attribute: string) => {
  return resolveComponent(`Cms${attribute}`)
}
</script>

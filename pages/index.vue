<template>
  <Suspense>
    <template #default>
      <div class="container relative flex gap-4 mx-auto overflow-hidden">
        <CmsCanvas />
        <CmsEditor v-if="elementStore.isEditing" />
      </div>
    </template>
    <template #fallback>
      <PageLoader />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
const elementStore = useElementStore()
</script>

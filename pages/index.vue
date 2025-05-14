<template>
  <Suspense>
    <template #default>
      <div class="container relative flex gap-4 mx-auto overflow-hidden">
        <CmsCanvas />
        <CmsEditor />
      </div>
    </template>
    <template #fallback>
      <PageLoader />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
</script>

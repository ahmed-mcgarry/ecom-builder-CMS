<template>
  <div class="" :class="[themeStore.cmsMode]">
    <div class="flex h-full min-h-screen font-secondary text-clear">
      <!-- <CmsSidebar /> -->
      <div class="flex flex-col w-full h-full max-h-screen">
        <CmsNav />

        <div class="w-full h-full p-12 overflow-y-scroll bg-surface-low grow">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const themeStore = useThemeStore()
</script>

<template>
  <input class="px-4 py-2 shadow-inner focus:outline-0 bg-surface-high" :value="modelValue" @input="emits('update:modelValue', $event)">
</template>

<script setup lang="ts">
interface Props {
    modelValue: string
}

defineProps<Props>()
const emits = defineEmits(['update:modelValue'])
</script>

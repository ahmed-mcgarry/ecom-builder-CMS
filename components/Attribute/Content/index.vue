<template>
  <CmsAttributeWrapper :description="description">
    <CmsBaseInput
      type="text"
      class="text-sm border rounded border-slate-200"
      :placeholder="placeholder"
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
    />
  </CmsAttributeWrapper>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AttributeContent'
})

interface Props {
    modelValue: string
    description?: string,
    placeholder?: string,
}

withDefaults(defineProps<Props>(), {
  description: 'Update text content',
  placeholder: 'Enter content here'
})

defineEmits(['update:modelValue'])
</script>

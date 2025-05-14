<template>
  <div v-if="widget">
    <CmsElementWrapper v-if="widget.slots.length" v-bind="widget">
      <component :is="widget.is" v-bind="widget">
        <template
          v-for="child in childWidgets"
          :key="child.id"
        >
          <CmsElementWrapper v-bind="child">
            <PageComponent
              v-if="child"
              :widget="child"
              :page-data="pageData"
            />
          </CmsElementWrapper>
        </template>
      </component>
    </CmsElementWrapper>
    <CmsElementWrapper v-else v-bind="widget">
      <component :is="widget.is" v-bind="widget" />
    </CmsElementWrapper>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Page } from '~/types/page'
import type { Widget } from '~/types/widget'

interface Props {
    widget: Widget;
    pageData: Page;
}

const props = defineProps<Props>()

const childWidgets = computed(() => {
  return props.widget.slots.map(id =>
    props.pageData.attributes.widgets.find(widget => widget.id === id)
  ).filter(Boolean)
})
</script>

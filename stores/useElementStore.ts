import { getWidgetAttributes } from '@/lib/widget'

const useElementStore = defineStore('useElementStore', () => {
  const element = ref()
  const isEditing = ref(false)

  const isIdActive = computed(() => (id: string | null) => element.value?.id === id)

  const setActiveElement = (widget: any) => {
    element.value = widget
  }

  const toggleEditActive = () => {
    isEditing.value = !isEditing.value
  }

  const activeElementAttributes = computed(() => {
    if (!element) return []

    return getWidgetAttributes(element.value.is)
  })

  return {
    element,
    isIdActive,
    isEditing,
    activeElementAttributes,
    toggleEditActive,
    setActiveElement
  }
})

export default useElementStore

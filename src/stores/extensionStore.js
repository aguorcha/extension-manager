import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import extensionsData from '../../data.json'

export const useExtensionStore = defineStore('extensions', () => {
  const extensions = ref([])
  const currentFilter = ref('all')

  const filteredExtensions = computed(() => {
    if (currentFilter.value === 'all') {
      return extensions.value
    } else if (currentFilter.value === 'active') {
      return extensions.value.filter(ext => ext.isActive)
    } else if (currentFilter.value === 'inactive') {
      return extensions.value.filter(ext => !ext.isActive)
    }
    return extensions.value
  })

  function setFilter(filter) {
    currentFilter.value = filter
  }

  function loadExtensions() {
    extensions.value = extensionsData.map((ext, index) => ({
      ...ext,
      id: index + 1
    }))
  }

  function toggleExtension(extensionId) {
    const extension = extensions.value.find(ext => ext.id === extensionId)
    if (extension) {
      extension.isActive = !extension.isActive
      console.log(`Extension ${extension.name} is now: ${extension.isActive ? 'enabled' : 'disabled'}`)
    }
  }

  function removeExtension(extensionId) {
    const extension = extensions.value.find(ext => ext.id === extensionId)
    if (!extension) return

    const extensionName = extension.name
    if (confirm(`¿Estás seguro de que deseas eliminar ${extensionName}?`)) {
      const index = extensions.value.findIndex(ext => ext.id === extensionId)
      if (index !== -1) {
        extensions.value.splice(index, 1)
      }
    }
  }

  return {
    extensions,
    currentFilter,
    filteredExtensions,
    setFilter,
    loadExtensions,
    toggleExtension,
    removeExtension
  }
})
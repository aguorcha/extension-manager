import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)

  function initTheme() {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark
    }

    applyTheme()
  }

  function toggleTheme() {
    isDark.value = !isDark.value
    applyTheme()
  }

  function applyTheme() {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')

    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  if (typeof window !== 'undefined') {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (localStorage.getItem('theme') === null) {
        isDark.value = e.matches
        applyTheme()
      }
    })
  }

  return {
    isDark,
    toggleTheme,
    initTheme
  }
})
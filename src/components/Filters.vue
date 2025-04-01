<template>
  <div
    class="w-[72%] md:w-[90%] lg:w-[80%] mt-8 mb-5 flex flex-col md:flex-row md:items-center md:justify-between"
  >
    <h1
      class="text-3xl lg:text-4xl font-bold flex justify-center md:mt-4 transition-colors duration-300"
      :class="themeStore.isDark ? 'text-neutral-0' : 'text-neutral-900'"
    >
      Extensions List
    </h1>
    <div class="mt-4 flex justify-center md:justify-between gap-x-4">
      <button
        class="px-5 py-2 border-2 rounded-3xl transition-colors duration-200 focus:outline-none"
        :class="[
          store.currentFilter === 'all'
            ? themeStore.isDark
              ? 'bg-red-600 text-neutral-900 hover:bg-red-700 border-none'
              : 'bg-red-600 text-neutral-0 hover:bg-red-700 border-none'
            : themeStore.isDark
            ? 'bg-neutral-700 border-neutral-700 hover:bg-neutral-600 text-neutral-0'
            : 'bg-neutral-0 hover:bg-neutral-100',
          themeStore.isDark
            ? 'focus:shadow-[0_0_0_2px_hsl(227,75%,14%),0_0_0_4px_hsl(3,71%,56%)]'
            : 'focus:shadow-[0_0_0_2px_hsl(0,0%,100%),0_0_0_4px_hsl(3,71%,56%)]',
        ]"
        @click="store.setFilter('all')"
      >
        All
      </button>
      <button
        class="px-5 py-2 border-2 rounded-3xl transition-colors duration-200 focus:outline-none"
        :class="[
          store.currentFilter === 'active'
            ? themeStore.isDark
              ? 'bg-red-500 text-neutral-900 hover:bg-red-700 border-none'
              : 'bg-red-500 text-neutral-0 hover:bg-red-700 border-none'
            : themeStore.isDark
            ? 'bg-neutral-700 border-neutral-700 hover:bg-neutral-600 text-neutral-0'
            : 'bg-neutral-0 hover:bg-neutral-100',
          themeStore.isDark
            ? 'focus:shadow-[0_0_0_2px_hsl(227,75%,14%),0_0_0_4px_hsl(3,71%,56%)]'
            : 'focus:shadow-[0_0_0_2px_hsl(0,0%,100%),0_0_0_4px_hsl(3,71%,56%)]',
        ]"
        @click="store.setFilter('active')"
      >
        Active
      </button>
      <button
        class="px-5 py-2 border-2 rounded-3xl transition-colors duration-200 focus:outline-none"
        :class="[
          store.currentFilter === 'inactive'
            ? themeStore.isDark
              ? 'bg-red-500 text-neutral-900 hover:bg-red-700 border-none'
              : 'bg-red-500 text-neutral-0 hover:bg-red-700 border-none'
            : themeStore.isDark
            ? 'bg-neutral-700 border-neutral-700 hover:bg-neutral-600 text-neutral-0'
            : 'bg-neutral-0 hover:bg-neutral-100',
          themeStore.isDark
            ? 'focus:shadow-[0_0_0_2px_hsl(227,75%,14%),0_0_0_4px_hsl(3,71%,56%)]'
            : 'focus:shadow-[0_0_0_2px_hsl(0,0%,100%),0_0_0_4px_hsl(3,71%,56%)]',
        ]"
        @click="store.setFilter('inactive')"
      >
        Inactive
      </button>
    </div>
  </div>
</template>

<script setup>
import { useExtensionStore } from "../stores/extensionStore";
import { useThemeStore } from "../stores/themeStore";

const store = useExtensionStore();
const themeStore = useThemeStore();
</script>

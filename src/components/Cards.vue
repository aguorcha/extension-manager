<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 2xl:w-[80%] mb-20"
  >
    <div
      v-for="extension in store.filteredExtensions"
      :key="extension.id"
      class="w-80 2xl:w-[400px] p-4 border-2 rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-colors duration-300"
      :class="
        themeStore.isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-neutral-0'
      "
    >
      <div class="flex items-start h-20">
        <img :src="extension.logo" :alt="`${extension.name} Icon`" />
        <div class="ml-3">
          <h3
            class="font-bold text-xl mb-1 transition-colors duration-300"
            :class="themeStore.isDark ? 'text-neutral-0' : 'text-neutral-900'"
          >
            {{ extension.name }}
          </h3>
          <p
            class="text-sm transition-colors duration-300"
            :class="themeStore.isDark ? 'text-neutral-300' : 'text-neutral-600'"
          >
            {{ extension.description }}
          </p>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-between relative p-1">
        <button
          class="px-4 py-2 border-2 rounded-3xl transition-colors duration-300 focus:outline-none"
          :class="
            themeStore.isDark
              ? [
                  'bg-neutral-800 border-neutral-600 text-neutral-0 hover:bg-red-600 hover:text-neutral-0 hover:border-neutral-800',
                  'focus:bg-neutral-500 focus:text-neutral-0 focus:border-neutral-800 focus:shadow-[0_0_0_2px_hsl(226,25%,17%),0_0_0_4px_hsl(3,71%,56%)]',
                ]
              : 'bg-neutral-0 hover:bg-red-500 hover:text-neutral-0 focus:bg-neutral-100 focus:hover:text-neutral-900 focus:shadow-[0_0_0_2px_white,0_0_0_4px_hsl(3,71%,56%)]'
          "
          @click="store.removeExtension(extension.id)"
        >
          Remove
        </button>

        <label class="inline-flex items-center cursor-pointer">
          <div class="relative">
            <input
              type="checkbox"
              class="sr-only peer"
              :checked="extension.isActive"
              @change="store.toggleExtension(extension.id)"
            />
            <div
              class="w-11 h-6 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600 transition-colors duration-300"
              :class="[
                themeStore.isDark ? 'bg-neutral-500' : 'bg-neutral-200',
                themeStore.isDark
                  ? 'peer-focus:shadow-[0_0_0_2px_hsl(226,25%,17%),0_0_0_4px_hsl(3,71%,56%)]'
                  : 'peer-focus:shadow-[0_0_0_2px_hsl(200,60%,99%),0_0_0_4px_hsl(3,71%,56%)]',
              ]"
            ></div>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useExtensionStore } from "../stores/extensionStore";
import { useThemeStore } from "../stores/themeStore";

// Usar los stores
const store = useExtensionStore();
const themeStore = useThemeStore();

// Cargar los datos al montar el componente
onMounted(() => {
  store.loadExtensions();
});
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 2xl:w-[80%] mb-20"
  >
    <div
      v-for="extension in store.filteredExtensions"
      :key="extension.id"
      class="w-80 2xl:w-[400px] p-4 bg-neutral-0 border-2 rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
    >
      <div class="flex items-start h-20">
        <img :src="extension.logo" :alt="`${extension.name} Icon`" />
        <div class="ml-3">
          <h3 class="font-bold text-neutral-900 text-xl mb-1">
            {{ extension.name }}
          </h3>
          <p class="text-neutral-600 text-sm">
            {{ extension.description }}
          </p>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-between relative p-1">
        <button
          class="bg-neutral-0 px-4 py-2 border-2 rounded-3xl hover:bg-red-500 hover:text-neutral-0 focus:bg-neutral-100 focus:hover:text-neutral-900 focus:border-white focus:outline-none focus:shadow-[0_0_0_2px_white,0_0_0_4px_hsl(3,71%,56%)]"
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
              class="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:shadow-[0_0_0_2px_white,0_0_0_4px_hsl(3,71%,56%)] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"
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

const store = useExtensionStore();

onMounted(() => {
  store.loadExtensions();
});
</script>

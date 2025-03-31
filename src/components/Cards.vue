<template>
  <div
    class="mt-8 w-80 p-4 bg-neutral-0 border-2 rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
  >
    <div class="flex items-start">
      <img src="../assets/images/logo-devlens.svg" alt="DevLens Icon" />
      <div class="ml-3">
        <h3 class="font-bold text-neutral-900 text-xl mb-1">DevLens</h3>
        <p class="text-neutral-600 text-sm">
          Quickly inspect page layouts and visualize element boundaries.
        </p>
      </div>
    </div>
    <div class="mt-6 flex items-center justify-between relative p-1">
      <!-- Añadido p-1 para dar espacio al shadow sin afectar el layout -->
      <button
        class="bg-neutral-0 px-4 py-2 border-2 rounded-3xl hover:bg-red-500 hover:text-neutral-0 focus:bg-neutral-100 focus:hover:text-neutral-900 focus:border-white focus:outline-none focus:shadow-[0_0_0_2px_white,0_0_0_4px_hsl(3,71%,56%)]"
      >
        Remove
      </button>

      <label class="inline-flex items-center cursor-pointer">
        <div class="relative">
          <input
            type="checkbox"
            class="sr-only peer"
            v-model="isEnabled"
            @change="toggleExtension"
          />
          <div
            class="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:shadow-[0_0_0_2px_white,0_0_0_4px_hsl(3,71%,56%)] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"
          ></div>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const isEnabled = ref(true);

function toggleExtension() {
  console.log("Extension is now:", isEnabled.value ? "enabled" : "disabled");
}

watch(isEnabled, (newValue) => {
  console.log("Extension state changed to:", newValue ? "enabled" : "disabled");
});
</script>

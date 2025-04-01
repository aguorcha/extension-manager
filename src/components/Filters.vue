<template>
  <div
    class="w-[72%] md:w-[90%] lg:w-[80%] mt-8 mb-5 flex flex-col md:flex-row md:items-center md:justify-between"
  >
    <h1
      class="text-3xl lg:text-4xl font-bold text-neutral-900 flex justify-center md:mt-4"
    >
      Extensions List
    </h1>
    <div class="mt-4 flex justify-center md:justify-between gap-x-2">
      <button
        class="px-5 py-2 border-2 rounded-3xl transition-colors duration-200"
        :class="
          store.currentFilter === 'all'
            ? 'bg-red-500 text-neutral-0 hover:bg-red-600'
            : 'bg-neutral-0 hover:bg-neutral-100 hover:text-neutral-600'
        "
        @click="store.setFilter('all')"
      >
        All
      </button>
      <button
        class="px-5 py-2 border-2 rounded-3xl transition-colors duration-200"
        :class="
          store.currentFilter === 'active'
            ? 'bg-red-500 text-neutral-0 hover:bg-red-600'
            : 'bg-neutral-0 hover:bg-neutral-100 hover:text-neutral-600'
        "
        @click="store.setFilter('active')"
      >
        Active
      </button>
      <button
        class="px-5 py-2 border-2 rounded-3xl transition-colors duration-200"
        :class="
          store.currentFilter === 'inactive'
            ? 'bg-red-500 text-neutral-0 hover:bg-red-600'
            : 'bg-neutral-0 hover:bg-neutral-100 hover:text-neutral-600'
        "
        @click="store.setFilter('inactive')"
      >
        Inactive
      </button>
    </div>
  </div>
</template>

<script setup>
import { useExtensionStore } from "../stores/extensionStore";

const store = useExtensionStore();
</script>

<script setup>
import { onMounted } from "vue";
import Header from "./components/Header.vue";
import Filters from "./components/Filters.vue";
import Cards from "./components/Cards.vue";
import { useThemeStore } from "./stores/themeStore";

const themeStore = useThemeStore();

onMounted(() => {
  themeStore.initTheme();
});
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center transition-colors duration-300"
    :class="themeStore.isDark ? 'bg-gradient-dark' : 'bg-gradient-light'"
  >
    <Header />
    <Filters />
    <Cards />
  </div>
</template>

<style></style>

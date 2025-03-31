<script setup>
import Header from "./components/Header.vue";
import Filters from "./components/Filters.vue";
import Cards from "./components/Cards.vue";
</script>

<template>
  <div class="h-screen bg-gradient-light flex flex-col items-center">
    <Header />
    <Filters />
    <Cards />
  </div>
</template>

<style scoped></style>

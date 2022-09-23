<script setup>
import { RouterView } from "vue-router";
import MainMenu from "@/components/MainMenu.vue";
</script>

<template>
  <main-menu></main-menu>
  <RouterView />
</template>

<style>
body {
  margin: 0;
}
</style>

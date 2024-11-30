<script setup>
import { RouterView } from "vue-router";
import Navbar from '../components/navbar.vue'

</script>
<template>
  <div>
    <Navbar />
    <main>
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </main>

  </div>
</template>

<style scoped>
 .fade-enter-active, .fade-leave-active {
 transition: opacity 0.5s ease, transform 0.5s ease;
 }
 
 .fade-enter-from, .fade-leave-to {
 opacity: 0;
 transform: translateX(-100%);
 }
 
 .fade-enter-to, .fade-leave-from {
 opacity: 1;
 transform: translateX(0);
 }
 
</style>

<script setup lang="ts">
import { onMounted } from 'vue'
import ModalViews from '@/components/ModalViews.vue'

onMounted(() => {
  window.onscroll = function () {
    const navbar = document.querySelector('#navbar') as HTMLElement
    if (!navbar) return

    if (window.scrollY < 50) {
      navbar.style.top = '0'
    } else {
      navbar.style.top = '-120px'
    }
  }
})
</script>

<template>
  <RouterView :key="$route.fullPath" />
  <ModalViews />
</template>

<style>
@import 'src/assets/styles/normalize.css';

.yellow-btn:hover {
  color: #e6af2e !important;
  transition: color 0.3s;
}
</style>

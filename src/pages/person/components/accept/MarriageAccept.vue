<script setup lang="ts">
import AcceptProfile from '@/pages/person/components/accept/AcceptProfile.vue'

const persons = ['Жених', 'Невеста', 'Отец невесты', 'Свидетель', 'Свидетель 2']
</script>

<template>
  <AcceptProfile v-for="(name, index) in persons" :key="index" :index="index" :role="name" />
  <div class="btn-submit-container">
    <button id="btn-submit-birth" class="btn-submit">Отправить</button>
  </div>
</template>

<style scoped>
@import '@/assets/styles/data_clerk_accept.css';
</style>

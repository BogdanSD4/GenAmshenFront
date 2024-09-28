<script setup lang="ts">
import AcceptProfile from '@/pages/person/components/accept/AcceptProfile.vue'
import { PersonType } from '@/pages/database/types/historicalTypes'

const emit = defineEmits(['onSave', 'changePanel'])
const persons = ['Умерший']

function changePanel() {
  emit('changePanel', 3)
}
function onSave() {
  emit('onSave', PersonType.DEATH, 4)
}
</script>

<template>
  <AcceptProfile
    v-for="(name, index) in persons"
    :key="index"
    :index="index"
    :role="name"
    @change-panel="changePanel"
  />
  <div class="btn-submit-container">
    <button id="btn-submit-birth" class="btn-submit" @click="onSave()">Отправить</button>
  </div>
</template>

<style scoped>
@import '@/assets/styles/data_clerk_accept.css';
</style>

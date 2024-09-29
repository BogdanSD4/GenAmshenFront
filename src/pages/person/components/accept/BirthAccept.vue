<script setup lang="ts">
import AcceptProfile from '@/pages/person/components/accept/AcceptProfile.vue'
import {
  type ClerkPersonInfo,
  type HistoricalDeath,
  PersonType
} from '@/pages/database/types/historicalTypes'
import { type ModelRef, onMounted } from 'vue'

const emit = defineEmits(['onSave', 'changePanel'])
const personData = defineModel<ClerkPersonInfo>('personData') as ModelRef<any>

const persons = ['Рожденный', 'Отец', 'Мать', 'Крестный']

function changePanel(): void {
  emit('changePanel')
}
function onSave() {
  emit('onSave', PersonType.BIRTH, 2)
}
onMounted(() => {
  console.log(personData)
})
</script>

<template>
  <AcceptProfile
    is-main
    role="Рожденный"
    :first-name="personData.first_name"
    :last-name="personData.last_name"
    @change-panel="changePanel"
  />
  <AcceptProfile
    role="Отец"
    :first-name="personData.first_name"
    :last-name="personData.last_name"
    @change-panel="changePanel"
  />
  <AcceptProfile
    role="Мать"
    :first-name="personData.first_name"
    :last-name="personData.last_name"
    @change-panel="changePanel"
  />
  <AcceptProfile
    role="Крестный"
    :first-name="personData.first_name"
    :last-name="personData.last_name"
    @change-panel="changePanel"
  />
  <AcceptProfile v-for="(name, index) in persons" :key="index" :index="index" :role="name" />
  <div class="btn-submit-container">
    <button id="btn-submit-birth" class="btn-submit">Отправить</button>
  </div>
</template>

<style scoped>
@import '@/assets/styles/data_clerk_accept.css';
</style>

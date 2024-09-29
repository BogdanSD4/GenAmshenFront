<script setup lang="ts">
import AcceptProfile from '@/pages/person/components/accept/AcceptProfile.vue'
import {
  type ClerkPersonInfo,
  type HistoricalDeath,
  PersonType
} from '@/pages/database/types/historicalTypes'
import type { ModelRef } from 'vue'

const emit = defineEmits(['onSave', 'changePanel'])
const personData = defineModel<ClerkPersonInfo>('personData') as ModelRef<HistoricalDeath>

function changePanel(): void {
  emit('changePanel')
}
function onSave() {
  emit('onSave', PersonType.DEATH, 2)
}
</script>

<template>
  <AcceptProfile
    is-main
    role="Умерший"
    :first-name="personData.first_name"
    :last-name="personData.last_name"
    @change-panel="changePanel"
  />
  <div class="btn-submit-container">
    <button id="btn-submit-birth" class="btn-submit" @click="onSave()">Отправить</button>
  </div>
</template>

<style scoped>
@import '@/assets/styles/data_clerk_accept.css';
</style>

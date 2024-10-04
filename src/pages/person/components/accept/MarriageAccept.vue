<script setup lang="ts">
import AcceptProfile from '@/pages/person/components/accept/AcceptProfile.vue'
import {
  type ClerkPersonInfo,
  type HistoricalMarriage,
  PersonType
} from '@/pages/database/types/historicalTypes'
import type { ModelRef } from 'vue'

const emit = defineEmits(['onSave', 'changePanel'])
const personData = defineModel<ClerkPersonInfo>('personData') as ModelRef<HistoricalMarriage>

function changePanel(): void {
  emit('changePanel')
}
function onSave() {
  emit('onSave', PersonType.WEDDING, 2)
}
</script>

<template>
  <AcceptProfile
    is-main
    role="Жених"
    :first-name="personData.first_name"
    :last-name="personData.last_name"
    @change-panel="changePanel"
  />
  <AcceptProfile
    v-if="personData.bride_first_name != '' || personData.bride_last_name != ''"
    role="Невеста"
    :first-name="personData.bride_first_name"
    :last-name="personData.bride_last_name"
    @change-panel="changePanel"
  />
  <AcceptProfile
    v-if="personData.bride_father_first_name != '' || personData.bride_father_last_name != ''"
    role="Отец невесты"
    :first-name="personData.bride_father_first_name"
    :last-name="personData.bride_father_last_name"
    @change-panel="changePanel"
  />
  <AcceptProfile
    v-if="personData.witness_1_first_name != '' || personData.witness_1_last_name != ''"
    role="Свидетель"
    :first-name="personData.witness_1_first_name"
    :last-name="personData.witness_1_last_name"
    @change-panel="changePanel"
  />
  <AcceptProfile
    v-if="personData.witness_2_first_name != '' || personData.witness_2_last_name != ''"
    role="Свидетель 2"
    :first-name="personData.witness_2_first_name"
    :last-name="personData.witness_2_last_name"
    @change-panel="changePanel"
  />
  <div class="btn-submit-container">
    <button id="btn-submit-birth" class="btn-submit" @click="onSave()">Отправить</button>
  </div>
</template>

<style scoped>
@import '@/assets/styles/data_clerk_accept.css';
</style>

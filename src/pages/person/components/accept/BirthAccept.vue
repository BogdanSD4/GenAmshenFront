<script setup lang="ts">
import AcceptProfile from '@/pages/person/components/accept/AcceptProfile.vue'
import { type ClerkPersonInfo, PersonType } from '@/pages/database/types/historicalTypes'
import { type ModelRef, onMounted } from 'vue'

const emit = defineEmits(['onSave', 'changePanel'])
const personData = defineModel<ClerkPersonInfo>('personData') as ModelRef<any>

function changePanel(): void {
  emit('changePanel')
}
function onSave() {
  if (personData.value.father.first_name == '' && personData.value.father.last_name == '')
    personData.value.father = null
  if (personData.value.mother.first_name == '' && personData.value.mother.last_name == '')
    personData.value.mother = null
  if (personData.value.godfather.first_name == '' && personData.value.godfather.last_name == '')
    personData.value.godfather = null

  emit('onSave', PersonType.BIRTH, 2)
}
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
    v-if="personData.father.first_name != '' || personData.father.last_name != ''"
    role="Отец"
    :first-name="personData.father.first_name"
    :last-name="personData.father.last_name"
    @change-panel="changePanel"
  />
  <AcceptProfile
    v-if="personData.mother.first_name != '' || personData.mother.last_name != ''"
    role="Мать"
    :first-name="personData.mother.first_name"
    :last-name="personData.mother.last_name"
    @change-panel="changePanel"
  />
  <AcceptProfile
    v-if="personData.godfather.first_name != '' || personData.godfather.last_name != ''"
    role="Крестный"
    :first-name="personData.godfather.first_name"
    :last-name="personData.godfather.last_name"
    @change-panel="changePanel"
  />
  <div class="btn-submit-container">
    <button id="btn-submit-birth" class="btn-submit" @click="onSave">Отправить</button>
  </div>
</template>

<style scoped>
@import '@/assets/styles/data_clerk_accept.css';
</style>

<script setup lang="ts">
import { userStore } from '@/stores/userRole'
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue'
import { createPerson, getPersonData, updatePerson } from '@/api/person'
import PersonalBirthDisplay from '@/pages/person/components/data/PersonalBirthDisplay.vue'
import PersonalMarriageDisplay from '@/pages/person/components/data/PersonalMarriageDisplay.vue'
import PersonalDeathDisplay from '@/pages/person/components/data/PersonalDeathDisplay.vue'
import { acceptStore } from '@/stores/acceptPerson'
import {
  type ClerkPersonInfo,
  type HistoricalDeath,
  type PersonInfo,
  PersonType
} from '@/pages/database/types/historicalTypes'
import DeathAccept from '@/pages/person/components/accept/DeathAccept.vue'
import MarriageAccept from '@/pages/person/components/accept/MarriageAccept.vue'
import BirthAccept from '@/pages/person/components/accept/BirthAccept.vue'
import { modalStore, ModalTypes } from '@/stores/modalViews'

const emit = defineEmits(['changePanel'])
const displayIndex = ref<number>(-1)
const personData = ref<ClerkPersonInfo>()
const isEdit = ref<boolean>(false)

function changePanel(index: number) {
  emit('changePanel', index)
}

function catchErrors(error: any) {
  const data = error.response.data
  const modal = modalStore()

  if ('non_field_errors' in data) {
    modal.activate(ModalTypes.ELEVEN)
  } else if ('error' in data) {
    if ('You already have unapproved data' in data.error) {
      modal.activate(ModalTypes.THIRTEEN)
    }
  }
}

async function onSave(type: PersonType, panel: number, data?: any) {
  console.log('save a')
  if (!data) data = personData.value

  if (personData.value) {
    await updatePerson(type, data).catch((error) => catchErrors(error))
  } else {
    await createPerson(type, data).catch((error) => catchErrors(error))
  }
  changePanel(panel)
}

onMounted(async () => {
  await getPersonData()
    .then((response) => {
      personData.value = response as ClerkPersonInfo
      displayIndex.value = personData.value?.capture
    })
    .catch(() => {
      displayIndex.value = 4
    })
})
</script>

<template>
  <div v-if="isEdit">
    <PersonalBirthDisplay v-if="displayIndex == 1" />
    <PersonalMarriageDisplay
      v-if="displayIndex == 2"
      :person-data="personData"
      @change-panel="changePanel"
    />
    <PersonalDeathDisplay v-if="displayIndex == 3" :person-data="personData" @on-save="onSave" />
  </div>
  <div v-else>
    <BirthAccept v-if="displayIndex == 1" />
    <MarriageAccept v-if="displayIndex == 2" />
    <DeathAccept v-if="displayIndex == 3" />
  </div>

  <p v-if="displayIndex == 4" class="no-profiles">Немає профілів на підтвердження</p>
</template>

<style scoped>
@import '@/assets/styles/user.css';

.no-profiles {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>

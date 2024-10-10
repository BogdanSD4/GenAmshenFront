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
function changeMenu(index: number) {
  displayIndex.value = index
}
function changeMode() {
  isEdit.value = !isEdit.value
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
  if (!data) data = personData.value

  if ('father' in data) delete data['father']
  if ('mother' in data) delete data['mother']
  if ('godfather' in data) delete data['godfather']

  await updatePerson(type, data)
    .then(() => {
      changePanel(2)
    })
    .catch((error) => catchErrors(error))
}

onMounted(async () => {
  await getPersonData()
    .then((response) => {
      personData.value = response as any
      //displayIndex.value = 2
      if (personData.value && 'capture' in personData.value)
        displayIndex.value = personData.value.capture
    })
    .catch(() => {
      displayIndex.value = 4
    })
})
</script>

<template>
  <div v-if="isEdit">
    <PersonalBirthDisplay
      v-if="displayIndex == 1"
      :index="1"
      :current-index="displayIndex"
      :person-data="personData"
      @change-panel="changeMenu"
      @on-save="onSave"
    />
    <PersonalMarriageDisplay
      v-if="displayIndex == 2"
      :index="2"
      :current-index="displayIndex"
      :person-data="personData"
      @change-panel="changeMenu"
      @on-save="onSave"
    />
    <PersonalDeathDisplay
      v-if="displayIndex == 3"
      :index="3"
      :current-index="displayIndex"
      :person-data="personData"
      @on-save="onSave"
      @change-panel="changeMenu"
    />
  </div>
  <div v-else>
    <BirthAccept
      v-if="displayIndex == 1"
      :person-data="personData"
      @on-save="onSave"
      @change-panel="changeMode"
    />
    <MarriageAccept
      v-if="displayIndex == 2"
      :person-data="personData"
      @on-save="onSave"
      @change-panel="changeMode"
    />
    <DeathAccept
      v-if="displayIndex == 3"
      :person-data="personData"
      @on-save="onSave"
      @change-panel="changeMode"
    />
  </div>

  <p v-if="displayIndex == 4" class="no-profiles">Нет профилей на подтверждение</p>
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

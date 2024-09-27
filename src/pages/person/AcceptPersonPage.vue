<script setup lang="ts">
import { userStore } from '@/stores/userRole'
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue'
import { getPersonData } from '@/api/person'
import PersonalBirthDisplay from '@/pages/person/components/data/PersonalBirthDisplay.vue'
import PersonalMarriageDisplay from '@/pages/person/components/data/PersonalMarriageDisplay.vue'
import PersonalDeathDisplay from '@/pages/person/components/data/PersonalDeathDisplay.vue'
import { acceptStore } from '@/stores/acceptPerson'
import type {
  ClerkPersonInfo,
  HistoricalDeath,
  PersonInfo
} from '@/pages/database/types/historicalTypes'

const emit = defineEmits(['changePanel'])
const displayIndex = ref<number>(-1)
const personData = ref<ClerkPersonInfo>()

function changePanel(index: number) {
  emit('changePanel', index)
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
  <PersonalBirthDisplay v-if="displayIndex == 1" />
  <PersonalMarriageDisplay v-if="displayIndex == 2" />
  <PersonalDeathDisplay
    v-if="displayIndex == 3"
    :person-data="personData"
    @change-panel="changePanel"
  />
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

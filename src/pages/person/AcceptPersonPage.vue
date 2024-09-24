<script setup lang="ts">
import { userStote } from '@/stores/userRole'
import { onMounted, ref } from 'vue'
import { getPersonData } from '@/api/person'
import PersonalBirthDisplay from '@/pages/person/components/data/PersonalBirthDisplay.vue'
import PersonalMarriageDisplay from '@/pages/person/components/data/PersonalMarriageDisplay.vue'
import PersonalDeathDisplay from '@/pages/person/components/data/PersonalDeathDisplay.vue'

const displayIndex = ref<number>(-1)

onMounted(async () => {
  const data = await getPersonData()
  displayIndex.value = data.capture
})
</script>

<template>
  <PersonalBirthDisplay v-if="displayIndex == 1" />
  <PersonalMarriageDisplay v-if="displayIndex == 2" />
  <PersonalDeathDisplay v-if="displayIndex == 3" />
</template>

<style scoped></style>

<script setup lang="ts">
import { userStote } from '@/stores/userRole'
import { onMounted, ref } from 'vue'
import { getPersonData } from '@/api/person'
import PersonalBirthDisplay from '@/pages/person/components/data/PersonalBirthDisplay.vue'

const displayIndex = ref<number>(-1)

onMounted(async () => {
  await getPersonData()
})
</script>

<template>
  <PersonalBirthDisplay v-if="" />
</template>

<style scoped></style>

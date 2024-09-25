<script setup lang="ts">
import HistoricalPersonContent from '@/pages/database/components/HistoricalPersonContent.vue'
import { HistoricalBlock } from '@/pages/database/models/historicalModels'
import {
  HPersonBirthContent,
  HPersonDeathContent,
  HPersonMarriageContent
} from '@/pages/database/context/personContent'
import { onMounted, ref } from 'vue'
import { acceptStore } from '@/stores/acceptPerson'
import { getPersonData, updatePersonByModer } from '@/api/person'
import { PersonType } from '@/pages/database/types/historicalTypes'
import axios from 'axios'
import api from '@/api/axios/api'

const birthBlock = ref<HistoricalBlock>()
const marriageBlock = ref<HistoricalBlock>()
const deathBlock = ref<HistoricalBlock>()

const bookBirthBlock = ref<HistoricalBlock>()
const bookMarriageBlock = ref<HistoricalBlock>()
const bookDeathBlock = ref<HistoricalBlock>()

const displayIndex = ref<number>(-1)

onMounted(async () => {
  const accept = acceptStore()

  const data = await getPersonData({ id: accept.approve.id, capture: accept.approve.capture })
  displayIndex.value = accept.approve.capture
  accept.data = data

  if (displayIndex.value == 1) birthBlock.value = new HistoricalBlock(HPersonBirthContent)
  else if (displayIndex.value == 2)
    marriageBlock.value = new HistoricalBlock(HPersonMarriageContent)
  else if (displayIndex.value == 3) deathBlock.value = new HistoricalBlock(HPersonDeathContent)

  // bookBirthBlock.value = new HistoricalBlock(HBookContent)
  // bookMarriageBlock.value = new HistoricalBlock(HBookContent)
  // bookDeathBlock.value = new HistoricalBlock(HBookContent)
})
</script>

<template>
  <HistoricalPersonContent
    v-if="displayIndex == 1"
    :type="PersonType.BIRTH"
    label="Рождения"
    :historical-block="birthBlock as HistoricalBlock"
  />
  <HistoricalPersonContent
    v-if="displayIndex == 2"
    :type="PersonType.WEDDING"
    label="Браки"
    :historical-block="marriageBlock as HistoricalBlock"
  />
  <HistoricalPersonContent
    v-if="displayIndex == 3"
    :type="PersonType.DEATH"
    label="Смерти"
    :historical-block="deathBlock as HistoricalBlock"
  />

  <!--Books birth data-->
  <!--  <HistoricalPersonContent-->
  <!--    v-if="displayIndex == 4"-->
  <!--    label="Книга - рождение"-->
  <!--    :historical-block="bookBirthBlock as HistoricalBlock"-->
  <!--  />-->

  <!--  &lt;!&ndash;Books wedding data&ndash;&gt;-->
  <!--  <HistoricalPersonContent-->
  <!--    v-if="displayIndex == 5"-->
  <!--    label="Книга - браки"-->
  <!--    :historical-block="bookMarriageBlock as HistoricalBlock"-->
  <!--  />-->

  <!--  &lt;!&ndash;Books death data&ndash;&gt;-->
  <!--  <HistoricalPersonContent-->
  <!--    v-if="displayIndex == 6"-->
  <!--    label="Книга - смерти"-->
  <!--    :historical-block="bookDeathBlock as HistoricalBlock"-->
  <!--  />-->
</template>

<style scoped></style>

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
import {
  type HistoricalDeathTls,
  type HistoricalPersonTls,
  type ModerPersonInfo,
  PersonType
} from '@/pages/database/types/historicalTypes'

const birthBlock = ref<HistoricalBlock<HistoricalPersonTls>>()
const marriageBlock = ref<HistoricalBlock<ModerPersonInfo>>()
const deathBlock = ref<HistoricalBlock<HistoricalDeathTls>>()

//const bookBirthBlock = ref<HistoricalBlock>()
//const bookMarriageBlock = ref<HistoricalBlock>()
//const bookDeathBlock = ref<HistoricalBlock>()

const displayIndex = ref<number>(-1)

onMounted(async () => {
  const accept = acceptStore()

  const data = (await getPersonData({
    id: accept.approve.id
  })) as ModerPersonInfo

  displayIndex.value = data.capture[0]
  accept.approve.capture = displayIndex.value
  accept.data = data as ModerPersonInfo

  if (displayIndex.value == 1)
    birthBlock.value = new HistoricalBlock<HistoricalPersonTls>(HPersonBirthContent)
  else if (displayIndex.value == 2)
    marriageBlock.value = new HistoricalBlock(HPersonMarriageContent)
  else if (displayIndex.value == 3)
    deathBlock.value = new HistoricalBlock<HistoricalDeathTls>(HPersonDeathContent)

  // bookBirthBlock.value = new HistoricalBlock(HBookContent)
  // bookMarriageBlock.value = new HistoricalBlock(HBookContent)
  // bookDeathBlock.value = new HistoricalBlock(HBookContent)
})
</script>

<template>
  <HistoricalPersonContent
    v-if="birthBlock && displayIndex == 1"
    :type="PersonType.BIRTH"
    label="Рождения"
    :historical-block="birthBlock as HistoricalBlock<HistoricalPersonTls>"
  />
  <HistoricalPersonContent
    v-if="marriageBlock && displayIndex == 2"
    :type="PersonType.WEDDING"
    label="Браки"
    :historical-block="marriageBlock as HistoricalBlock<ModerPersonInfo>"
  />
  <HistoricalPersonContent
    v-if="deathBlock && displayIndex == 3"
    :type="PersonType.DEATH"
    label="Смерти"
    :historical-block="deathBlock as HistoricalBlock<HistoricalDeathTls>"
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

<style scoped>
@import '@/assets/styles/user.css';
</style>

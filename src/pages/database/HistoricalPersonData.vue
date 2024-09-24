<script setup lang="ts">
import HistoricalPersonContent from '@/pages/database/components/HistoricalPersonContent.vue'
import { HistoricalBlock } from '@/pages/database/models/historicalModels'
import {
  HPersonBirthContent,
  HPersonDeathContent,
  HPersonMarriageContent
} from '@/pages/database/context/personContent'
import { ref } from 'vue'
import { HBookContent } from '@/pages/database/context/bookContent'

const birthBlock = ref<HistoricalBlock>(new HistoricalBlock(HPersonBirthContent))
const marriageBlock = ref<HistoricalBlock>(new HistoricalBlock(HPersonMarriageContent))
const deathBlock = ref<HistoricalBlock>(new HistoricalBlock(HPersonDeathContent))

const bookBirthBlock = ref<HistoricalBlock>(new HistoricalBlock(HBookContent))
const bookMarriageBlock = ref<HistoricalBlock>(new HistoricalBlock(HBookContent))
const bookDeathBlock = ref<HistoricalBlock>(new HistoricalBlock(HBookContent))
</script>

<template>
  <!--Birth data-->
  <HistoricalPersonContent label="Рождения" :historical-block="birthBlock as HistoricalBlock" />

  <!--Wedding data-->
  <HistoricalPersonContent label="Браки" :historical-block="marriageBlock as HistoricalBlock" />

  <!--Death data-->
  <HistoricalPersonContent label="Смерти" :historical-block="deathBlock as HistoricalBlock" />

  <!--Books birth data-->
  <HistoricalPersonContent
    label="Книга - рождение"
    :historical-block="bookBirthBlock as HistoricalBlock"
  />

  <!--Books wedding data-->
  <HistoricalPersonContent
    label="Книга - браки"
    :historical-block="bookMarriageBlock as HistoricalBlock"
  />

  <!--Books death data-->
  <HistoricalPersonContent
    label="Книга - смерти"
    :historical-block="bookDeathBlock as HistoricalBlock"
  />
</template>

<style scoped></style>

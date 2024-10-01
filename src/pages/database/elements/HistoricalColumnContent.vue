<script setup lang="ts">
import type { HistiricalColumn } from '@/pages/database/models/historicalModels'
import HistoricalFormContent from '@/pages/database/elements/HistoricalFormContent.vue'
import type { ModerPersonInfo } from '@/pages/database/types/historicalTypes'

const column = defineModel<HistiricalColumn<ModerPersonInfo>>('historicalColumn', {
  required: true
})
</script>

<template>
  <div :class="column.mainClass">
    <HistoricalFormContent
      v-for="(item, index) in column.items"
      :key="index"
      :historical-form="item"
    />
  </div>
</template>

<style scoped>
@import '@/assets/styles/historical_person.css';
</style>

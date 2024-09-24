<script setup lang="ts">
import type { HistiricalColumn } from '@/pages/database/models/historicalModels'
import HistoricalFormContent from '@/pages/database/elements/HistoricalFormContent.vue'

const column = defineModel<HistiricalColumn>('historicalColumn', { required: true })
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

<style scoped></style>

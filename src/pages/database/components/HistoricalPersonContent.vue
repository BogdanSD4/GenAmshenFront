<script setup lang="ts">
import HstoricalBaseContent from '@/pages/database/components/HstoricalBaseContent.vue'
import type { HistoricalBlock } from '@/pages/database/models/historicalModels'
import HistoricalColumnContent from '@/pages/database/elements/HistoricalColumnContent.vue'
import HistoricalColumnEdit from '@/pages/database/elements/HistoricalColumnEdit.vue'

defineProps({
  label: {
    type: String,
    required: true
  }
})

const block = defineModel<HistoricalBlock>('historicalBlock', { required: true })
</script>

<template>
  <HstoricalBaseContent :label="label">
    <div class="columns-grid">
      <HistoricalColumnContent :historical-column="block.title" />
      <HistoricalColumnContent :historical-column="block.arContent" />
      <HistoricalColumnContent :historical-column="block.ruContent" />
      <HistoricalColumnContent :historical-column="block.enContent" />
      <HistoricalColumnEdit :edit-column="block.editContent" />
    </div>
  </HstoricalBaseContent>
</template>

<style scoped></style>

<script setup lang="ts">
import HstoricalBaseContent from '@/pages/database/components/HstoricalBaseContent.vue'
import type { HistoricalBlock } from '@/pages/database/models/historicalModels'
import HistoricalColumnContent from '@/pages/database/elements/HistoricalColumnContent.vue'
import HistoricalColumnEdit from '@/pages/database/elements/HistoricalColumnEdit.vue'
import { updatePersonByModer } from '@/api/person'
import type { ModerPersonInfo, PersonType } from '@/pages/database/types/historicalTypes'
import { acceptStore } from '@/stores/acceptPerson'

defineProps({
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})

const block = defineModel<HistoricalBlock<ModerPersonInfo>>('historicalBlock', { required: true })

async function approve() {
  const accept = acceptStore()
  const data = block.value.getData()

  delete data['father']
  delete data['mother']
  delete data['godfather']

  await updatePersonByModer(accept.approve, data)
}
</script>

<template>
  <HstoricalBaseContent :label="label" :type="type">
    <div class="columns-grid">
      <HistoricalColumnContent :historical-column="block.title" />
      <HistoricalColumnContent :historical-column="block.arContent" />
      <HistoricalColumnContent :historical-column="block.ruContent" />
      <HistoricalColumnContent :historical-column="block.enContent" />
      <HistoricalColumnEdit :edit-column="block.editContent" />
    </div>
    <div class="btn-verified">
      <button @click="approve()" id="btn-birth-verified">Проверено</button>
    </div>
  </HstoricalBaseContent>
</template>

<style scoped>
@import '@/assets/styles/historical_person.css';
</style>

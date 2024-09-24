<script setup lang="ts">
import HistoricalFormEdit from '@/pages/database/elements/HistoricalFormEdit.vue'
import { HistoricalEditColumn } from '@/pages/database/models/historicalModels'

const column = defineModel<HistoricalEditColumn>('editColumn', { required: true })
</script>

<template>
  <div class="column-edit-save">
    <div v-for="(form, index) in column.items" :key="index" class="historical-edit-form">
      <HistoricalFormEdit :edit-form="form" />
    </div>
  </div>
</template>

<style scoped>
.historical-edit-form {
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding-top: 48.4px;
}
</style>

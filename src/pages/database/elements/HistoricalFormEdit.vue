<script setup lang="ts">
import { type HistoricalEditForm } from '@/pages/database/models/historicalModels'
import type { HistoricalEditItem } from '@/pages/database/types/historicalTypes'

const form = defineModel<HistoricalEditForm>('editForm', { required: true })

function edit(item: HistoricalEditItem) {
  form.value.edit(item.index)
  item.value = !item.value
}
</script>

<template>
  <div v-for="(item, index) in form.items" :key="index" class="historical-edit-item">
    <button @click="edit(item)" class="btn-edit-save">
      {{ item.value ? 'Сохранить' : 'Редактировать' }}
    </button>
  </div>
</template>

<style scoped>
@import '@/assets/styles/historical_person.css';

.historical-edit-item {
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

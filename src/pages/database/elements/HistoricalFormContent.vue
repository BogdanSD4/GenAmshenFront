<script setup lang="ts">
import type { HistoricalForm } from '@/pages/database/models/historicalModels'

const form = defineModel<HistoricalForm>('historicalForm', { required: true })
</script>

<template>
  <p class="name">
    <strong>{{ form.label }}</strong>
  </p>

  <div class="historical-form">
    <input
      v-for="(item, index) in form.items"
      :key="index"
      v-model="item.text"
      type="text"
      :disabled="item.disabled"
      :placeholder="item.placeholder"
    />
  </div>
</template>

<style scoped>
.historical-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>

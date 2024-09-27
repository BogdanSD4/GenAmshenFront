<script setup lang="ts">
import type { BasePersonModel } from '@/pages/person/components/data/models/base'
import { checkSymbolArmenian } from '@/utils/textCheck'

defineProps({
  lable: {
    type: String
  },
  includeAge: {
    type: Boolean,
    required: true
  },
  noMargin: Boolean
})
const item = defineModel<BasePersonModel>('personItem', { required: true })

function onKeyDown(event: KeyboardEvent) {
  checkSymbolArmenian(event)
}
</script>

<template>
  <div v-if="lable" class="role">
    <h5>{{ lable }}</h5>
  </div>

  <div :class="['field-name', { 'no-margin': noMargin }]">
    <h4>Имя</h4>
  </div>

  <div class="labels">
    <label></label>
    <input
      id="groom_first_name"
      v-model="item.first_name"
      class="input-195"
      type="text"
      placeholder="Имя"
      @keydown="onKeyDown"
    />

    <label></label>
    <input
      id="groom_last_name"
      v-model="item.last_name"
      class="input-195"
      type="text"
      placeholder="Фамилия"
      @keydown="onKeyDown"
    />

    <label></label>
    <input
      id="groom_patronymic"
      v-model="item.patronymic"
      class="input-195"
      type="text"
      placeholder="Отчество"
      @keydown="onKeyDown"
    />
  </div>

  <div :class="['labels', { 'align-right': !includeAge }]">
    <label></label>
    <input
      id="groom_age"
      v-if="includeAge"
      v-model="item.age"
      class="input-195"
      type="text"
      placeholder="Возраст"
      @keydown="onKeyDown"
    />

    <label></label>
    <input
      id="groom_name_note"
      v-model="item.name_note"
      class="input-410"
      type="text"
      placeholder="Примечания"
      @keydown="onKeyDown"
    />
  </div>
</template>

<style scoped>
@import '@/assets/styles/personal_data.css';
</style>

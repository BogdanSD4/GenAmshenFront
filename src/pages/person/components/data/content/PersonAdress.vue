<script setup lang="ts">
import { AdressModel } from '@/pages/person/components/data/models/base'
import { checkSymbolArmenian } from '@/utils/textCheck'

defineProps({
  label: {
    type: String,
    default: 'Адрес проживания'
  },
  noMargin: {
    type: Boolean,
    default: true
  }
})
const adress = defineModel<AdressModel>('adress', { required: true })

function onInput(event: KeyboardEvent) {
  checkSymbolArmenian(event)
}
</script>

<template>
  <div :class="['field-name', { 'no-margin': noMargin }]">
    <h4>{{ label }}</h4>
  </div>

  <div class="labels">
    <label></label>
    <input
      id="groom_country"
      v-model="adress.country"
      class="input-195"
      type="text"
      placeholder="Страна"
      @keydown="onInput"
    />

    <label></label>
    <input
      id="groom_region"
      v-model="adress.region"
      class="input-195"
      type="text"
      placeholder="Регион/Область"
      @keydown="onInput"
    />

    <label></label>
    <input
      id="groom_city"
      v-model="adress.city"
      class="input-195"
      type="text"
      placeholder="Город/Деревня"
      @keydown="onInput"
    />
  </div>

  <div class="labels">
    <label></label>
    <input
      id="groom_street"
      v-model="adress.street"
      class="input-410"
      type="text"
      placeholder="Улица"
      @keydown="onInput"
    />

    <label></label>
    <input
      id="groom_building"
      v-model="adress.building"
      class="input-195"
      type="text"
      placeholder="№ здания"
      @keydown="onInput"
    />
  </div>

  <div class="labels">
    <label></label>
    <input
      id="groom_postal"
      v-model="adress.postal"
      class="input-195"
      type="text"
      placeholder="Индекс"
      @keydown="onInput"
    />

    <label></label>
    <input
      id="groom_place_note"
      v-model="adress.place_note"
      class="input-410"
      type="text"
      placeholder="Примечания"
      @keydown="onInput"
    />
  </div>
</template>

<style scoped>
@import '@/assets/styles/personal_data.css';
</style>

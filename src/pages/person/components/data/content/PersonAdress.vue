<script setup lang="ts">
import { AdressModel } from '@/pages/person/components/data/models/base'

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
    />

    <label></label>
    <input
      id="groom_region"
      v-model="adress.region"
      class="input-195"
      type="text"
      placeholder="Регион/Область"
    />

    <label></label>
    <input
      id="groom_city"
      v-model="adress.city"
      class="input-195"
      type="text"
      placeholder="Город/Деревня"
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
    />

    <label></label>
    <input
      id="groom_building"
      v-model="adress.building"
      class="input-195"
      type="text"
      placeholder="№ здания"
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
    />

    <label></label>
    <input
      id="groom_place_note"
      v-model="adress.place_note"
      class="input-410"
      type="text"
      placeholder="Примечания"
    />
  </div>
</template>

<style scoped></style>

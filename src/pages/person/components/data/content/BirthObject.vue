<script setup lang="ts">
import type { BaseBirthModel } from '@/pages/person/components/data/models/birthModel'
import { type ModelRef, ref } from 'vue'
import { checkSymbolArmenian, isArmenianLanguage } from '@/utils/textCheck'

const model = defineModel<BaseBirthModel>('birthModel', {
  required: true
}) as ModelRef<BaseBirthModel>
let moreActive = ref<boolean>(false)

function moreToggle() {
  const element = document.querySelector(`.${model.value.moreClass}`) as HTMLElement
  if (element) {
    element.style.height = `${moreActive.value ? 0 : element.scrollHeight}px`
    moreActive.value = !moreActive.value
  }
}
function onKeyDown(event: KeyboardEvent) {
  checkSymbolArmenian(event)
}
</script>

<template>
  <div class="field-name">
    <h4>{{ model.label }}</h4>
  </div>

  <div class="labels">
    <label for="first_name"></label>
    <input
      id="first_name"
      v-model="model.info.first_name"
      class="input-195"
      type="text"
      placeholder="Имя"
      required
      @keydown="onKeyDown"
    />

    <label for="last_name"></label>
    <input
      id="last_name"
      v-model="model.info.last_name"
      class="input-195"
      type="text"
      placeholder="Фамилия"
      required
      @keydown="onKeyDown"
    />

    <label></label>
    <input
      id="patronymic"
      v-model="model.info.patronymic"
      class="input-195"
      type="text"
      placeholder="Отчество"
      @keydown="onKeyDown"
    />
  </div>

  <div :class="['labels', { 'align-right': !model.isGenderField }]">
    <label></label>
    <select
      v-if="model.isGenderField"
      v-model="model.gender"
      id="gender"
      class="input-195 option"
      required
    >
      <option value="" disabled selected>Пол</option>
      <option class="gender" value="male">Мужской</option>
      <option class="gender" value="female">Женский</option>
    </select>

    <label></label>
    <input
      id="name_note"
      v-model="model.info.name_note"
      class="input-410"
      type="text"
      placeholder="Примечания"
      @keydown="onKeyDown"
    />
  </div>

  <span :class="[model.moreClass, { more: model.haveMoreInfo }]">
    <div class="field-name no-margin">
      <h4>Дата рождения</h4>
    </div>

    <div class="labels">
      <label></label>
      <input id="birth_date" v-model="model.date.date" class="input-300" type="date" />

      <label></label>
      <input
        id="birth_date_note"
        v-model="model.date.date_note"
        class="input-300"
        type="text"
        placeholder="Примечания"
        @keydown="onKeyDown"
      />
    </div>

    <div class="field-name no-margin">
      <h4>Место рождения</h4>
    </div>

    <div class="labels">
      <label></label>
      <input
        id="birth_country"
        v-model="model.birth_adress.country"
        class="input-195"
        type="text"
        placeholder="Страна"
        @keydown="onKeyDown"
      />

      <label></label>
      <input
        id="birth_region"
        v-model="model.birth_adress.region"
        class="input-195"
        type="text"
        placeholder="Регион/Область"
        @keydown="onKeyDown"
      />

      <label></label>
      <input
        id="birth_city"
        v-model="model.birth_adress.city"
        class="input-195"
        type="text"
        placeholder="Город/Деревня"
        @keydown="onKeyDown"
      />
    </div>

    <div class="labels">
      <label></label>
      <input
        id="birth_street"
        v-model="model.birth_adress.street"
        class="input-410"
        type="text"
        placeholder="Улица"
        @keydown="onKeyDown"
      />

      <label></label>
      <input
        id="birth_building"
        v-model="model.birth_adress.building"
        class="input-195"
        type="text"
        placeholder="№ здания"
        @keydown="onKeyDown"
      />
    </div>

    <div class="labels">
      <label></label>
      <input
        id="birth_postal"
        v-model="model.birth_adress.postal"
        class="input-195"
        type="text"
        placeholder="Индекс"
        @keydown="onKeyDown"
      />

      <label></label>
      <input
        id="birth_place_note"
        v-model="model.birth_adress.place_note"
        class="input-410"
        type="text"
        placeholder="Примечания"
        @keydown="onKeyDown"
      />
    </div>

    <div class="field-name no-margin">
      <h4>Крещение</h4>
    </div>

    <div class="labels">
      <label></label>
      <input id="baptism_date" v-model="model.baptism_date.date" class="input-300" type="date" />

      <label></label>
      <input
        id="baptism_date_note"
        v-model="model.baptism_date.date_note"
        class="input-300"
        type="text"
        placeholder="Примечания"
        @keydown="onKeyDown"
      />
    </div>

    <div class="field-name no-margin">
      <h4>Место крещения</h4>
    </div>

    <div class="labels">
      <label></label>
      <input
        id="baptism_country"
        v-model="model.baptism_adress.country"
        class="input-195"
        type="text"
        placeholder="Страна"
        @keydown="onKeyDown"
      />

      <label></label>
      <input
        id="baptism_region"
        v-model="model.baptism_adress.region"
        class="input-195"
        type="text"
        placeholder="Регион/Область"
        @keydown="onKeyDown"
      />

      <label></label>
      <input
        id="baptism_city"
        v-model="model.baptism_adress.city"
        class="input-195"
        type="text"
        placeholder="Город/Деревня"
        @keydown="onKeyDown"
      />
    </div>

    <div class="labels">
      <label></label>
      <input
        id="baptism_street"
        v-model="model.baptism_adress.street"
        class="input-410"
        type="text"
        placeholder="Улица"
        @keydown="onKeyDown"
      />

      <label></label>
      <input
        id="baptism_building"
        v-model="model.baptism_adress.building"
        class="input-195"
        type="text"
        placeholder="№ здания"
        @keydown="onKeyDown"
      />
    </div>

    <div class="labels">
      <label></label>
      <input
        id="baptism_postal"
        v-model="model.baptism_adress.postal"
        class="input-195"
        type="text"
        placeholder="Индекс"
        @keydown="onKeyDown"
      />

      <label></label>
      <input
        id="baptism_note_priest"
        v-model="model.baptism_adress.place_note"
        class="input-410"
        type="text"
        placeholder="Примечания/Священник"
        @keydown="onKeyDown"
      />
    </div>
  </span>

  <div v-if="model.haveMoreInfo" class="add-data">
    <button id="myBtnData" @click="moreToggle()">
      {{ moreActive ? 'Свернуть' : 'Добавить данные' }}
    </button>
  </div>
</template>

<style scoped>
@import '@/assets/styles/personal_data.css';
.more {
  height: 0;
  overflow: hidden;
  transition: height 0.5s;
}
</style>

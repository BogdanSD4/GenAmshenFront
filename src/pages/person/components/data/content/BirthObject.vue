<script setup lang="ts">
import type { BaseBirthModel } from '@/pages/person/components/data/models/birthModel'
import type { ModelRef } from 'vue'

const model = defineModel<BaseBirthModel>('birthModel', {
  required: true
}) as ModelRef<BaseBirthModel>
let moreActive = false

function moreToggle() {
  const element = document.querySelector(`.${model.value.moreClass}`) as HTMLElement
  if (element) {
    element.style.height = `${moreActive ? 0 : element.scrollHeight}px`
    moreActive = !moreActive
  }
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
    />

    <label for="last_name"></label>
    <input
      id="last_name"
      v-model="model.info.last_name"
      class="input-195"
      type="text"
      placeholder="Фамилия"
      required
    />

    <label></label>
    <input
      id="patronymic"
      v-model="model.info.patronymic"
      class="input-195"
      type="text"
      placeholder="Отчество"
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
    />
  </div>

  <span :class="[model.moreClass, { more: model.haveMoreInfo }]">
    <div class="field-name">
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
      />
    </div>

    <div class="field-name">
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
      />

      <label></label>
      <input
        id="birth_region"
        v-model="model.birth_adress.region"
        class="input-195"
        type="text"
        placeholder="Регион/Область"
      />

      <label></label>
      <input
        id="birth_city"
        v-model="model.birth_adress.city"
        class="input-195"
        type="text"
        placeholder="Город/Деревня"
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
      />

      <label></label>
      <input
        id="birth_building"
        v-model="model.birth_adress.building"
        class="input-195"
        type="text"
        placeholder="№ здания"
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
      />

      <label></label>
      <input
        id="birth_place_note"
        v-model="model.birth_adress.place_note"
        class="input-410"
        type="text"
        placeholder="Примечания"
      />
    </div>

    <div class="field-name">
      <h4>Крещение</h4>
    </div>

    <div class="labels">
      <label></label>
      <input id="baptism_date" v-model="model.babtism_date.date" class="input-300" type="date" />

      <label></label>
      <input
        id="baptism_date_note"
        v-model="model.babtism_date.date_note"
        class="input-300"
        type="text"
        placeholder="Примечания"
      />
    </div>

    <div class="field-name">
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
      />

      <label></label>
      <input
        id="baptism_region"
        v-model="model.baptism_adress.region"
        class="input-195"
        type="text"
        placeholder="Регион/Область"
      />

      <label></label>
      <input
        id="baptism_city"
        v-model="model.baptism_adress.city"
        class="input-195"
        type="text"
        placeholder="Город/Деревня"
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
      />

      <label></label>
      <input
        id="baptism_building"
        v-model="model.baptism_adress.building"
        class="input-195"
        type="text"
        placeholder="№ здания"
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
      />

      <label></label>
      <input
        id="baptism_note_priest"
        v-model="model.baptism_adress.place_note"
        class="input-410"
        type="text"
        placeholder="Примечания/Священник"
      />
    </div>
  </span>

  <div v-if="model.haveMoreInfo" class="add-data">
    <button id="myBtnData" @click="moreToggle()">Добавить данные</button>
  </div>
</template>

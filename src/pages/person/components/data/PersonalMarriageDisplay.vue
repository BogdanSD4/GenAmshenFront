<script setup lang="ts">
import MarriagePerson from '@/pages/person/components/data/content/PersonInfo.vue'
import {
  BrideModel,
  MarriageDateModel,
  MarriagePersonModel,
  WitnessModel
} from '@/pages/person/components/data/models/marriageModel'
import { ref } from 'vue'
import MarriageAdress from '@/pages/person/components/data/content/PersonAdress.vue'
import { userStore } from '@/stores/userRole'
import { createPerson } from '@/api/person'
import { type HistoricalDeath, PersonType } from '@/pages/database/types/historicalTypes'
import { checkSymbolArmenian } from '@/utils/textCheck'

const emit = defineEmits(['changePanel'])
const personData = defineModel<HistoricalDeath>('personData')

const man = ref<MarriagePersonModel>(new MarriagePersonModel())
const bride = ref<BrideModel>(new BrideModel())
const weddingDate = ref<MarriageDateModel>(new MarriageDateModel())
const witness = ref<WitnessModel>(new WitnessModel())
const comment = ref<string>('')

interface MoreTypes {
  man: boolean
  bride: boolean
  date: boolean
  witness: boolean
  [key: string]: boolean
}

const moreActive = ref<MoreTypes>({
  man: false,
  bride: false,
  date: false,
  witness: false
})

function toggleName(value: keyof MoreTypes) {
  return moreActive.value[value] ? 'Свернуть' : 'Добавить данные'
}

function moreToggle(value: keyof MoreTypes) {
  const element = document.querySelector(`.${value}`) as HTMLElement
  if (element) {
    element.style.height = `${moreActive.value[value] ? 0 : element.scrollHeight}px`
    moreActive.value[value] = !moreActive.value[value]
  }
}

async function onSave() {
  const user = userStore()

  const data = {
    groom_first_name: man.value.info.first_name,
    groom_last_name: man.value.info.last_name,
    groom_patronymic: man.value.info.patronymic,
    groom_age: man.value.info.age,
    groom_name_note: man.value.info.name_note,
    groom_wedding_number: man.value.wedding_number,
    groom_country: man.value.adress.country,
    groom_region: man.value.adress.region,
    groom_city: man.value.adress.city,
    groom_street: man.value.adress.street,
    groom_building: man.value.adress.building,
    groom_postal_code: man.value.adress.postal,
    groom_place_note: man.value.adress.place_note,
    bride_first_name: bride.value.info.first_name,
    bride_last_name: bride.value.info.last_name,
    bride_patronymic: bride.value.info.patronymic,
    bride_age: bride.value.info.age,
    bride_name_note: bride.value.info.name_note,
    bride_wedding_number: bride.value.wedding_number,
    bride_country: bride.value.adress.country,
    bride_region: bride.value.adress.region,
    bride_city: bride.value.adress.city,
    bride_street: bride.value.adress.street,
    bride_building: bride.value.adress.building,
    bride_postal_code: bride.value.adress.postal,
    bride_place_note: bride.value.adress.place_note,
    bride_father_first_name: bride.value.father.first_name,
    bride_father_last_name: bride.value.father.last_name,
    bride_father_patronymic: bride.value.father.patronymic,
    bride_father_name_note: bride.value.father.name_note,
    wedding_date: weddingDate.value.date,
    wedding_date_note: weddingDate.value.date_note,
    wedding_country: weddingDate.value.adress.country,
    wedding_region: weddingDate.value.adress.region,
    wedding_city: weddingDate.value.adress.city,
    wedding_street: weddingDate.value.adress.street,
    wedding_building: weddingDate.value.adress.building,
    wedding_postal_code: weddingDate.value.adress.postal,
    wedding_place_note: weddingDate.value.adress.place_note,
    witness_1_first_name: witness.value.first_witness_info.first_name,
    witness_1_last_name: witness.value.first_witness_info.last_name,
    witness_1_patronymic: witness.value.first_witness_info.patronymic,
    witness_1_name_note: witness.value.first_witness_info.name_note,
    witness_1_country: witness.value.first_witness_adress.country,
    witness_1_region: witness.value.first_witness_adress.region,
    witness_1_city: witness.value.first_witness_adress.city,
    witness_1_street: witness.value.first_witness_adress.street,
    witness_1_building: witness.value.first_witness_adress.building,
    witness_1_postal: witness.value.first_witness_adress.postal,
    witness_1_place_note: witness.value.first_witness_adress.place_note,
    witness_2_first_name: witness.value.second_witness_info.first_name,
    witness_2_last_name: witness.value.second_witness_info.last_name,
    witness_2_patronymic: witness.value.second_witness_info.patronymic,
    witness_2_name_note: witness.value.second_witness_info.name_note,
    witness_2_country: witness.value.second_witness_adress.country,
    witness_2_region: witness.value.second_witness_adress.region,
    witness_2_city: witness.value.second_witness_adress.city,
    witness_2_street: witness.value.second_witness_adress.street,
    witness_2_building: witness.value.second_witness_adress.building,
    witness_2_postal: witness.value.second_witness_adress.postal,
    witness_2_place_note: witness.value.second_witness_adress.place_note,
    comments: comment.value,
    book: 1,
    user: user.id
  }

  await createPerson(PersonType.WEDDING, data)
}

function onKeyDown(event: KeyboardEvent) {
  checkSymbolArmenian(event)
}
</script>

<template>
  <div class="marriage">
    <MarriagePerson :include-age="true" lable="Жених" :person-item="man.info" />

    <div class="labels-left">
      <label></label>
      <input
        id="groom_wedding_number"
        v-model="man.wedding_number"
        class="input-195"
        type="text"
        placeholder="Брак №"
        @keydown="onKeyDown"
      /><span id="dotsThree"> </span>
    </div>
    <span class="man more">
      <MarriageAdress :adress="man.adress" />
    </span>

    <div v-if="!personData" class="add-data">
      <button id="myBtnDataThree" @click="moreToggle('man')">{{ toggleName('man') }}</button>
    </div>

    <br />
    <hr />
    <br />

    <MarriagePerson :include-age="true" lable="Невеста" :person-item="bride.info" />

    <div class="labels-left">
      <label></label>
      <input
        id="bride_wedding_number"
        v-model="bride.wedding_number"
        class="input-195"
        type="text"
        placeholder="Брак №"
        @keydown="onKeyDown"
      /><span id="dotsFour"> </span>
    </div>

    <span class="bride more">
      <MarriageAdress :adress="bride.adress" />
      <MarriagePerson
        no-margin
        :include-age="false"
        lable="Отец невесты"
        :person-item="bride.father"
      />
    </span>

    <div v-if="!personData" class="add-data">
      <button id="myBtnDataFour" @click="moreToggle('bride')">{{ toggleName('bride') }}</button>
    </div>

    <br />
    <hr />
    <br />

    <div class="field-name">
      <h4>Дата свадьбы</h4>
    </div>

    <div class="labels">
      <label></label>
      <input id="wedding_date" v-model="weddingDate.date" class="input-300" type="date" />

      <label></label>
      <input
        id="wedding_date_note"
        v-model="weddingDate.date_note"
        class="input-300"
        type="text"
        placeholder="Примечания"
        @keydown="onKeyDown"
      />
      <span id="dotsFive"></span>
    </div>
    <span class="date more">
      <MarriageAdress label="Адрес свадьбы" :adress="weddingDate.adress" />
    </span>

    <div v-if="!personData" class="add-data">
      <button id="myBtnDataFive" @click="moreToggle('date')">{{ toggleName('date') }}</button>
    </div>

    <br />
    <hr />
    <br />

    <MarriagePerson
      :include-age="false"
      lable="Свидетель/Поручитель"
      :person-item="witness.first_witness_info"
    />

    <span class="witness more">
      <MarriageAdress :adress="witness.first_witness_adress" />
      <MarriagePerson
        no-margin
        :include-age="false"
        lable="Свидетель/Поручитель2"
        :person-item="witness.second_witness_info"
      />
      <MarriageAdress :adress="witness.second_witness_adress" />
    </span>

    <div v-if="!personData" class="add-data">
      <button id="myBtnDataSix" @click="moreToggle('witness')">{{ toggleName('witness') }}</button>
    </div>

    <br />
    <hr />
    <br />

    <div class="field-name">
      <h4>Комментарии</h4>
    </div>

    <div class="labels">
      <label></label>
      <textarea
        id="wedding_comments"
        v-model="comment"
        class="input-625"
        type="text"
        placeholder="Комментарии"
        @keydown="onKeyDown"
      ></textarea>
    </div>

    <div class="save-btn">
      <button id="save_btn_wedding_data" class="save" @click="onSave()">Сохранить</button>
    </div>
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

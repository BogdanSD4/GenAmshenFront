<script setup lang="ts">
import MarriagePerson from '@/pages/person/components/data/content/PersonInfo.vue'
import {
  BrideModel,
  MarriageDateModel,
  MarriagePersonModel,
  WitnessModel
} from '@/pages/person/components/data/models/marriageModel'
import { type ModelRef, onMounted, onUnmounted, ref, watch } from 'vue'
import MarriageAdress from '@/pages/person/components/data/content/PersonAdress.vue'
import { userStore } from '@/stores/userRole'
import { createPerson } from '@/api/person'
import {
  type ClerkPersonInfo,
  type HistoricalMarriage,
  PersonType
} from '@/pages/database/types/historicalTypes'
import { checkSymbolArmenian } from '@/utils/textCheck'
import { modalStore, ModalTypes } from '@/stores/modalViews'
import { useCookies } from 'vue3-cookies'
import { isEmpty } from '@/utils/objectManager'

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  currentIndex: {
    type: Number,
    required: true
  },
  toCookies: Boolean
})
const emit = defineEmits(['changePanel', 'onSave', 'onSaveToCookies'])
const personData = defineModel<ClerkPersonInfo>('personData') as ModelRef<HistoricalMarriage>

const user = userStore()
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

function setData() {
  if (!personData.value) return
  man.value.info.first_name = personData.value.first_name
  man.value.info.last_name = personData.value.last_name
  man.value.info.patronymic = personData.value.patronymic
  man.value.info.age = personData.value.age
  man.value.info.name_note = personData.value.name_note
  man.value.wedding_number = personData.value.wedding_number
  man.value.adress.country = personData.value.country
  man.value.adress.region = personData.value.region
  man.value.adress.city = personData.value.city
  man.value.adress.street = personData.value.street
  man.value.adress.building = personData.value.building
  man.value.adress.postal = personData.value.postal_code
  man.value.adress.place_note = personData.value.place_note

  bride.value.info.first_name = personData.value.bride_first_name
  bride.value.info.last_name = personData.value.bride_last_name
  bride.value.info.patronymic = personData.value.bride_patronymic
  bride.value.info.age = personData.value.bride_age
  bride.value.info.name_note = personData.value.bride_name_note
  bride.value.wedding_number = personData.value.bride_wedding_number
  bride.value.adress.country = personData.value.bride_country
  bride.value.adress.region = personData.value.bride_region
  bride.value.adress.city = personData.value.bride_city
  bride.value.adress.street = personData.value.bride_street
  bride.value.adress.building = personData.value.bride_building
  bride.value.adress.postal = personData.value.bride_postal_code
  bride.value.adress.place_note = personData.value.bride_place_note
  bride.value.father.first_name = personData.value.bride_father_first_name
  bride.value.father.last_name = personData.value.bride_father_first_name
  bride.value.father.patronymic = personData.value.bride_father_patronymic
  bride.value.father.name_note = personData.value.bride_father_name_note

  weddingDate.value.date = personData.value.wedding_date
  weddingDate.value.date_note = personData.value.wedding_date_note
  weddingDate.value.adress.country = personData.value.wedding_country
  weddingDate.value.adress.region = personData.value.wedding_region
  weddingDate.value.adress.city = personData.value.wedding_city
  weddingDate.value.adress.street = personData.value.wedding_street
  weddingDate.value.adress.building = personData.value.wedding_building
  weddingDate.value.adress.postal = personData.value.wedding_postal_code
  weddingDate.value.adress.place_note = personData.value.wedding_place_note

  witness.value.first_witness_info.first_name = personData.value.witness_1_first_name
  witness.value.first_witness_info.last_name = personData.value.witness_1_last_name
  witness.value.first_witness_info.patronymic = personData.value.witness_1_patronymic
  witness.value.first_witness_info.name_note = personData.value.witness_1_name_note
  witness.value.first_witness_adress.country = personData.value.witness_1_country
  witness.value.first_witness_adress.region = personData.value.witness_1_region
  witness.value.first_witness_adress.city = personData.value.witness_1_city
  witness.value.first_witness_adress.street = personData.value.witness_1_street
  witness.value.first_witness_adress.building = personData.value.witness_1_building
  witness.value.first_witness_adress.postal = personData.value.witness_1_postal
  witness.value.first_witness_adress.place_note = personData.value.witness_1_place_note
  witness.value.second_witness_info.first_name = personData.value.witness_2_first_name
  witness.value.second_witness_info.last_name = personData.value.witness_2_last_name
  witness.value.second_witness_info.patronymic = personData.value.witness_2_patronymic
  witness.value.second_witness_info.name_note = personData.value.witness_2_name_note
  witness.value.second_witness_adress.country = personData.value.witness_2_country
  witness.value.second_witness_adress.region = personData.value.witness_2_region
  witness.value.second_witness_adress.city = personData.value.witness_2_city
  witness.value.second_witness_adress.street = personData.value.witness_2_street
  witness.value.second_witness_adress.building = personData.value.witness_2_building
  witness.value.second_witness_adress.postal = personData.value.witness_2_postal
  witness.value.second_witness_adress.place_note = personData.value.witness_2_place_note
}
function getData() {
  return {
    first_name: man.value.info.first_name,
    last_name: man.value.info.last_name,
    patronymic: man.value.info.patronymic,
    age: man.value.info.age,
    name_note: man.value.info.name_note,
    wedding_number: man.value.wedding_number,
    country: man.value.adress.country,
    region: man.value.adress.region,
    city: man.value.adress.city,
    street: man.value.adress.street,
    building: man.value.adress.building,
    postal_code: man.value.adress.postal,
    place_note: man.value.adress.place_note,

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
    witness_2_place_note: witness.value.second_witness_adress.place_note
  }
}

function clear() {
  man.value = new MarriagePersonModel()
  bride.value = new BrideModel()
  weddingDate.value = new MarriageDateModel()
  witness.value = new WitnessModel()
  comment.value = ''
}

function validation(data: any): boolean {
  if (data.first_name == '' || data.last_name == '') {
    const modal = modalStore()
    modal.activate(ModalTypes.SIX)
    return false
  }

  return true
}

async function onSave() {
  const data = getData()

  if (!validation(data)) return

  emit('onSave', PersonType.WEDDING, props.index, data, clear)
}

function saveToCookie() {
  const data = getData()
  if (!isEmpty(data)) emit('onSaveToCookies', data, props.index)
}

function onKeyDown(event: KeyboardEvent) {
  checkSymbolArmenian(event)
}

watch(
  () => props.currentIndex,
  (n) => {
    if (n == props.index) {
      user.personFirstName = man.value.info.first_name
      user.personLastName = man.value.info.last_name
    }
  }
)
watch(
  () => man.value.info.first_name,
  (n) => {
    user.personFirstName = n
  }
)
watch(
  () => man.value.info.last_name,
  (n) => {
    user.personLastName = n
  }
)

onMounted(() => {
  if (props.toCookies) {
    window.addEventListener('beforeunload', () => {
      saveToCookie()
    })

    const cookies = useCookies().cookies

    const option = cookies.get('person_save') as any
    if (option && option.menuChapter == props.index) {
      personData.value = option as any
      emit('changePanel', props.index)
    }
  }

  setData()
})
onUnmounted(() => {
  if (props.toCookies) saveToCookie()
})
</script>

<template>
  <div v-show="index == currentIndex" class="marriage">
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

    <div class="add-data">
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

    <div class="add-data">
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

    <div class="add-data">
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

    <div class="add-data">
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

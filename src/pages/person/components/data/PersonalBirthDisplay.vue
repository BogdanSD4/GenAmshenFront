<script setup lang="ts">
import BirthObject from '@/pages/person/components/data/content/BirthObject.vue'
import { BaseBirthModel } from '@/pages/person/components/data/models/birthModel'
import { type ModelRef, onMounted, onUnmounted, ref, watch } from 'vue'
import { type ClerkPersonInfo, PersonType } from '@/pages/database/types/historicalTypes'
import { useCookies } from 'vue3-cookies'
import { modalStore, ModalTypes } from '@/stores/modalViews'
import { checkSymbolArmenian } from '@/utils/textCheck'
import { personStore } from '@/stores/personalStore'
import { isEmpty } from '@/utils/objectManager'

const personInfo = personStore()
const person = ref<BaseBirthModel>(new BaseBirthModel('Имя', '', false, true))
const father = ref<BaseBirthModel>(new BaseBirthModel('Отец', 'father', true))
const mother = ref<BaseBirthModel>(new BaseBirthModel('Мать', 'mother', true))
const godFather = ref<BaseBirthModel>(new BaseBirthModel('Крестный/Поручитель', 'godfather', true))
const comment = ref<string>('')

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
const personData = defineModel<ClerkPersonInfo>('personData') as ModelRef<any>

function setData() {
  if (!personData.value) return
  person.value.info.first_name = personData.value.first_name
  person.value.info.last_name = personData.value.last_name
  person.value.info.patronymic = personData.value.patronymic
  person.value.gender = personData.value.gender
  person.value.info.name_note = personData.value.name_note
  person.value.date.date = personData.value.birth_date
  person.value.date.date_note = personData.value.birth_date_note
  person.value.birth_adress.country = personData.value.birth_country
  person.value.birth_adress.region = personData.value.birth_region
  person.value.birth_adress.city = personData.value.birth_city
  person.value.birth_adress.street = personData.value.birth_street
  person.value.birth_adress.building = personData.value.birth_building
  person.value.birth_adress.postal = personData.value.birth_postal
  person.value.birth_adress.place_note = personData.value.birth_place_note
  person.value.baptism_date.date = personData.value.baptism_date
  person.value.baptism_date.date_note = personData.value.baptism_date_note
  person.value.baptism_adress.country = personData.value.baptism_country
  person.value.baptism_adress.region = personData.value.baptism_region
  person.value.baptism_adress.city = personData.value.baptism_city
  person.value.baptism_adress.street = personData.value.baptism_street
  person.value.baptism_adress.building = personData.value.baptism_building
  person.value.baptism_adress.postal = personData.value.baptism_postal
  person.value.baptism_adress.place_note = personData.value.baptism_note_priest
  father.value.info.first_name = personData.value.father.first_name
  father.value.info.last_name = personData.value.father.last_name
  father.value.info.patronymic = personData.value.father.patronymic
  father.value.info.name_note = personData.value.father.name_note
  father.value.date.date = personData.value.father.birth_date
  father.value.date.date_note = personData.value.father.birth_date_note
  father.value.birth_adress.country = personData.value.father.birth_country
  father.value.birth_adress.region = personData.value.father.birth_region
  father.value.birth_adress.city = personData.value.father.birth_city
  father.value.birth_adress.street = personData.value.father.birth_street
  father.value.birth_adress.building = personData.value.father.birth_building
  father.value.birth_adress.postal = personData.value.father.birth_postal
  father.value.birth_adress.place_note = personData.value.father.birth_place_note
  father.value.baptism_date.date = personData.value.father.baptism_date
  father.value.baptism_date.date_note = personData.value.father.baptism_date_note
  father.value.baptism_adress.country = personData.value.father.baptism_country
  father.value.baptism_adress.region = personData.value.father.baptism_region
  father.value.baptism_adress.city = personData.value.father.baptism_city
  father.value.baptism_adress.street = personData.value.father.baptism_street
  father.value.baptism_adress.building = personData.value.father.baptism_building
  father.value.baptism_adress.postal = personData.value.father.baptism_postal
  father.value.baptism_adress.place_note = personData.value.father.baptism_note_priest
  mother.value.info.first_name = personData.value.mother.first_name
  mother.value.info.last_name = personData.value.mother.last_name
  mother.value.info.patronymic = personData.value.mother.patronymic
  mother.value.info.name_note = personData.value.mother.name_note
  mother.value.date.date = personData.value.mother.birth_date
  mother.value.date.date_note = personData.value.mother.birth_date_note
  mother.value.birth_adress.country = personData.value.mother.birth_country
  mother.value.birth_adress.region = personData.value.mother.birth_region
  mother.value.birth_adress.city = personData.value.mother.birth_city
  mother.value.birth_adress.street = personData.value.mother.birth_street
  mother.value.birth_adress.building = personData.value.mother.birth_building
  mother.value.birth_adress.postal = personData.value.mother.birth_postal
  mother.value.birth_adress.place_note = personData.value.mother.birth_place_note
  mother.value.baptism_date.date = personData.value.mother.baptism_date
  mother.value.baptism_date.date_note = personData.value.mother.baptism_date_note
  mother.value.baptism_adress.country = personData.value.mother.baptism_country
  mother.value.baptism_adress.region = personData.value.mother.baptism_region
  mother.value.baptism_adress.city = personData.value.mother.baptism_city
  mother.value.baptism_adress.street = personData.value.mother.baptism_street
  mother.value.baptism_adress.building = personData.value.mother.baptism_building
  mother.value.baptism_adress.postal = personData.value.mother.baptism_postal
  mother.value.baptism_adress.place_note = personData.value.mother.baptism_note_priest
  godFather.value.info.first_name = personData.value.godfather.first_name
  godFather.value.info.last_name = personData.value.godfather.last_name
  godFather.value.info.patronymic = personData.value.godfather.patronymic
  godFather.value.info.name_note = personData.value.godfather.name_note
  godFather.value.date.date = personData.value.godfather.birth_date
  godFather.value.date.date_note = personData.value.godfather.birth_date_note
  godFather.value.birth_adress.country = personData.value.godfather.birth_country
  godFather.value.birth_adress.region = personData.value.godfather.birth_region
  godFather.value.birth_adress.city = personData.value.godfather.birth_city
  godFather.value.birth_adress.street = personData.value.godfather.birth_street
  godFather.value.birth_adress.building = personData.value.godfather.birth_building
  godFather.value.birth_adress.postal = personData.value.godfather.birth_postal
  godFather.value.birth_adress.place_note = personData.value.godfather.birth_place_note
  godFather.value.baptism_date.date = personData.value.godfather.baptism_date
  godFather.value.baptism_date.date_note = personData.value.godfather.baptism_date_note
  godFather.value.baptism_adress.country = personData.value.godfather.baptism_country
  godFather.value.baptism_adress.region = personData.value.godfather.baptism_region
  godFather.value.baptism_adress.city = personData.value.godfather.baptism_city
  godFather.value.baptism_adress.street = personData.value.godfather.baptism_street
  godFather.value.baptism_adress.building = personData.value.godfather.baptism_building
  godFather.value.baptism_adress.postal = personData.value.godfather.baptism_postal
  godFather.value.baptism_adress.place_note = personData.value.godfather.baptism_note_priest
  comment.value = personData.value.comments
}
function getData() {
  return {
    first_name: person.value.info.first_name,
    last_name: person.value.info.last_name,
    patronymic: person.value.info.patronymic,
    gender: person.value.gender,
    name_note: person.value.info.name_note,
    birth_date: person.value.date.date == '' ? null : person.value.date.date,
    birth_date_note: person.value.date.date_note,
    birth_country: person.value.birth_adress.country,
    birth_region: person.value.birth_adress.region,
    birth_city: person.value.birth_adress.city,
    birth_street: person.value.birth_adress.street,
    birth_building: person.value.birth_adress.building,
    birth_postal: person.value.birth_adress.postal,
    birth_place_note: person.value.birth_adress.place_note,
    baptism_date: person.value.baptism_date.date == '' ? null : person.value.baptism_date.date,
    baptism_date_note: person.value.baptism_date.date_note,
    baptism_country: person.value.baptism_adress.country,
    baptism_region: person.value.baptism_adress.region,
    baptism_city: person.value.baptism_adress.city,
    baptism_street: person.value.baptism_adress.street,
    baptism_building: person.value.baptism_adress.building,
    baptism_postal: person.value.baptism_adress.postal,
    baptism_note_priest: person.value.baptism_adress.place_note,
    father: {
      first_name: father.value.info.first_name,
      last_name: father.value.info.last_name,
      patronymic: father.value.info.patronymic,
      name_note: father.value.info.name_note,
      birth_date: father.value.date.date == '' ? null : father.value.date.date,
      birth_date_note: father.value.date.date_note,
      birth_country: father.value.birth_adress.country,
      birth_region: father.value.birth_adress.region,
      birth_city: father.value.birth_adress.city,
      birth_street: father.value.birth_adress.street,
      birth_building: father.value.birth_adress.building,
      birth_postal: father.value.birth_adress.postal,
      birth_place_note: father.value.birth_adress.place_note,
      baptism_date: father.value.baptism_date.date == '' ? null : father.value.baptism_date.date,
      baptism_date_note: father.value.baptism_date.date_note,
      baptism_country: father.value.baptism_adress.country,
      baptism_region: father.value.baptism_adress.region,
      baptism_city: father.value.baptism_adress.city,
      baptism_street: father.value.baptism_adress.street,
      baptism_building: father.value.baptism_adress.building,
      baptism_postal: father.value.baptism_adress.postal,
      baptism_note_priest: father.value.baptism_adress.place_note
    },
    mother: {
      first_name: mother.value.info.first_name,
      last_name: mother.value.info.last_name,
      patronymic: mother.value.info.patronymic,
      name_note: mother.value.info.name_note,
      birth_date: mother.value.date.date == '' ? null : mother.value.date.date,
      birth_date_note: mother.value.date.date_note,
      birth_country: mother.value.birth_adress.country,
      birth_region: mother.value.birth_adress.region,
      birth_city: mother.value.birth_adress.city,
      birth_street: mother.value.birth_adress.street,
      birth_building: mother.value.birth_adress.building,
      birth_postal: mother.value.birth_adress.postal,
      birth_place_note: mother.value.birth_adress.place_note,
      baptism_date: mother.value.baptism_date.date == '' ? null : mother.value.baptism_date.date,
      baptism_date_note: mother.value.baptism_date.date_note,
      baptism_country: mother.value.baptism_adress.country,
      baptism_region: mother.value.baptism_adress.region,
      baptism_city: mother.value.baptism_adress.city,
      baptism_street: mother.value.baptism_adress.street,
      baptism_building: mother.value.baptism_adress.building,
      baptism_postal: mother.value.baptism_adress.postal,
      baptism_note_priest: mother.value.baptism_adress.place_note
    },
    godfather: {
      first_name: godFather.value.info.first_name,
      last_name: godFather.value.info.last_name,
      patronymic: godFather.value.info.patronymic,
      name_note: godFather.value.info.name_note,
      birth_date: godFather.value.date.date == '' ? null : godFather.value.date.date,
      birth_date_note: godFather.value.date.date_note,
      birth_country: godFather.value.birth_adress.country,
      birth_region: godFather.value.birth_adress.region,
      birth_city: godFather.value.birth_adress.city,
      birth_street: godFather.value.birth_adress.street,
      birth_building: godFather.value.birth_adress.building,
      birth_postal: godFather.value.birth_adress.postal,
      birth_place_note: godFather.value.birth_adress.place_note,
      baptism_date:
        godFather.value.baptism_date.date == '' ? null : godFather.value.baptism_date.date,
      baptism_date_note: godFather.value.baptism_date.date_note,
      baptism_country: godFather.value.baptism_adress.country,
      baptism_region: godFather.value.baptism_adress.region,
      baptism_city: godFather.value.baptism_adress.city,
      baptism_street: godFather.value.baptism_adress.street,
      baptism_building: godFather.value.baptism_adress.building,
      baptism_postal: godFather.value.baptism_adress.postal,
      baptism_note_priest: godFather.value.baptism_adress.place_note
    },
    comments: comment.value
  }
}

function clear() {
  person.value = new BaseBirthModel('Имя', '', false, true)
  father.value = new BaseBirthModel('Отец', 'father', true)
  mother.value = new BaseBirthModel('Мать', 'mother', true)
  godFather.value = new BaseBirthModel('Крестный/Поручитель', 'godfather', true)
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

  emit('onSave', PersonType.BIRTH, props.index, data, clear)
}

function saveToCookie() {
  const data = getData()
  console.log(data)
  emit('onSaveToCookies', data, props.index)
}

function onKeyDown(event: KeyboardEvent) {
  checkSymbolArmenian(event)
}

watch(
  () => props.currentIndex,
  (n) => {
    if (n == props.index) {
      personInfo.firstName = person.value.info.first_name
      personInfo.lastName = person.value.info.last_name
    }
  }
)
watch(
  () => person.value.info.first_name,
  (n) => {
    personInfo.firstName = n
  }
)
watch(
  () => person.value.info.last_name,
  (n) => {
    personInfo.lastName = n
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
      personData.value = option
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
  <div v-show="index == currentIndex" class="birth-date">
    <BirthObject :birth-model="person" />

    <hr />
    <br />

    <BirthObject :birth-model="father" />

    <br />
    <hr />
    <br />

    <BirthObject :birth-model="mother" />

    <br />
    <hr />
    <br />

    <BirthObject :birth-model="godFather" />

    <br />
    <hr />
    <br />

    <div class="field-name">
      <h4>Комментарии</h4>
    </div>

    <div class="labels">
      <label></label>
      <textarea
        id="comments"
        v-model="comment"
        class="input-625"
        type="text"
        placeholder="Комментарии"
        @keydown="onKeyDown"
      ></textarea>
    </div>

    <div class="save-btn">
      <button id="save_btn_birth_data" class="save" @click="onSave()">Сохранить</button>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/personal_data.css';
</style>

<script setup lang="ts">
import BirthObject from '@/pages/person/components/data/content/BirthObject.vue'
import { BaseBirthModel } from '@/pages/person/components/data/models/birthModel'
import { onMounted, onUnmounted, ref } from 'vue'
import { createPerson } from '@/api/person'
import { PersonType } from '@/pages/database/types/historicalTypes'
import { useCookies } from 'vue3-cookies'
import { modalStore, ModalTypes } from '@/stores/modalViews'
import { checkSymbolArmenian } from '@/utils/textCheck'

const person = ref<BaseBirthModel>(new BaseBirthModel('Имя', '', false, true))
const father = ref<BaseBirthModel>(new BaseBirthModel('Отец', 'father', true))
const mother = ref<BaseBirthModel>(new BaseBirthModel('Мать', 'mother', true))
const godFather = ref<BaseBirthModel>(new BaseBirthModel('Крестный/Поручитель', 'godfather', true))
const comment = ref<string>('')

function setData(data: any) {
  person.value.info.first_name = data.main.first_name
  person.value.info.last_name = data.main.last_name
  person.value.info.patronymic = data.main.patronymic
  person.value.gender = data.main.gender
  person.value.info.name_note = data.main.name_note
  person.value.date.date = data.main.birth_date
  person.value.date.date_note = data.main.birth_date_note
  person.value.birth_adress.country = data.main.birth_country
  person.value.birth_adress.region = data.main.birth_region
  person.value.birth_adress.city = data.main.birth_city
  person.value.birth_adress.street = data.main.birth_street
  person.value.birth_adress.building = data.main.birth_building
  person.value.birth_adress.postal = data.main.birth_postal
  person.value.birth_adress.place_note = data.main.birth_place_note
  person.value.baptism_date.date = data.main.baptism_date
  person.value.baptism_date.date_note = data.main.baptism_date_note
  person.value.baptism_adress.country = data.main.baptism_country
  person.value.baptism_adress.region = data.main.baptism_region
  person.value.baptism_adress.city = data.main.baptism_city
  person.value.baptism_adress.street = data.main.baptism_street
  person.value.baptism_adress.building = data.main.baptism_building
  person.value.baptism_adress.postal = data.main.baptism_postal
  person.value.baptism_adress.place_note = data.main.baptism_note_priest
  father.value.info.first_name = data.father.first_name
  father.value.info.last_name = data.father.last_name
  father.value.info.patronymic = data.father.patronymic
  father.value.info.name_note = data.father.name_note
  father.value.date.date = data.father.birth_date
  father.value.date.date_note = data.father.birth_date_note
  father.value.birth_adress.country = data.father.birth_country
  father.value.birth_adress.region = data.father.birth_region
  father.value.birth_adress.city = data.father.birth_city
  father.value.birth_adress.street = data.father.birth_street
  father.value.birth_adress.building = data.father.birth_building
  father.value.birth_adress.postal = data.father.birth_postal
  father.value.birth_adress.place_note = data.father.birth_place_note
  father.value.baptism_date.date = data.father.baptism_date
  father.value.baptism_date.date_note = data.father.baptism_date_note
  father.value.baptism_adress.country = data.father.baptism_country
  father.value.baptism_adress.region = data.father.baptism_region
  father.value.baptism_adress.city = data.father.baptism_city
  father.value.baptism_adress.street = data.father.baptism_street
  father.value.baptism_adress.building = data.father.baptism_building
  father.value.baptism_adress.postal = data.father.baptism_postal
  father.value.baptism_adress.place_note = data.father.baptism_note_priest
  mother.value.info.first_name = data.mother.first_name
  mother.value.info.last_name = data.mother.last_name
  mother.value.info.patronymic = data.mother.patronymic
  mother.value.info.name_note = data.mother.name_note
  mother.value.date.date = data.mother.birth_date
  mother.value.date.date_note = data.mother.birth_date_note
  mother.value.birth_adress.country = data.mother.birth_country
  mother.value.birth_adress.region = data.mother.birth_region
  mother.value.birth_adress.city = data.mother.birth_city
  mother.value.birth_adress.street = data.mother.birth_street
  mother.value.birth_adress.building = data.mother.birth_building
  mother.value.birth_adress.postal = data.mother.birth_postal
  mother.value.birth_adress.place_note = data.mother.birth_place_note
  mother.value.baptism_date.date = data.mother.baptism_date
  mother.value.baptism_date.date_note = data.mother.baptism_date_note
  mother.value.baptism_adress.country = data.mother.baptism_country
  mother.value.baptism_adress.region = data.mother.baptism_region
  mother.value.baptism_adress.city = data.mother.baptism_city
  mother.value.baptism_adress.street = data.mother.baptism_street
  mother.value.baptism_adress.building = data.mother.baptism_building
  mother.value.baptism_adress.postal = data.mother.baptism_postal
  mother.value.baptism_adress.place_note = data.mother.baptism_note_priest
  godFather.value.info.first_name = data.godfather.first_name
  godFather.value.info.last_name = data.godfather.last_name
  godFather.value.info.patronymic = data.godfather.patronymic
  godFather.value.info.name_note = data.godfather.name_note
  godFather.value.date.date = data.godfather.birth_date
  godFather.value.date.date_note = data.godfather.birth_date_note
  godFather.value.birth_adress.country = data.godfather.birth_country
  godFather.value.birth_adress.region = data.godfather.birth_region
  godFather.value.birth_adress.city = data.godfather.birth_city
  godFather.value.birth_adress.street = data.godfather.birth_street
  godFather.value.birth_adress.building = data.godfather.birth_building
  godFather.value.birth_adress.postal = data.godfather.birth_postal
  godFather.value.birth_adress.place_note = data.godfather.birth_place_note
  godFather.value.baptism_date.date = data.godfather.baptism_date
  godFather.value.baptism_date.date_note = data.godfather.baptism_date_note
  godFather.value.baptism_adress.country = data.godfather.baptism_country
  godFather.value.baptism_adress.region = data.godfather.baptism_region
  godFather.value.baptism_adress.city = data.godfather.baptism_city
  godFather.value.baptism_adress.street = data.godfather.baptism_street
  godFather.value.baptism_adress.building = data.godfather.baptism_building
  godFather.value.baptism_adress.postal = data.godfather.baptism_postal
  godFather.value.baptism_adress.place_note = data.godfather.baptism_note_priest
  comment.value = data.comments
}
function getData() {
  return {
    main: {
      first_name: person.value.info.first_name,
      last_name: person.value.info.last_name,
      patronymic: person.value.info.patronymic,
      gender: person.value.gender,
      name_note: person.value.info.name_note,
      birth_date: person.value.date.date,
      birth_date_note: person.value.date.date_note,
      birth_country: person.value.birth_adress.country,
      birth_region: person.value.birth_adress.region,
      birth_city: person.value.birth_adress.city,
      birth_street: person.value.birth_adress.street,
      birth_building: person.value.birth_adress.building,
      birth_postal: person.value.birth_adress.postal,
      birth_place_note: person.value.birth_adress.place_note,
      baptism_date: person.value.baptism_date.date,
      baptism_date_note: person.value.baptism_date.date_note,
      baptism_country: person.value.baptism_adress.country,
      baptism_region: person.value.baptism_adress.region,
      baptism_city: person.value.baptism_adress.city,
      baptism_street: person.value.baptism_adress.street,
      baptism_building: person.value.baptism_adress.building,
      baptism_postal: person.value.baptism_adress.postal,
      baptism_note_priest: person.value.baptism_adress.place_note
    },
    father: {
      first_name: father.value.info.first_name,
      last_name: father.value.info.last_name,
      patronymic: father.value.info.patronymic,
      name_note: father.value.info.name_note,
      birth_date: father.value.date.date,
      birth_date_note: father.value.date.date_note,
      birth_country: father.value.birth_adress.country,
      birth_region: father.value.birth_adress.region,
      birth_city: father.value.birth_adress.city,
      birth_street: father.value.birth_adress.street,
      birth_building: father.value.birth_adress.building,
      birth_postal: father.value.birth_adress.postal,
      birth_place_note: father.value.birth_adress.place_note,
      baptism_date: father.value.baptism_date.date,
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
      birth_date: mother.value.date.date,
      birth_date_note: mother.value.date.date_note,
      birth_country: mother.value.birth_adress.country,
      birth_region: mother.value.birth_adress.region,
      birth_city: mother.value.birth_adress.city,
      birth_street: mother.value.birth_adress.street,
      birth_building: mother.value.birth_adress.building,
      birth_postal: mother.value.birth_adress.postal,
      birth_place_note: mother.value.birth_adress.place_note,
      baptism_date: mother.value.baptism_date.date,
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
      birth_date: godFather.value.date.date,
      birth_date_note: godFather.value.date.date_note,
      birth_country: godFather.value.birth_adress.country,
      birth_region: godFather.value.birth_adress.region,
      birth_city: godFather.value.birth_adress.city,
      birth_street: godFather.value.birth_adress.street,
      birth_building: godFather.value.birth_adress.building,
      birth_postal: godFather.value.birth_adress.postal,
      birth_place_note: godFather.value.birth_adress.place_note,
      baptism_date: godFather.value.baptism_date.date,
      baptism_date_note: godFather.value.baptism_date.date_note,
      baptism_country: godFather.value.baptism_adress.country,
      baptism_region: godFather.value.baptism_adress.region,
      baptism_city: godFather.value.baptism_adress.city,
      baptism_street: godFather.value.baptism_adress.street,
      baptism_building: godFather.value.baptism_adress.building,
      baptism_postal: godFather.value.baptism_adress.postal,
      baptism_note_priest: godFather.value.baptism_adress.place_note
    },
    comments: comment.value,
    book: 1
  }
}

async function onSave() {
  const data = getData()
  if (data.main.first_name == '' || data.main.last_name == '') {
    const modal = modalStore()
    modal.activate(ModalTypes.SIX)
  }

  await createPerson(PersonType.BIRTH, data)
}

function onKeyDown(event: KeyboardEvent) {
  checkSymbolArmenian(event)
}

onMounted(() => {
  const cookies = useCookies().cookies
  if (cookies.keys().includes('person_save')) {
    const option = cookies.get('person_save') as any
    if (option.chapter == 0) {
      setData(option)
      cookies.remove('person_save')
    }
  }
})
onUnmounted(() => {
  const cookies = useCookies().cookies
  const data = getData() as any
  data['chapter'] = 0
  data['type'] = 0

  cookies.set('person_save', JSON.stringify(data))
})
</script>

<template>
  <div class="birth-date">
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

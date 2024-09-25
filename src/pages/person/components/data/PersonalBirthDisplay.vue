<script setup lang="ts">
import BirthObject from '@/pages/person/components/data/content/BirthObject.vue'
import { BaseBirthModel } from '@/pages/person/components/data/models/birthModel'
import { ref } from 'vue'
import { createPerson } from '@/api/person'
import { userStote } from '@/stores/userRole'
import { PersonType } from '@/pages/database/types/historicalTypes'

const person = ref<BaseBirthModel>(new BaseBirthModel('Имя', '', false, true))
const father = ref<BaseBirthModel>(new BaseBirthModel('Отец', 'father', true))
const mother = ref<BaseBirthModel>(new BaseBirthModel('Мать', 'mother', true))
const godFather = ref<BaseBirthModel>(new BaseBirthModel('Крестный/Поручитель', 'godfather', true))
const comment = ref<string>('')

async function onSave() {
  const user = userStote()

  const data = {
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
      baptism_date: person.value.babtism_date.date,
      baptism_date_note: person.value.babtism_date.date_note,
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
      baptism_date: father.value.babtism_date.date,
      baptism_date_note: father.value.babtism_date.date_note,
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
      baptism_date: mother.value.babtism_date.date,
      baptism_date_note: mother.value.babtism_date.date_note,
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
      baptism_date: godFather.value.babtism_date.date,
      baptism_date_note: godFather.value.babtism_date.date_note,
      baptism_country: godFather.value.baptism_adress.country,
      baptism_region: godFather.value.baptism_adress.region,
      baptism_city: godFather.value.baptism_adress.city,
      baptism_street: godFather.value.baptism_adress.street,
      baptism_building: godFather.value.baptism_adress.building,
      baptism_postal: godFather.value.baptism_adress.postal,
      baptism_note_priest: godFather.value.baptism_adress.place_note
    },
    comments: comment.value,
    book: 1,
    user: user.id
  }

  await createPerson(PersonType.BIRTH, data)
}
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
      ></textarea>
    </div>

    <div class="save-btn">
      <button id="save_btn_birth_data" class="save" @click="onSave()">Сохранить</button>
    </div>
  </div>
</template>

<style scoped></style>

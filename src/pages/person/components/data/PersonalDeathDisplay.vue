<script setup lang="ts">
import { ref } from 'vue'
import {
  AdressModel,
  BaseDateModel,
  BasePersonModel
} from '@/pages/person/components/data/models/base'
import PersonInfo from '@/pages/person/components/data/content/PersonInfo.vue'
import { createPersonDeath } from '@/api/person'
import { userStote } from '@/stores/userRole'

const person = ref<BasePersonModel>(new BasePersonModel())
const death = ref<BaseDateModel>(new BaseDateModel())
const burial = ref<BaseDateModel>(new BaseDateModel())
const adress = ref<AdressModel>(new AdressModel())
const comment = ref<string>('')

async function onSave() {
  const user = userStote()

  const data = {
    first_name: person.value.first_name,
    last_name: person.value.last_name,
    patronymic: person.value.patronymic,
    age: person.value.age,
    name_note: person.value.name_note,
    death_date: death.value.date,
    death_date_note: death.value.date_note,
    burial_date: burial.value.date,
    burial_date_note: burial.value.date_note,
    burial_country: adress.value.country,
    burial_region: adress.value.region,
    burial_city: adress.value.city,
    burial_street: adress.value.street,
    burial_place_note: adress.value.place_note,
    death_comments: comment.value,
    book: 1,
    user: user.id
  }

  await createPersonDeath(data)
}
</script>

<template>
  <div class="death">
    <PersonInfo :include-age="true" :person-item="person" />

    <div class="field-name">
      <h4>Дата смерти</h4>
    </div>

    <div class="labels">
      <label></label>
      <input id="death_date" v-model="death.date" class="input-300" type="date" />

      <label></label>
      <input
        id="death_date_note"
        v-model="death.date_note"
        class="input-300"
        type="text"
        placeholder="Примечания"
      />
    </div>

    <div class="field-name">
      <h4>Дата захоронения</h4>
    </div>

    <div class="labels">
      <label></label>
      <input id="burial_date" v-model="burial.date" class="input-300" type="date" />

      <label></label>
      <input
        id="burial_date_note"
        v-model="burial.date_note"
        class="input-300"
        type="text"
        placeholder="Примечания"
      />
    </div>

    <div class="field-name">
      <h4>Место захоронения</h4>
    </div>

    <div class="labels">
      <label></label>
      <input
        id="burial_country"
        v-model="adress.country"
        class="input-195"
        type="text"
        placeholder="Страна"
      />

      <label></label>
      <input
        id="burial_region"
        v-model="adress.region"
        class="input-195"
        type="text"
        placeholder="Регион/Область"
      />

      <label></label>
      <input
        id="burial_city"
        v-model="adress.city"
        class="input-195"
        type="text"
        placeholder="Город/Деревня"
      />
    </div>

    <div class="labels">
      <label></label>
      <input
        id="burial_street"
        v-model="adress.street"
        class="input-300"
        type="text"
        placeholder="Улица"
      />

      <label></label>
      <input
        id="burial_place_note"
        v-model="adress.place_note"
        class="input-300"
        type="text"
        placeholder="Примечания"
      />
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
        id="death_comments"
        v-model="comment"
        class="input-625"
        type="text"
        placeholder="Комментарии"
      ></textarea>
    </div>

    <div class="save-btn">
      <button id="save_btn_death_data" class="save" @click="onSave()">Сохранить</button>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { type ModelRef, onMounted, onUnmounted, ref, watch } from 'vue'
import {
  AdressModel,
  BaseDateModel,
  BasePersonModel
} from '@/pages/person/components/data/models/base'
import PersonInfo from '@/pages/person/components/data/content/PersonInfo.vue'
import {
  type ClerkPersonInfo,
  type HistoricalDeath,
  PersonType
} from '@/pages/database/types/historicalTypes'
import { modalStore, ModalTypes } from '@/stores/modalViews'
import { checkSymbolArmenian } from '@/utils/textCheck'
import { useCookies } from 'vue3-cookies'
import { personStore } from '@/stores/personalStore'

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

const personInfo = personStore()
const emit = defineEmits(['changePanel', 'onSave', 'onSaveToCookies'])
const personData = defineModel<ClerkPersonInfo>('personData') as ModelRef<HistoricalDeath>

const person = ref<BasePersonModel>(new BasePersonModel())
const death = ref<BaseDateModel>(new BaseDateModel())
const burial = ref<BaseDateModel>(new BaseDateModel())
const adress = ref<AdressModel>(new AdressModel())
const comment = ref<string>('')

function setData() {
  if (!personData.value) return
  person.value.first_name = personData.value.first_name
  person.value.last_name = personData.value.last_name
  person.value.age = personData.value.age
  person.value.patronymic = personData.value.patronymic
  person.value.name_note = personData.value.name_note

  death.value.date = personData.value.death_date
  death.value.date_note = personData.value.death_date_note

  burial.value.date = personData.value.burial_date
  burial.value.date_note = personData.value.burial_date_note

  adress.value.country = personData.value.burial_country
  adress.value.region = personData.value.burial_region
  adress.value.city = personData.value.burial_city
  adress.value.street = personData.value.burial_street
  adress.value.place_note = personData.value.burial_place_note
}
function getData() {
  return {
    first_name: person.value.first_name,
    last_name: person.value.last_name,
    patronymic: person.value.patronymic,
    age: person.value.age == '' ? null : person.value.age,
    name_note: person.value.name_note,
    death_date: death.value.date == '' ? null : death.value.date,
    death_date_note: death.value.date_note,
    burial_date: burial.value.date == '' ? null : burial.value.date,
    burial_date_note: burial.value.date_note,
    burial_country: adress.value.country,
    burial_region: adress.value.region,
    burial_city: adress.value.city,
    burial_street: adress.value.street,
    burial_place_note: adress.value.place_note,
    death_comments: comment.value
  }
}

function clear() {
  person.value = new BasePersonModel()
  death.value = new BaseDateModel()
  burial.value = new BaseDateModel()
  adress.value = new AdressModel()
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

  emit('onSave', PersonType.DEATH, props.index, data, clear)
}

function saveToCookie() {
  const data = getData()
  emit('onSaveToCookies', data, props.index)
}

function onKeyDown(event: KeyboardEvent) {
  checkSymbolArmenian(event)
}

watch(
  () => props.currentIndex,
  (n) => {
    if (n == props.index) {
      console.log('me')
    }
  }
)
watch(
  () => props.currentIndex,
  (n) => {
    if (n == props.index) {
      personInfo.firstName = person.value.first_name
      personInfo.lastName = person.value.last_name
    }
  }
)
watch(
  () => person.value.first_name,
  (n) => {
    personInfo.firstName = n
  }
)
watch(
  () => person.value.last_name,
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
  <div v-show="index == currentIndex" class="death">
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
        @keydown="onKeyDown"
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
        @keydown="onKeyDown"
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
        @keydown="onKeyDown"
      />

      <label></label>
      <input
        id="burial_region"
        v-model="adress.region"
        class="input-195"
        type="text"
        placeholder="Регион/Область"
        @keydown="onKeyDown"
      />

      <label></label>
      <input
        id="burial_city"
        v-model="adress.city"
        class="input-195"
        type="text"
        placeholder="Город/Деревня"
        @keydown="onKeyDown"
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
        @keydown="onKeyDown"
      />

      <label></label>
      <input
        id="burial_place_note"
        v-model="adress.place_note"
        class="input-300"
        type="text"
        placeholder="Примечания"
        @keydown="onKeyDown"
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
        @keydown="onKeyDown"
      ></textarea>
    </div>

    <div class="save-btn">
      <button id="save_btn_death_data" class="save" @click="onSave()">Сохранить</button>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/personal_data.css';
</style>

<script setup lang="ts">
import { ref } from 'vue'
import { BookModel } from '@/pages/person/components/book/models/bookModel'
import PersonAdress from '@/pages/person/components/data/content/PersonAdress.vue'
import PersonInfo from '@/pages/person/components/data/content/PersonInfo.vue'
import { createBook, createPersonDeath } from '@/api/person'
import { userStote } from '@/stores/userRole'

const book = ref<BookModel>(new BookModel())
const comment = ref<string>('')
let moreActive = false

function photoValid(file: File) {
  const size = 2
  const maxSize = size * 1024 * 1024
  return file.size <= maxSize
}

function imageHandler(event: Event) {
  const target = event.target as HTMLInputElement
  if (!target.files) return
  const file = target.files[0]

  if (file) {
    if (!photoValid(file)) return
    book.value.book_image = file
  }
}

function moreToggle(value: string) {
  const element = document.querySelector(`.${value}`) as HTMLElement
  if (element) {
    element.style.height = `${moreActive ? element.scrollHeight : 0}px`
    moreActive = !moreActive
  }
}

async function onSave() {
  const data = {
    archive: book.value.archive,
    fund: book.value.fund,
    description: book.value.description,
    country: book.value.adress.country,
    region: book.value.adress.region,
    city: book.value.adress.city,
    street: book.value.adress.street,
    building: book.value.adress.building,
    index: book.value.adress.postal,
    note: book.value.adress.place_note,
    book_number: book.value.book_number,
    slide_number: book.value.book_slide,
    page_number: book.value.book_page,
    book_note: book.value.book_note,
    book_photo: book.value.book_image,
    priest_first_name: book.value.priest.first_name,
    priest_last_name: book.value.priest.last_name,
    priest_patronymic: book.value.priest.patronymic,
    priest_note: book.value.priest.name_note,
    priest_birth_date: book.value.priest_birth_date.date,
    priest_birth_date_note: book.value.priest_birth_date.date_note,
    priest_birth_country: book.value.priest_birth_adress.country,
    priest_birth_region: book.value.priest_birth_adress.region,
    priest_birth_city: book.value.priest_birth_adress.city,
    priest_birth_street: book.value.priest_birth_adress.street,
    priest_birth_building: book.value.priest_birth_adress.building,
    priest_birth_postal: book.value.priest_birth_adress.postal,
    priest_birth_place_note: book.value.priest_birth_adress.place_note,
    baptism_date: book.value.priest_baptism_date.date,
    baptism_date_note: book.value.priest_baptism_date.date_note,
    baptism_country: book.value.priest_baptism_adress.country,
    baptism_region: book.value.priest_baptism_adress.region,
    baptism_city: book.value.priest_baptism_adress.city,
    baptism_street: book.value.priest_baptism_adress.street,
    baptism_building: book.value.priest_baptism_adress.building,
    baptism_postal: book.value.priest_baptism_adress.postal,
    baptism_note_priest: book.value.priest_baptism_adress.place_note,
    comments: comment.value
  }

  await createBook(data)
}
</script>

<template>
  <div class="birth-date">
    <div class="field-name">
      <h4>Архив</h4>
    </div>

    <div class="labels">
      <label></label>
      <input class="input-195" v-model="book.archive" type="text" placeholder="Название архива" />

      <label></label>
      <input class="input-195" v-model="book.fund" type="text" placeholder="Фонд" />

      <label></label>
      <input class="input-195" v-model="book.description" type="text" placeholder="Опись" />
    </div>

    <PersonAdress :no-margin="false" label="Место нахождения архива" :adress="book.adress" />

    <div class="field-name">
      <h4>Книга</h4>
    </div>

    <div class="labels">
      <label></label>
      <input
        class="input-195"
        v-model="book.book_number"
        type="text"
        placeholder="Номер книги/Дело"
      />

      <label></label>
      <input class="input-195" v-model="book.book_slide" type="text" placeholder="Номер слайда" />

      <label></label>
      <input class="input-195" v-model="book.book_page" type="text" placeholder="Номер страницы" />
    </div>

    <div class="labels-btn">
      <label></label>
      <input class="input-410" v-model="book.book_note" type="text" placeholder="Примечания" />
      <br />
      <label for="imageInput" class="custom-file-upload">Добавить фото</label>
      <input type="file" id="imageInput" accept="image/*" @change="imageHandler($event)" />
    </div>

    <br />
    <hr />
    <br />

    <PersonInfo lable="Священник" :include-age="false" :person-item="book.priest" />

    <span :class="[bookName, 'more']">
      <div class="field-name no-margin">
        <h4>Дата рождения</h4>
      </div>

      <div class="labels">
        <label></label>
        <input
          class="input-300"
          v-model="book.priest_birth_date.date"
          type="date"
          id="dateInput"
          placeholder=""
        />

        <label></label>
        <input
          class="input-300"
          v-model="book.priest_birth_date.date_note"
          type="text"
          placeholder="Примечания"
        />
      </div>

      <PersonAdress label="Место рождения" :adress="book.priest_birth_adress" />

      <div class="field-name no-margin">
        <h4>Крещение</h4>
      </div>

      <div class="labels">
        <label></label>
        <input
          class="input-300"
          v-model="book.priest_baptism_date.date"
          type="date"
          placeholder=""
        />

        <label></label>
        <input
          class="input-300"
          v-model="book.priest_baptism_date.date_note"
          type="text"
          placeholder="Примечания"
        />
      </div>

      <PersonAdress label="Место крещения" :adress="book.priest_baptism_adress" />
    </span>

    <div class="add-data">
      <button id="myBtnDataEight" @click="moreToggle(bookName)">Добавить данные</button>
    </div>

    <br />
    <hr />
    <br />

    <div class="field-name">
      <h4>Комментарии</h4>
    </div>

    <div class="labels">
      <label></label>
      <input class="input-625" v-model="comment" type="text" placeholder="Комментарии" />
    </div>

    <div class="save-btn">
      <button class="save" @click="onSave">Сохранить</button>
    </div>
  </div>
</template>

<style scoped></style>

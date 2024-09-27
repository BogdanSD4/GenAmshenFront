<script setup lang="ts">
import type { UserData } from '@/pages/users/components/userControl/types/userData'
import { computed, ref } from 'vue'
import { getImg } from '@/utils/imageManager'
import { modalStore, ModalTypes } from '@/stores/modalViews'

const userForm = defineModel<UserData>('userData', { required: true })
const imagePath = defineModel<string>('userImage')

const imgSource = computed(() => {
  return imagePath.value ?? getImg('user-login')
})

function addPhoto() {
  const input = document.querySelector('#file-clerk') as HTMLElement
  input.click()
}

function photoValid(file: File) {
  const size = 2
  const maxSize = size * 1024 * 1024
  return file.size <= maxSize
}

function photoHandler(event: Event) {
  const target = event.target as HTMLInputElement
  if (!target.files) return
  const file = target.files[0]

  if (file) {
    if (!photoValid(file)) {
      const modal = modalStore()
      modal.activate(ModalTypes.SEVEN)
      return
    }
    userForm.value.photo = file

    const reader = new FileReader()

    reader.onload = (loadEvent) => {
      imagePath.value = loadEvent.target?.result as string
    }

    reader.readAsDataURL(file)
  }
}
</script>

<template>
  <div class="field-name">
    <h4>Имя</h4>
  </div>

  <div class="labels">
    <label></label>
    <input
      id="clerk_first_name"
      v-model="userForm.first_name"
      class="input-195"
      type="text"
      placeholder="Имя"
      required
    />

    <label></label>
    <input
      id="clerk_last_name"
      v-model="userForm.last_name"
      class="input-195"
      type="text"
      placeholder="Фамилия"
      required
    />

    <label></label>
    <input
      id="clerk_patronymic"
      v-model="userForm.patronymic"
      class="input-195"
      type="text"
      placeholder="Отчество"
    />
  </div>

  <div class="labels align-right">
    <label></label>
    <input
      id="clerk_name_note"
      v-model="userForm.names_note"
      class="input-410"
      type="text"
      placeholder="Примечания"
    />
  </div>

  <div class="field-name">
    <h4>Дата рождения</h4>
  </div>

  <div class="labels">
    <label></label>
    <input id="clerk_birth_date" v-model="userForm.birth_date" class="input-300" type="date" />

    <label></label>
    <input
      id="clerk_birth_date_note"
      v-model="userForm.birthday_note"
      class="input-300"
      type="text"
      placeholder="Примечания"
    />
  </div>

  <div class="field-name">
    <h4>Адрес</h4>
  </div>

  <div class="labels">
    <label></label>
    <input
      id="clerk_country"
      v-model="userForm.country"
      class="input-195"
      type="text"
      placeholder="Страна"
    />

    <label></label>
    <input
      id="clerk_region"
      v-model="userForm.region"
      class="input-195"
      type="text"
      placeholder="Регион/Область"
    />

    <label></label>
    <input
      id="clerk_city"
      v-model="userForm.city"
      class="input-195"
      type="text"
      placeholder="Город/Деревня"
    />
  </div>

  <div class="labels">
    <label></label>
    <input
      id="clerk_street"
      v-model="userForm.street"
      class="input-410"
      type="text"
      placeholder="Улица"
    />

    <label></label>
    <input
      id="clerk_building"
      v-model="userForm.building"
      class="input-195"
      type="text"
      placeholder="№ здания"
    />
  </div>

  <div class="labels">
    <label></label>
    <input
      id="clerk_postal"
      v-model="userForm.postal"
      class="input-195"
      type="text"
      placeholder="Индекс"
    />

    <label></label>
    <input
      id="clerk_place_note"
      v-model="userForm.address_note"
      class="input-410"
      type="text"
      placeholder="Примечания"
    />
  </div>

  <div class="labels-btn">
    <div class="img-area-clerk">
      <img id="clerk-photo" class="user-size" :src="imgSource" alt="" />
    </div>
    <br />
    <label for="file-clerk">
      <button id="select-image" class="btn-195" @click="addPhoto">Добавить фото</button>
    </label>
    <input type="file" id="file-clerk" accept="image/*" @change="photoHandler($event)" />
  </div>

  <div class="field-name">
    <h4>Данные для входа</h4>
  </div>

  <div class="labels">
    <label></label>
    <input
      v-model="userForm.username"
      id="clerk_user_name"
      class="input-195"
      type="text"
      placeholder="Имя пользователя"
      required
    />

    <label></label>
    <input
      v-model="userForm.email"
      id="clerk_email"
      class="input-195"
      type="email"
      placeholder="Электронная почта"
      required
    />

    <label></label>
    <input
      id="clerk_password"
      v-model="userForm.password"
      class="input-195"
      type="text"
      placeholder="Пароль"
      required
    />
  </div>

  <p id="email-error">Пожалуйста, введите правильный формат электронной почты.</p>

  <div class="field-name">
    <h4>Комментарии</h4>
  </div>

  <div class="labels">
    <label></label>
    <textarea
      v-model="userForm.comments"
      id="clerk_comments"
      class="input-625"
      type="text"
      placeholder="Комментарии"
    ></textarea>
  </div>
</template>

<style scoped>
@import '@/assets/styles/user.css';
</style>

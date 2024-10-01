<script setup lang="ts">
import { getImg } from '@/utils/imageManager'
import { ref } from 'vue'
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import { login } from '@/api/authorize'
import router from '@/router'
import { userStore } from '@/stores/userRole'
import { useCookies } from 'vue3-cookies'
import type { Login } from '@/api/types/request'

document.title = 'ГенАмшен - Войти'

interface LoginField {
  text: string
  error: string
}
const name = ref<LoginField>({ text: '', error: '' })
const email = ref<LoginField>({ text: '', error: '' })
const password = ref<LoginField>({ text: '', error: '' })
const visible = ref<boolean>(false)

async function handleSignInSubmit() {
  if (!validation()) return

  const cookies = useCookies().cookies
  const creditals: Login = {
    username: name.value.text,
    email: email.value.text,
    password: password.value.text
  }
  cookies.remove('gen_token')
  cookies.remove('person_save')

  await login(creditals).then(async (response) => {
    const user = userStore()

    cookies.set('gen_token', response.token)

    user.setRole(response.groups)
    user.username = response.username
    user.email = response.email

    await router.push(`/${user.role}`)
  })
}

function validation() {
  const email_check = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/

  if (name.value.text === '') {
    name.value.error = 'Введите имя пользователя'
    return false
  }

  if (!email_check.test(email.value.text)) {
    email.value.error = 'Введите электронную почту'
    return false
  }

  if (password.value.text === '') {
    password.value.error = 'Введите пароль'
    return false
  }

  return true
}

async function onCancel() {
  await router.push('/welcome')
}
function onInput(field: LoginField) {
  field.error = ''
}
</script>

<template>
  <MainHeader />
  <div>
    <section id="form">
      <div class="form">
        <div>
          <h3>Войти в ГенАмшен</h3>
        </div>

        <form id="my-form" name="form" @submit.prevent>
          <div>
            <label for="uname"></label>
            <input
              v-model="name.text"
              type="text"
              name="uname"
              id="uname"
              placeholder="Имя пользователя"
              @mousedown="onInput(name)"
            />
            <div id="error">{{ name.error }}</div>
          </div>
          <br />
          <div>
            <label for="email"></label>
            <input
              v-model="email.text"
              type="email"
              name="email"
              id="email-address"
              placeholder="Электронная почта"
              @mousedown="onInput(email)"
            />
            <div id="error">{{ email.error }}</div>
          </div>
          <br />
          <div class="input">
            <label for="pswd"></label>
            <input
              v-model="password.text"
              :type="visible ? 'text' : 'password'"
              name="pswd"
              id="password"
              placeholder="Пароль"
              @mousedown="onInput(password)"
            />
            <img
              id="toggle-password"
              class="eye-closed"
              :src="getImg(visible ? 'eye-open' : 'eye-closed')"
              alt="Image"
              @mousedown="visible = !visible"
            />
            <div id="error">{{ password.error }}</div>
          </div>
          <br />
          <div class="cancel-signin">
            <button type="button" class="cancelbtn" @click="onCancel()">Отмена</button>
            <button type="submit" class="signinbtn center" @click="handleSignInSubmit">
              Войти
            </button>
          </div>
        </form>
      </div>

      <div class="error-message">
        <p id="message"></p>
      </div>
    </section>
  </div>

  <MainFooter />
</template>

<style scoped>
@import '@/assets/styles/signin.css';
</style>

<script setup lang="ts">
import { getImg } from '@/utils/imageManager'
import { onBeforeMount, onUnmounted, ref } from 'vue'
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import { login } from '@/api/authorize'
import router from '@/router'
import { UserRole } from '@/types/userRole'
import { userStore } from '@/stores/userRole'
import { useCookies } from 'vue3-cookies'
import type { Login } from '@/api/types/request'
import { addStyle, deleteStyle } from '@/utils/styleManager'

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

  const creditals: Login = {
    username: name.value.text,
    email: email.value.text,
    password: password.value.text
  }
  await login(creditals).then(async (response) => {
    const user = userStore()

    const cookies = useCookies().cookies
    cookies.set('gen_token', response.token)

    user.setRole(response.role)
    user.username = response.username
    user.email = response.email

    await router.push(`/${user.role}`).catch((error) => console.log(error))
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

function onInput(field: LoginField) {
  field.error = ''
}

onBeforeMount(() => {
  addStyle('signin.css')
})
onUnmounted(() => {
  deleteStyle('signin.css')
})
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
            <button type="button" class="cancelbtn"><a class="center" href="#">Отмена</a></button>
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

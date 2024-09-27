<script setup lang="ts">
import { userStore } from '@/stores/userRole'
import { useCookies } from 'vue3-cookies'
import router from '@/router'
import { modalStore, ModalTypes } from '@/stores/modalViews'

const user = userStore()

async function onContinue() {
  const cookies = useCookies().cookies
  const data = cookies.get('person_save')
  if (data) {
    await router.push(`/${user.role}/person`)
  } else {
    const modal = modalStore()
    modal.activate(ModalTypes.SECOND)
  }
}
</script>

<template>
  <div class="grid-container">
    <div class="col-1">
      <h6>Профиль</h6>
      <br />
      <br />
      <RouterLink :to="`/${user.role}/person`">
        <button id="btn-create-profile" class="yellow-btn">Создать профиль</button>
      </RouterLink>
      <button id="btn-continue-filling" class="yellow-btn" @click="onContinue()">
        Продолжить заполнение
      </button>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/user.css';
</style>

<script setup lang="ts">
import { getImg } from '@/utils/imageManager'
import { RouterLink, useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'
import router from '@/router'
import { userStore } from '@/stores/userRole'
import { UserRole } from '@/types/userRole'
import { headerStore } from '@/stores/header'

const isMain = defineModel('isMain', { default: false })
const user = userStore()
const header = headerStore()

const isAuth = computed(() => {
  return user.role != UserRole.GUEST
})

function onHamburgerMouseDown() {
  header.hamburger = !header.hamburger
}

async function goToWelcomePage(id: string) {
  await router.replace({ name: 'welcomeTo', params: { id: id } })
}

async function logout() {
  await user.logout()
}
</script>

<template>
  <header>
    <nav id="navbar">
      <div class="nav-back">
        <div v-if="!isMain" class="logo">
          <RouterLink to="/welcome">
            <img class="logo-size" :src="getImg('logo')" alt="Logo" />
          </RouterLink>
        </div>

        <div class="navbar-right">
          <RouterLink class="mobile-none" to="/welcome">
            <img class="size-home" :src="getImg('home')" alt="Image" />
          </RouterLink>
          <a class="mobile-none" href="mailto:genamshen@mail.com"
            ><img class="size" :src="getImg('email')" alt="Image"
          /></a>

          <div
            :class="['hamburger', { active: header.hamburger }]"
            @mousedown="onHamburgerMouseDown"
          >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
      </div>

      <ul :class="['nav-menu', { active: header.hamburger }]">
        <li class="nav-item">
          <a class="nav-link" @click="goToWelcomePage('about')">О проекте</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToWelcomePage('books')">Метрические книги</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToWelcomePage('maps')">Карта миграции</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToWelcomePage('team')">Команда</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goToWelcomePage('support')">Поддержать проект</a>
        </li>
        <li v-if="isAuth" class="nav-item">
          <a class="nav-link" @click="logout()">Выйти</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@import '@/assets/styles/user.css';
</style>

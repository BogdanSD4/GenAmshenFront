<script setup lang="ts">
import { getImg } from '@/utils/imageManager'
import router from '@/router'

defineProps({
  enableLoginLink: {
    type: Boolean,
    default: false
  }
})

async function goToWelcomePage(id: string) {
  await router.push({ name: 'welcomeTo', params: { id: id } })
}
</script>

<template>
  <link rel="canonical" href="https://www.genamshen.com/" />
  <div>
    <div class="container">
      <div class="hide-link">
        <a @click="goToWelcomePage('about')"><p class="footer-link">О проекте</p></a>
        <a @click="goToWelcomePage('books')"><p class="footer-link">Метрические книги</p></a>
        <a @click="goToWelcomePage('maps')"><p class="footer-link">Карта миграции</p></a>
        <a @click="goToWelcomePage('team')"><p class="footer-link">Команда</p></a>
        <a @click="goToWelcomePage('support')"><p class="footer-link">Поддержать проект</p></a>
      </div>

      <div id="social-media">
        <a target="_blank" href="https://vk.com/gen.amshen"
          ><img class="social-media" :src="getImg('vk')" alt="Vkontakte"
        /></a>
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61557531427489&mibextid=ZbWKwL"
          ><img class="social-media" :src="getImg('facebook')" alt="Facebook"
        /></a>
        <a target="_blank" href="https://www.instagram.com/genamshen?igsh=MW53MHUxaGc5MjNpdA=="
          ><img class="social-media" :src="getImg('instagram')" alt="Instagram"
        /></a>
      </div>
    </div>

    <div class="design">
      <RouterLink v-if="enableLoginLink" to="/login" class="footer-login-link">
        <img class="login" :src="getImg('login')" alt="Sign in" />
      </RouterLink>
      <a class="color-blue" target="_blank" href="https://volha.ca"
        >Сайт разработан компанией VOLHA Web Design</a
      >
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/user.css';

.footer-login-link {
  display: flex;
  align-items: center;
  margin-right: 5px;
}
</style>

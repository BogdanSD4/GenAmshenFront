<script setup lang="ts">
import { getImg } from '../../utils/imageManager'
import { RouterLink } from "vue-router"
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')

function handleSignInSubmit(event: Event) {

}
</script>

<template>
  <header>
    <nav id="navbar">

      <div class="nav-back">
        <div class="logo">
          <RouterLink to="/login">
            <img class="logo-size" :src="getImg('logo')" alt="Logo">
          </RouterLink>
        </div>

        <div class="navbar-right">
          <a class="mobile-none" href="#"><img class="size-home" :src="getImg('home')" alt="Image"></a>
          <a class="mobile-none" href="mailto:genamshen@mail.com"><img class="size" :src="getImg('email')" alt="Image"></a>
        </div>
      </div>
    </nav>
  </header>

  <div>
    <section id="form">
      <div class="form">
        <div>
          <h3>Войти в ГенАмшен</h3>
        </div>

        <form id="my-form" name="form">
          <div>
            <label for="uname"></label>
            <input v-model="name" type="text" name="uname" id="uname" placeholder="Имя пользователя">
            <div id="error"></div>
          </div>
          <br>
          <div>
            <label for="email"></label>
            <input v-model="email" type="email" name="email" id="email-address" placeholder="Электронная почта">
            <div id="error-email"></div>
          </div>
          <br>
          <div class="input">
            <label for="pswd"></label>
            <input v-model="password" type="password" name="pswd" id="password" placeholder="Пароль">
            <img id="toggle-password" class="eye-closed" :src="getImg('eye-closed')" alt="Image">
            <div id="error-pswd"></div>
          </div>
          <br>
          <div class="cancel-signin">
            <button type="button" class="cancelbtn"><a class="center" href="/">Отмена</a></button>
            <button type="submit" class="signinbtn center" @click="handleSignInSubmit">Войти</button>
          </div>
        </form>
      </div>

      <div class="error-message">
        <p id="message"></p>
      </div>
    </section>
  </div>

  <div>
    <div class="container">
      <div class="hide-link">
        <a href="#"><p class="footer-link">О проекте</p></a>
        <a href="#"><p class="footer-link">Метрические книги</p></a>
        <a href="#"><p class="footer-link">Карта миграции</p></a>
        <a href="#"><p class="footer-link">Команда</p></a>
        <a href="#"><p class="footer-link">Поддержать проект</p></a>
      </div>

      <div id="social-media">
        <a target="_blank" href="https://vk.com/gen.amshen"><img class="social-media" src="{% static 'images/vk.png' %}" alt="Vkontakte"></a>
        <a target="_blank" href="https://www.facebook.com/profile.php?id=61557531427489&mibextid=ZbWKwL"><img class="social-media" src="{% static 'images/facebook.png' %}" alt="Facebook"></a>
        <a target="_blank" href="https://www.instagram.com/genamshen?igsh=MW53MHUxaGc5MjNpdA=="><img class="social-media" src="{% static 'images/instagram.png' %}" alt="Instagram"></a>
      </div>
    </div>

    <div class="design">
      <a class="color-blue" target="_blank" href="https://volha.ca">Сайт разработан компанией VOLHA Web Design</a>
    </div>
  </div>
</template>

<style scoped>
@import "signin.css";
</style>
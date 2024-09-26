<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import PersonalDataPanel from '@/pages/person/components/PersonalDataPanel.vue'
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue'
import BooksPanel from '@/pages/person/components/BooksPanel.vue'
import { getImg } from '@/utils/imageManager'
import UserInfo from '@/components/UserInfo.vue'
import { addStyle, deleteStyle } from '@/utils/styleManager'
import '@/assets/styles/user.css'
import '@/assets/styles/personal_data.css'

const menuIndex = ref<number>(0)

function changeMenu(index: number) {
  menuIndex.value = index
}
</script>

<template>
  <MainHeader />

  <main>
    <section>
      <UserInfo />

      <div class="bottom">
        <button id="personal-btn" :class="{ 'active-btn': menuIndex == 0 }" @click="changeMenu(0)">
          Личные данные
        </button>
        <button id="books-btn" :class="{ 'active-btn': menuIndex == 1 }" @click="changeMenu(1)">
          Книги
        </button>
      </div>
      <br />
    </section>

    <div class="back">
      <PersonalDataPanel v-show="menuIndex == 0" />
      <BooksPanel v-show="menuIndex == 1" />
    </div>

    <!--Modals-->
    <div id="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p class="modal-text">
          Вы вышли из личного кабинета и будете перенаправлены на страницу "Войти в ГенАмшен"
        </p>
      </div>
    </div>

    <div id="modal-img">
      <div class="modal-content">
        <span class="closeImg">&times;</span>
        <br />
        <p id="modal-text" class="modal-text"></p>
      </div>
    </div>

    <div id="modal-required-fields">
      <div class="modal-content">
        <span class="close-required-fields">&times;</span>
        <p class="modal-text-required"></p>
      </div>
    </div>

    <div id="modal-check-language">
      <div class="modal-content">
        <span class="close-check-language">&times;</span>
        <p class="modal-text-check-language"></p>
      </div>
    </div>

    <div id="modal-person-exist">
      <div class="modal-content">
        <span class="close-person-exist">&times;</span>
        <p class="modal-text-person-exist">
          Человек с такими именем и фамилией уже существует в базе данных. Пожалуйста, обратитесь к
          модератору.
        </p>
      </div>
    </div>
  </main>

  <MainFooter />
</template>

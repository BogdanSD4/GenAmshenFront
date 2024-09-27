<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import PersonalDataPanel from '@/pages/person/components/PersonalDataPanel.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import BooksPanel from '@/pages/person/components/BooksPanel.vue'
import { getImg } from '@/utils/imageManager'
import UserInfo from '@/components/UserInfo.vue'
import { useCookies } from 'vue3-cookies'

const menuIndex = ref<number>(0)
const saveIndex = ref<number>(-1)

function changeMenu(index: number) {
  menuIndex.value = index
}

onMounted(() => {
  const cookies = useCookies().cookies
  const data = cookies.get('person_save') as any
  if (data) {
    menuIndex.value = data.type
    saveIndex.value = data.chapter
  }
})
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
      <PersonalDataPanel v-if="menuIndex == 0" :menu="saveIndex" />
      <BooksPanel v-if="menuIndex == 1" :menu="saveIndex" />
    </div>

    <div id="modal-person-exist"></div>
  </main>

  <MainFooter />
</template>

<style scoped>
@import '@/assets/styles/personal_data.css';
</style>

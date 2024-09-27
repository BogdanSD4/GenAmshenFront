<script setup lang="ts">
import { ref } from 'vue'
import BookFormDisplay from '@/pages/person/components/book/BookFormDisplay.vue'

const menuIndex = defineModel<number>('menu', { default: -1 })

function changeMenu(index: number) {
  menuIndex.value = index
}
</script>

<template>
  <div class="grid-container">
    <div class="col-1">
      <h6>Метрические книги</h6>
      <br />
      <br />
      <button
        id="btn-birth-books"
        :class="[{ 'active-btn': menuIndex == 0 }, 'yellow-btn']"
        @click="changeMenu(0)"
      >
        Рождение
      </button>
      <button
        id="btn-marriage-books"
        :class="[{ 'active-btn': menuIndex == 1 }, 'yellow-btn']"
        @click="changeMenu(1)"
      >
        Браки
      </button>
      <button
        id="btn-death-books"
        :class="[{ 'active-btn': menuIndex == 2 }, 'yellow-btn']"
        @click="changeMenu(2)"
      >
        Смерти
      </button>
    </div>

    <div id="infoDisplayBooks">
      <BookFormDisplay book-name="book-birth" v-show="menuIndex == 0" />
      <BookFormDisplay book-name="book-marriage" v-show="menuIndex == 1" />
      <BookFormDisplay book-name="book-death" v-show="menuIndex == 2" />
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/personal_data.css';
</style>

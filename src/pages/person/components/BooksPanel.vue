<script setup lang="ts">
import { ref } from 'vue'
import BookFormDisplay from '@/pages/person/components/book/BookFormDisplay.vue'
import { BookModel } from '@/pages/person/components/book/models/bookModel'

const menuIndex = defineModel<number>('menu', { default: -1 })
const books = ['book-birth', 'book-marriage', 'book-death']
const bookItem = ref<BookModel>(new BookModel())

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
        :class="[{ 'active-btn': menuIndex == 1 }, 'yellow-btn']"
        @click="changeMenu(1)"
      >
        Рождение
      </button>
      <button
        id="btn-marriage-books"
        :class="[{ 'active-btn': menuIndex == 2 }, 'yellow-btn']"
        @click="changeMenu(2)"
      >
        Браки
      </button>
      <button
        id="btn-death-books"
        :class="[{ 'active-btn': menuIndex == 3 }, 'yellow-btn']"
        @click="changeMenu(3)"
      >
        Смерти
      </button>
    </div>

    <div id="infoDisplayBooks">
      <BookFormDisplay
        v-for="(book, index) in books"
        :key="index"
        :book="bookItem"
        :book-name="book"
        :index="index + 1"
        :current-index="menuIndex"
      />
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/personal_data.css';
</style>

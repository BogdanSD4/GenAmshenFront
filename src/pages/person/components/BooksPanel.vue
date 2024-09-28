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
      <BookFormDisplay book-name="book-birth" :index="1" :current-index="menuIndex" />
      <BookFormDisplay book-name="book-marriage" :index="2" :current-index="menuIndex" />
      <BookFormDisplay book-name="book-death" :index="3" :current-index="menuIndex" />
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/personal_data.css';
</style>

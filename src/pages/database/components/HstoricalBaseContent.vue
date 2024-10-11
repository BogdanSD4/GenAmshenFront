<script setup lang="ts">
import { computed, type PropType, ref } from 'vue'
import type { PersonType } from '@/pages/database/types/historicalTypes'
import { userUpdate } from '@/api/users'

defineProps({
  label: {
    type: String,
    required: true
  },
  bookPhoto: {
    type: String,
    default: ''
  }
})
const expandContent = ref<boolean>(false)
const expandImage = ref<boolean>(false)

const expandBtnText = computed(() => {
  return expandContent.value ? 'Свернуть' : 'Развернуть'
})
const expandBtnBook = computed(() => {
  return expandImage.value ? 'Закрыть книгу' : 'Открыть книгу'
})

function onBookToggle(event: Event) {
  expandImage.value = !expandImage.value
}

function onMouseDown(event: Event) {
  const target = document.querySelector('#person-image') as HTMLElement
  target.style.pointerEvents = 'none'
  setTimeout(() => {
    target.style.pointerEvents = 'auto'
  }, 100)
}
function onMouseEnter(event: Event) {
  const target = event.target as HTMLElement

  target.style.opacity = '0.3'
}
function onMouseOut(event: Event) {
  const target = event.target as HTMLElement

  target.style.opacity = '1'
}
</script>

<template>
  <div class="container-back">
    <div class="container-historical-info">
      <div
        v-if="bookPhoto"
        id="person-image"
        class="image-container"
        :style="{ display: expandImage ? 'block' : 'none' }"
      >
        <img
          class="image book-image"
          :src="bookPhoto"
          alt="Image"
          @mousedown="onMouseDown"
          @mouseenter="onMouseEnter"
          @mouseout="onMouseOut"
        />
      </div>

      <br />

      <div class="book-part-name">
        <button id="open-birth" class="btn-open-book" @mouseup="onBookToggle">
          {{ expandBtnBook }}
        </button>
        <p class="part-name">{{ label }}</p>
        <button id="showBtnBirth" @mouseup="expandContent = !expandContent">
          {{ expandBtnText }}
        </button>
      </div>

      <br />

      <div id="content-birth" :style="{ display: expandContent ? 'block' : 'none' }">
        <div class="columns">
          <p class="name-back">Название</p>
          <p class="name-back">Армянский</p>
          <p class="name-back">Русский</p>
          <p class="name-back">Английский</p>
          <p class="edit-save-back">Редактировать/Сохранить</p>
        </div>

        <br />

        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/historical_person.css';

.book-image {
  opacity: 1;
  transition: opacity 0.3s;
}
</style>

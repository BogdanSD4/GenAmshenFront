<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  label: {
    type: String,
    required: true
  }
})
const expandContent = ref<boolean>(false)
const expandImage = ref<boolean>(false)
</script>

<template>
  <div class="container-back">
    <div class="container-historical-info">
      <div class="image-container" :style="{ display: expandImage ? 'block' : 'none' }">
        <img id="birth-image" class="image" src="" alt="Image" />
      </div>

      <br />

      <div class="book-part-name">
        <button id="open-birth" class="btn-open-book" @click="expandImage = !expandImage">
          Открыть книгу
        </button>
        <p class="part-name">{{ label }}</p>
        <button id="showBtnBirth" @click="expandContent = !expandContent">Развернуть</button>
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
        <div class="btn-verified">
          <button onclick="btnClickVerified('btn-birth-verified')" id="btn-birth-verified">
            Проверено
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

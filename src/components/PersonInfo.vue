<script setup lang="ts">
import { getImg } from '@/utils/imageManager'
import { userStore } from '@/stores/userRole'
import { computed } from 'vue'
import { changeBackPhoto, changePhoto } from '@/api/users'
import { modalStore, ModalTypes } from '@/stores/modalViews'
import { personStore } from '@/stores/personalStore'

const person = personStore()

const imgFrontSource = computed(() => {
  return person.photo == '' ? getImg('user-login') : person.photo
})
const imgBackSource = computed(() => {
  return person.background_photo == '' ? '' : person.background_photo
})

async function changeImage(event: Event) {
  const target = event.target as HTMLInputElement
  if (!target.files) return
  const file = target.files[0]

  if (file) {
    if (!photoValid(file)) {
      const modal = modalStore()
      modal.activate(ModalTypes.SEVEN)
      return
    }

    const reader = new FileReader()
    reader.onload = (loadEvent) => {
      person.photo = loadEvent.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

function photoValid(file: File) {
  const size = 2
  const maxSize = size * 1024 * 1024
  return file.size <= maxSize
}
</script>

<template>
  <div class="container-top">
    <div class="banner-back">
      <div class="image-back image-back-container">
        <img v-if="imgBackSource" class="back-photo" :src="imgBackSource" alt="Image" />
      </div>
    </div>

    <div class="personal-photo">
      <div class="img-area">
        <img class="photo-upload" :src="imgFrontSource" alt="" />
      </div>
      <div class="change-photo">
        <label for="file-front" class="select-image">
          <img class="change-photo-icon" :src="getImg('change-photo')" alt="Image" />
          <input
            type="file"
            id="file-front"
            accept="image/*"
            hidden
            @change="changeImage($event)"
          />
        </label>
      </div>
      <div class="name-personal">
        <h2 id="output1">{{ person.firstName }} {{ person.lastName }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/user.css';

.image-back-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>

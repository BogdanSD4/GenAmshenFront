<script setup lang="ts">
import { getImg } from '@/utils/imageManager'
import { userStore } from '@/stores/userRole'
import { computed } from 'vue'
import { changeBackPhoto, changePhoto } from '@/api/users'
import { modalStore, ModalTypes } from '@/stores/modalViews'

defineProps({
  roleName: {
    type: String
  }
})
const user = userStore()

const name = computed(() => {
  if (user.personFirstName || user.personLastName)
    return `${user.personFirstName} ${user.personLastName}`
  return `${user.first_name} ${user.last_name}`
})
const imgFrontSource = computed(() => {
  console.log()
  return user.photo ?? getImg('user-login')
})
const imgBackSource = computed(() => {
  return user.background_photo ?? ''
})

async function changeImage(event: Event, type: 'front' | 'back') {
  const target = event.target as HTMLInputElement
  if (!target.files) return
  const file = target.files[0]

  if (file) {
    if (!photoValid(file)) {
      const modal = modalStore()
      modal.activate(ModalTypes.SEVEN)
      return
    }

    if (type == 'front') {
      await changePhoto(file).then(async () => {
        await user.valid()
      })
    } else if (type == 'back') {
      await changeBackPhoto(file).then(async () => {
        await user.valid()
      })
    }
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
      <label class="change-photo-back" for="file-back">
        <img class="change-photo-icon" :src="getImg('change-photo')" alt="Image" />
      </label>
      <input
        type="file"
        id="file-back"
        accept="image/*"
        hidden
        @change="changeImage($event, 'back')"
      />
    </div>

    <div class="personal-photo">
      <input type="file" id="file" accept="image/*" hidden />
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
            @change="changeImage($event, 'front')"
          />
        </label>
      </div>
      <div class="name-personal">
        <h2 id="output1">{{ name }}</h2>
      </div>
      <div>
        <h2 class="role">{{ roleName }}</h2>
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

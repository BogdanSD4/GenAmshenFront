<script setup lang="ts">
import { getImg } from '@/utils/imageManager'
import { userStote } from '@/stores/userRole'
import { computed, onMounted, ref } from 'vue'
import { UserRole } from '@/types/userRole'
import { changePhoto } from '@/api/users'

defineProps({
  roleName: {
    type: String
  }
})
const user = userStote()

const name = computed(() => {
  return `${user.first_name} ${user.last_name}`
})
const imgSource = computed(() => {
  console.log()
  return user.photo ?? getImg('user-login')
})

async function changeImage(event: Event) {
  const target = event.target as HTMLInputElement
  if (!target.files) return
  const file = target.files[0]

  if (file) {
    if (!photoValid(file)) return
    await changePhoto(file).then(async () => {
      await user.valid()
    })
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
      <div class="image-back"></div>
      <label class="change-photo-back" for="file-back">
        <img class="change-photo-icon" :src="getImg('change-photo')" alt="Image" />
      </label>
      <input type="file" id="file-back" accept="image/*" hidden />
    </div>

    <div class="personal-photo">
      <input type="file" id="file" accept="image/*" hidden />
      <div class="img-area">
        <img class="photo-upload" :src="imgSource" alt="" />
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
        <h2 id="output1">{{ name }}</h2>
      </div>
      <div>
        <h2 class="role">{{ roleName }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

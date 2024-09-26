<script setup lang="ts">
import { userStore } from '@/stores/userRole'
import { UserRole } from '@/types/userRole'
import router from '@/router'

const user = userStore()
const emit = defineEmits(['changePanel'])

function changeIndex(index: number) {
  emit('changePanel', index)
}

async function toDatabase() {
  await router.push('/admin/')
}

const host = import.meta.env.VITE_API_URL
const adminLink = `${host}administrator`
</script>

<template>
  <div class="grid-container">
    <div class="col-1">
      <h6>База данных</h6>
      <br />
      <br />
      <a :href="adminLink"
        ><button
          id="btn-go-to-database"
          v-if="user.access(UserRole.ADMIN)"
          class="yellow-btn"
          @click="toDatabase"
        >
          Перейти в базу данных
        </button></a
      >
      <a href="#"
        ><button
          id="btn-pending-requests"
          v-if="user.access(UserRole.MODER)"
          class="yellow-btn"
          @click="changeIndex(4)"
        >
          Запросы в обработке
        </button></a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { userStote } from '@/stores/userRole'
import { UserRole } from '@/types/userRole'

const user = userStote()
const emit = defineEmits(['changePanel'])

function changeIndex(index: number) {
  emit('changePanel', index)
}
</script>

<template>
  <div class="grid-container">
    <div class="col-1">
      <h6>База данных</h6>
      <br />
      <br />
      <a href="#"
        ><button
          id="btn-go-to-database"
          v-if="user.access(UserRole.ADMIN)"
          class="yellow-btn"
          @click="changeIndex(3)"
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

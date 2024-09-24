<script setup lang="ts">
import { userStote } from '@/stores/userRole'

const user = userStote()
</script>

<template>
  <div class="grid-container">
    <div class="col-1">
      <h6>Профиль</h6>
      <br />
      <br />
      <RouterLink :to="`/${user.role}/person`">
        <button id="btn-create-profile" class="yellow-btn">Создать профиль</button>
      </RouterLink>
      <a href="#"
        ><button id="btn-continue-filling" class="yellow-btn">Продолжить заполнение</button></a
      >
    </div>
  </div>
</template>

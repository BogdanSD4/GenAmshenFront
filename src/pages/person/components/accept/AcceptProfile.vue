<script setup lang="ts">
defineProps({
  index: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  firstName: String,
  lastName: String
})

const emit = defineEmits(['changePanel'])

function onEdit() {
  emit('changePanel')
}
</script>

<template>
  <div class="confirm-hist-person">
    <div class="main-profile">
      <p>{{ index == 0 ? 'Основной профиль' : 'Дополнительный профиль' }}</p>
      <p>{{ role }}</p>
    </div>
    <div class="first-name-last-name">
      <input
        class="input-195"
        type="text"
        :value="firstName ?? 'Անհայտ/Неизвестно'"
        placeholder="Имя"
        disabled
      /><input
        class="input-195"
        type="text"
        :value="lastName || 'Աнհայտ/Неизвестно'"
        placeholder="Фамилия"
        disabled
      />
    </div>
    <div class="buttons-edit-save">
      <button id="" class="btn-edit" @click="onEdit()">Редактировать</button>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/data_clerk_accept.css';
</style>

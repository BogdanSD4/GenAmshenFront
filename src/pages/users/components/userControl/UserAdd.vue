<script setup lang="ts">
import { getImg } from '@/utils/imageManager.js'
import { computed, type PropType, ref } from 'vue'
import { type UserData, UserType } from '@/pages/users/components/userControl/types/userData'
import { userAdd } from '@/api/users'
import BaseUserForm from '@/pages/users/components/userControl/elements/BaseUserForm.vue'

const emit = defineEmits(['changeIndex', 'editUser'])

const props = defineProps({
  user: {
    type: Number as PropType<UserType>,
    required: true
  }
})

const userForm = ref<UserData>({
  groups: [],
  first_name: '',
  last_name: '',
  patronymic: '',
  names_note: '',
  birth_date: '',
  birthday_note: '',
  country: '',
  region: '',
  city: '',
  street: '',
  building: '',
  postal: '',
  address_note: '',
  photo: '',
  username: '',
  email: '',
  password: '',
  comments: ''
})

const textAdd = computed(() => {
  let text = ''
  switch (props.user) {
    case UserType.CLERK:
      text = 'Добавить оператора'
      break
    case UserType.MODER:
      text = 'Добавить модератора'
      break
    default:
      text = 'Invalid user'
  }
  return text
})

function cancel() {
  emit('changeIndex', -1)
}

async function onSave() {
  userForm.value.groups = [props.user]
  await userAdd(userForm.value)
}
</script>

<template>
  <div class="add">
    <h4>{{ textAdd }}</h4>

    <BaseUserForm :user-data="userForm" />

    <div class="save-btn">
      <button class="cancel" @click="cancel()">Отменить</button>
      <button id="save-btn" type="submit" value="submit" class="save" @click="onSave()">
        Сохранить
      </button>
    </div>
  </div>
</template>

<style scoped></style>

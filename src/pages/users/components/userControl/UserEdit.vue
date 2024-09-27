<script setup lang="ts">
import {
  type EditUser,
  type UserData,
  UserType
} from '@/pages/users/components/userControl/types/userData'
import BaseUserForm from '@/pages/users/components/userControl/elements/BaseUserForm.vue'
import { computed, onMounted, ref } from 'vue'
import { userEdit, userUpdate } from '@/api/users'
import { modalStore, ModalTypes } from '@/stores/modalViews'

const edit = defineModel<EditUser>('edit', { required: true })
const emit = defineEmits(['changeIndex', 'editUser'])
const image = ref<string>()
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
  switch (edit.value.user) {
    case UserType.CLERK:
      return 'Редактор оператора'
    case UserType.MODER:
      return 'Редактор модератора'
    default:
      return 'Invalid user'
  }
})

function cancel() {
  emit('changeIndex', -1)
}

async function onSave() {
  const modal = modalStore()
  if (userForm.value.first_name == '' || userForm.value.last_name == '') {
    modal.activate(ModalTypes.THREE)
    return
  } else if (
    userForm.value.username == '' ||
    userForm.value.email == '' ||
    userForm.value.password == ''
  ) {
    modal.activate(ModalTypes.FOUR)
    return
  }

  userForm.value.groups = [edit.value.user]

  if (!userForm.value.background_photo) delete userForm.value.background_photo
  if (!userForm.value.birth_date) delete userForm.value.birth_date

  await userUpdate(userForm.value)
}

onMounted(async () => {
  userForm.value = await userEdit(edit.value.id)
  image.value = userForm.value.photo as string
  delete userForm.value.photo
})
</script>

<template>
  <div class="add">
    <h4>{{ textAdd }}</h4>

    <BaseUserForm :user-data="userForm" :user-image="image" />

    <div class="save-btn">
      <button class="cancel" @click="cancel()">Отменить</button>
      <button id="save-btn" type="submit" value="submit" class="save" @click="onSave()">
        Сохранить
      </button>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/user.css';
</style>

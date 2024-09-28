<script setup lang="ts">
import { computed, type PropType, ref } from 'vue'
import { type UserData, UserType } from '@/pages/users/components/userControl/types/userData'
import { userAdd } from '@/api/users'
import BaseUserForm from '@/pages/users/components/userControl/elements/BaseUserForm.vue'
import { modalStore, ModalTypes } from '@/stores/modalViews'

const emit = defineEmits(['changeIndex', 'editUser'])

const props = defineProps({
  user: {
    type: Number as PropType<UserType>,
    required: true
  }
})

const defaultUD: UserData = {
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
}

const userForm = ref<UserData>({ ...defaultUD })

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

  userForm.value.groups = [props.user]
  await userAdd(userForm.value)
    .then(() => {
      userForm.value = { ...defaultUD }
    })
    .catch((error) => {
      const data = error.response.data
      const modal = modalStore()
      if ('username' in data) modal.activate(ModalTypes.TWELVE)
    })
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

<style scoped>
@import '@/assets/styles/user.css';
</style>

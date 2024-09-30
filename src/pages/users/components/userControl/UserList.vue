<script setup lang="ts">
import { onMounted, type PropType, ref } from 'vue'
import { getImg } from '@/utils/imageManager'
import { type UserInfo, UserType } from '@/pages/users/components/userControl/types/userData'
import { userDelete, userList } from '@/api/users'
import { modalStore, ModalTypes } from '@/stores/modalViews'
import { userStore } from '@/stores/userRole'
import { UserRole } from '@/types/userRole'

const emit = defineEmits(['editUser'])
const users = ref<UserInfo[]>([])
const label = ref<string>('')
const user = userStore()

const props = defineProps({
  userType: {
    type: Number as PropType<UserType>,
    required: true
  }
})

function imgSource(index: number) {
  const img = users.value[index].photo
  return img ?? getImg('user-login')
}

async function deleteClerk(id: number) {
  const modal = modalStore()
  let type: ModalTypes = ModalTypes.NONE
  switch (props.userType) {
    case UserType.CLERK:
      type = ModalTypes.NINE
      break
    case UserType.MODER:
      type = ModalTypes.TEN
      break
  }

  modal.activate(type, {
    onApprove: async () => {
      await userDelete(id).then(async () => {
        await updateListData()
      })
    }
  })
}
function editClerk(id: number) {
  emit('editUser', 4, { user: props.userType, id: id })
}

async function updateListData() {
  users.value = await userList({ group_id: props.userType })
  const haveUsers = users.value.length > 0

  switch (props.userType) {
    case UserType.CLERK:
      label.value = haveUsers ? 'Список операторов' : 'Нет операторов'
      break
    case UserType.MODER:
      label.value = haveUsers ? 'Список модераторов' : 'Нет модераторов'
      break
    default:
      label.value = 'Invalid user'
  }
}

onMounted(async () => {
  await updateListData()
})
</script>

<template>
  <div id="clerk-container" class="team">
    <h4>{{ label }}</h4>
    <br />
    <div class="team-member" v-for="(role, index) in users" :key="index">
      <div class="user-list-info">
        <img id="clerk-image" class="user-size" :src="imgSource(index)" alt="Image" />
        <h4 id="clerk-name" class="member-name">{{ role.first_name }} {{ role.last_name }}</h4>
      </div>

      <div v-if="user.access(UserRole.ADMIN)" class="user-list-btn">
        <button class="btn-edit-clerk" @click="editClerk(role.id)">Редактировать</button>
        <button class="btn-delete-clerk" @click="deleteClerk(role.id)">Удалить</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/user.css';

.user-list-info {
  display: flex;
}
.user-list-btn {
  display: flex;
  gap: 20px;
}
</style>

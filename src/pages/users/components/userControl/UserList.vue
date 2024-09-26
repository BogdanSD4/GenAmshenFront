<script setup lang="ts">
import { computed, onMounted, type PropType, ref } from 'vue'
import { getImg } from '@/utils/imageManager'
import { type UserInfo, UserType } from '@/pages/users/components/userControl/types/userData'
import { userDelete, userList } from '@/api/users'

const emit = defineEmits(['editUser'])
const users = ref<UserInfo[]>([])
const label = ref<string>('')

const props = defineProps({
  user: {
    type: Number as PropType<UserType>,
    required: true
  }
})

function imgSource(index: number) {
  const img = users.value[index].photo
  return img ?? getImg('user-login')
}

async function deleteClerk(id: number) {
  await userDelete(id).then(async () => {
    await updateListData()
  })
}
function editClerk(id: number) {
  emit('editUser', 4, { user: props.user, id: id })
}

async function updateListData() {
  users.value = await userList({ group_id: props.user })
  const haveUsers = users.value.length > 0

  switch (props.user) {
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
    <div class="team-member" v-for="(user, index) in users" :key="index">
      <div class="user-list-info">
        <img id="clerk-image" class="user-size" :src="imgSource(index)" alt="Image" />
        <h4 id="clerk-name" class="member-name">{{ user.first_name }} {{ user.last_name }}</h4>
      </div>

      <div class="user-list-btn">
        <button class="btn-edit-clerk" @click="editClerk(user.id)">Редактировать</button>
        <button class="btn-delete-clerk" @click="deleteClerk(user.id)">Удалить</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-list-info {
  display: flex;
}
.user-list-btn {
  display: flex;
  gap: 20px;
}
</style>

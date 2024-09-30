<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { UserInfo } from '@/pages/users/components/userControl/types/userData'
import { pendingList } from '@/api/users'
import { getImg } from '@/utils/imageManager'
import type { PendingPerson, PendingResponse, PendingUser } from '@/api/types/response'
import { acceptStore } from '@/stores/acceptPerson'
import { checkUserData } from '@/api/person'

const emit = defineEmits(['changePanel'])
const members = ref<PendingResponse[]>([])
const persons = ref<PendingPerson[]>([])
const isPersonList = ref<boolean>(false)

async function checkUser(response: PendingResponse) {
  const accept = acceptStore()
  //accept.approve.id = response.user.id
  accept.approve.capture = response.user.capture

  persons.value = await checkUserData(response.user.id)
  isPersonList.value = true
}

async function checkPeson(response: PendingPerson) {
  const accept = acceptStore()
  accept.approve.id = response.id

  emit('changePanel', 3)
}

onMounted(async () => {
  const response = await pendingList()
  const userId: number[] = []
  response.forEach((m) => {
    if (!m.user) return
    const id = m.user.id
    if (!userId.includes(id)) {
      userId.push(id)
      members.value.push(m)
    }
  })
})
</script>

<template>
  <div v-if="!isPersonList" class="team">
    <div v-for="(member, index) in members" :key="index" class="team-member">
      <img class="user-size" :src="member.user.photo ?? getImg('user-login')" alt="" />
      <h4 class="member-name">{{ member.user.first_name }} {{ member.user.last_name }}</h4>
      <button class="btn-edit-clerk" @click="checkUser(member)">Проверить</button>
    </div>
  </div>
  <div v-else class="team">
    <div v-for="(person, index) in persons" :key="index" class="team-member">
      <h4 class="member-name">{{ person.first_name }} {{ person.last_name }}</h4>
      <button class="btn-edit-clerk" @click="checkPeson(person)">Проверить</button>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/user.css';
</style>

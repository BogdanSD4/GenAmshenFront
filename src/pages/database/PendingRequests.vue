<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { UserInfo } from '@/pages/users/components/userControl/types/userData'
import { pendingList } from '@/api/users'
import { getImg } from '@/utils/imageManager'
import type { PendingPerson, PendingResponse } from '@/api/types/response'
import { acceptStore } from '@/stores/acceptPerson'
import { checkUserData } from '@/api/person'

const emit = defineEmits(['changePanel'])
const members = ref<PendingResponse[]>([])
const persons = ref<PendingPerson[]>([])
const isPersonList = ref<boolean>(false)

async function checkUser(response: PendingResponse) {
  const accept = acceptStore()
  //accept.approve.id = response.user.id
  accept.approve.capture = 3

  persons.value = await checkUserData(response.id)
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
    const id = m.id
    if (!userId.includes(id)) {
      userId.push(id)
      members.value.push(m)
    }
  })
})
</script>

<template>
  <p v-if="members.length == 0" class="no-profiles">Нет профилей на подтверждение</p>
  <div v-else>
    <div v-if="!isPersonList" class="team">
      <div v-for="(member, index) in members" :key="index" class="team-member">
        <img class="user-size" :src="member.photo ?? getImg('user-login')" alt="" />
        <h4 class="member-name">{{ member.first_name }} {{ member.last_name }}</h4>
        <button class="btn-edit-clerk" @click="checkUser(member)">Проверить</button>
      </div>
    </div>
    <div v-else class="team">
      <div v-for="(person, index) in persons" :key="index" class="team-member">
        <h4 class="member-name">{{ person.first_name }} {{ person.last_name }}</h4>
        <button class="btn-edit-clerk" @click="checkPeson(person)">Проверить</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/user.css';

.no-profiles {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>

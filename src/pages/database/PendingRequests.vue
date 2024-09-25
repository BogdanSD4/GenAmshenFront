<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { UserInfo } from '@/pages/users/components/userControl/types/userData'
import { pendingList } from '@/api/users'
import { getImg } from '@/utils/imageManager'
import type { PendingResponse, PendingUser } from '@/api/types/response'
import { acceptStore } from '@/stores/acceptPerson'

const emit = defineEmits(['changePanel'])
const members = ref<PendingResponse[]>([])

async function check(user: PendingResponse) {
  const accept = acceptStore()
  accept.approve.id = user.id
  accept.approve.capture = user.user.capture
  emit('changePanel', 3)
}

onMounted(async () => {
  const response = await pendingList()
  members.value = response.filter((m) => m.user)
})
</script>

<template>
  <div class="team">
    <div v-for="(member, index) in members" :key="index" class="team-member">
      <img class="user-size" :src="member.user.photo ?? getImg('user-login')" alt="" />
      <h4 class="member-name">{{ member.user.first_name }} {{ member.user.last_name }}</h4>
      <button class="btn-edit-clerk" @click="check(member)">Проверить</button>
    </div>
  </div>
</template>

<style scoped></style>

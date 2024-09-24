<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { UserInfo } from '@/pages/users/components/userControl/types/userData'
import { pendingList } from '@/api/users'
import { getImg } from '@/utils/imageManager'

const members = ref<UserInfo[]>([])

function check() {
  //TODO: make check
}

onMounted(async () => {
  members.value = await pendingList()
})
</script>

<template>
  <div class="team">
    <div v-for="(member, index) in members" :key="index" class="team-member">
      <img class="user-size" :src="member.photo ?? getImg('user-login')" alt="" />
      <h4 class="member-name">{{ member.first_name }}} {{ member.last_name }}</h4>
      <button class="btn-check" @click="check()">Проверить</button>
    </div>
  </div>
</template>

<style scoped></style>

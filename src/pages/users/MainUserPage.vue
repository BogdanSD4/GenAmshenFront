<script setup lang="ts">
import { getImg } from '@/utils/imageManager'
import { computed, onBeforeMount, onMounted, onUnmounted, ref } from 'vue'
import { userStore } from '@/stores/userRole'
import { UserRole } from '@/types/userRole'
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import router from '@/router'
import AdminUserControlPanel from '@/pages/users/components/userControl/AdminUserControlPanel.vue'
import AdminDatabaseControlPanel from '@/pages/users/components/dbControl/AdminDatabaseControlPanel.vue'
import AdminProfileControlPanel from '@/pages/users/components/profileControl/AdminProfileControlPanel.vue'
import HistoricalPersonData from '@/pages/database/HistoricalPersonData.vue'
import PendingRequests from '@/pages/database/PendingRequests.vue'
import AcceptPersonPage from '@/pages/person/AcceptPersonPage.vue'
import UserInfo from '@/components/UserInfo.vue'

const user = userStore()
const panelIndex = ref<number>()
const userRoleName = ref<string>('')

function changePanel(index: number) {
  panelIndex.value = index
}

onMounted(async () => {
  console.log(user)
  if (user.role == UserRole.GUEST) {
    const valid = await user.valid()
    if (!valid) {
      await router.push('/login')
    }
  }

  switch (user.role) {
    case UserRole.ADMIN:
      document.title = 'ГенАмшен - Администратор'
      panelIndex.value = 0
      userRoleName.value = 'Администратор'
      break
    case UserRole.MODER:
      document.title = 'ГенАмшен - Модератор'
      panelIndex.value = 1
      userRoleName.value = 'Модератор'
      break
    case UserRole.USER:
      document.title = 'ГенАмшен - Оператор ввода данных'
      panelIndex.value = 2
      userRoleName.value = 'Оператор ввода данных'
      break
  }
})
</script>

<template>
  <MainHeader />

  <main>
    <section>
      <UserInfo :role-name="userRoleName" />

      <div class="bottom">
        <button
          id="team-btn"
          v-if="user.access(UserRole.MODER)"
          :class="{ 'active-btn': panelIndex == 0 }"
          @click="changePanel(0)"
        >
          Команда
        </button>
        <button
          id="database-btn"
          v-if="user.access(UserRole.MODER)"
          :class="{ 'active-btn': panelIndex == 1 }"
          @click="changePanel(1)"
        >
          База данных
        </button>
        <button
          id="profile-btn"
          v-if="user.access(UserRole.USER)"
          :class="{ 'active-btn': panelIndex == 2 }"
          @click="changePanel(2)"
        >
          Профиль
        </button>
        <button
          id="profile-btn"
          v-if="user.access(UserRole.USER, true)"
          :class="{ 'active-btn': panelIndex == 5 }"
          @click="changePanel(5)"
        >
          Подтвердить профиль
        </button>
      </div>
      <br />
    </section>

    <div class="back">
      <AdminUserControlPanel v-show="panelIndex == 0" class="active-btn" />
      <AdminDatabaseControlPanel
        v-show="panelIndex == 1"
        class="active-btn"
        @change-panel="changePanel"
      />
      <AdminProfileControlPanel v-show="panelIndex == 2" class="active-btn" />
      <div id="historical-person-data">
        <HistoricalPersonData v-if="panelIndex == 3" />
        <PendingRequests v-if="panelIndex == 4" @change-panel="changePanel" />
        <AcceptPersonPage v-if="panelIndex == 5" />
      </div>
    </div>
  </main>

  <MainFooter />
</template>

<style scoped>
@import '@/assets/styles/user.css';
</style>

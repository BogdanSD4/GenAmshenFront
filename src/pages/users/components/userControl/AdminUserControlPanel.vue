<script setup lang="ts">
import UserList from '@/pages/users/components/userControl/UserList.vue'
import { onMounted, ref } from 'vue'
import UserAdd from '@/pages/users/components/userControl/UserAdd.vue'
import { type EditUser, UserType } from '@/pages/users/components/userControl/types/userData'
import UserEdit from '@/pages/users/components/userControl/UserEdit.vue'
import { userStore } from '@/stores/userRole'
import { UserRole } from '@/types/userRole'

const user = userStore()
const menuIndex = ref<number>(-1)
const editUserData = ref<EditUser>({
  user: UserType.NONE,
  id: -1
})

function changeIndex(value: number) {
  menuIndex.value = value
}
function editUser(value: number, option: EditUser) {
  editUserData.value = option
  changeIndex(value)
}

onMounted(() => {
  if (user.role == UserRole.MODER) {
    menuIndex.value = 0
  }
})
</script>

<template>
  <div class="grid-container">
    <div class="col-1">
      <h6>Команда</h6>
      <br />
      <br />
      <div>
        <h6>Операторы ввода данных</h6>
        <div v-if="user.access(UserRole.ADMIN)">
          <button id="btn-team-display" class="yellow-btn" @click="changeIndex(0)">
            Список операторов
          </button>
          <button id="btn-team-add-clerk" class="yellow-btn" @click="changeIndex(1)">
            Добавить оператора
          </button>
        </div>
      </div>

      <br />

      <div v-if="user.access(UserRole.ADMIN)">
        <h6>Модераторы</h6>
        <div>
          <button id="btn-team-moderator-display" class="yellow-btn" @click="changeIndex(2)">
            Список модераторов
          </button>
          <button id="btn-team-add-mod" class="yellow-btn" @click="changeIndex(3)">
            Добавить модератора
          </button>
        </div>
      </div>
    </div>

    <div id="infoDisplayTeam">
      <UserList v-if="menuIndex == 0" :user="UserType.CLERK" @edit-user="editUser" />
      <UserAdd v-if="menuIndex == 1" :user="UserType.CLERK" @change-index="changeIndex" />
      <UserList v-if="menuIndex == 2" :user="UserType.MODER" @edit-user="editUser" />
      <UserAdd v-if="menuIndex == 3" :user="UserType.MODER" @change-index="changeIndex" />

      <UserEdit v-if="menuIndex == 4" :edit="editUserData" @change-index="changeIndex" />
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/user.css';
</style>

<script setup lang="ts">
import PersonalBirthDisplay from '@/pages/person/components/data/PersonalBirthDisplay.vue'
import PersonalMarriageDisplay from '@/pages/person/components/data/PersonalMarriageDisplay.vue'
import PersonalDeathDisplay from '@/pages/person/components/data/PersonalDeathDisplay.vue'
import { PersonType } from '@/pages/database/types/historicalTypes'
import { createPerson } from '@/api/person'
import { modalStore, ModalTypes } from '@/stores/modalViews'
import { useCookies } from 'vue3-cookies'
import { isEmpty } from '@/utils/objectManager'
import { userStore } from '@/stores/userRole'

const menuIndex = defineModel<number>('menu', { default: -1 })

function changeMenu(index: number) {
  if ([1, 2, 3].includes(index)) {
    const cookies = useCookies().cookies
    const person = cookies.get('person_save') as any

    if (person && person.menuChapter != index) {
      const modal = modalStore()
      modal.activate(
        ModalTypes.FOURTEEN,
        {
          onApprove: () => {
            cookies.remove('person_save')
            changeMenu(index)
          }
        },
        'Нет',
        'Да'
      )
      return
    }
  }

  menuIndex.value = index
  const user = userStore()
  user.personFirstName = ''
  user.personLastName = ''
}

function catchErrors(error: any) {
  const data = error.response.data
  const modal = modalStore()
  if (!data) return

  if (data.includes('non_field_errors')) {
    modal.activate(ModalTypes.ELEVEN)
  } else if (data.includes('error')) {
    if ('You already have unapproved data' in data.error) {
      modal.activate(ModalTypes.THIRTEEN)
    }
  }
}
function dataSave(data: any, menuChapter: number) {
  const cookies = useCookies().cookies
  const oldData = cookies.get('person_save') as any
  const dataIsEmpty = isEmpty(data)

  if (oldData) {
    if (oldData.menuChapter == menuChapter) {
      if (dataIsEmpty) {
        cookies.remove('person_save')
      } else {
        data['menu'] = 0
        data['menuChapter'] = menuChapter
        cookies.set('person_save', JSON.stringify(data))
      }
    }
    return
  }

  if (dataIsEmpty || menuChapter != menuIndex.value) return

  data['menu'] = 0
  data['menuChapter'] = menuChapter

  cookies.set('person_save', JSON.stringify(data))
}

async function onSave(type: PersonType, panel: number, data: any, callback: () => void) {
  //data['capture'] = panel

  await createPerson(type, data)
    .then(() => {
      menuIndex.value = panel
      const cookies = useCookies().cookies
      cookies.remove('person_save')
      const modal = modalStore()
      modal.activate(ModalTypes.EIGHT)
      callback()
    })
    .catch((error) => catchErrors(error))
}
</script>

<template>
  <div class="grid-container">
    <div class="col-1">
      <h6>Личные данные</h6>
      <br />
      <br />
      <button
        id="btn-birth"
        :class="[{ 'active-btn': menuIndex == 1 }, 'yellow-btn']"
        @click="changeMenu(1)"
      >
        Рождение
      </button>
      <button
        id="btn-marriage"
        :class="[{ 'active-btn': menuIndex == 2 }, 'yellow-btn']"
        @click="changeMenu(2)"
      >
        Браки
      </button>
      <button
        id="btn-death"
        :class="[{ 'active-btn': menuIndex == 3 }, 'yellow-btn']"
        @click="changeMenu(3)"
      >
        Смерти
      </button>
    </div>
    <div id="infoDisplay">
      <PersonalBirthDisplay
        :index="1"
        :current-index="menuIndex"
        to-cookies
        @change-panel="changeMenu"
        @on-save="onSave"
        @on-save-to-cookies="dataSave"
      />
      <PersonalMarriageDisplay
        :index="2"
        :current-index="menuIndex"
        to-cookies
        @change-panel="changeMenu"
        @on-save="onSave"
        @on-save-to-cookies="dataSave"
      />
      <PersonalDeathDisplay
        :index="3"
        :current-index="menuIndex"
        to-cookies
        @change-panel="changeMenu"
        @on-save="onSave"
        @on-save-to-cookies="dataSave"
      />
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/personal_data.css';
</style>

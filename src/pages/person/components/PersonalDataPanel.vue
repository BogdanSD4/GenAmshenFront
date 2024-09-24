<script setup lang="ts">
import BirthDisplay from '@/pages/person/components/data/PersonalBirthDisplay.vue'
import { ref } from 'vue'
import MarriageDisplay from '@/pages/person/components/data/PersonalMarriageDisplay.vue'
import DeathDisplay from '@/pages/person/components/data/PersonalDeathDisplay.vue'

const menuIndex = ref<number>(-1)

function changeMenu(index: number) {
  menuIndex.value = index
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
        :class="[{ 'active-btn': menuIndex == 0 }, 'yellow-btn']"
        @click="changeMenu(0)"
      >
        Рождение
      </button>
      <button
        id="btn-marriage"
        :class="{ 'active-btn': menuIndex == 1 }"
        class="yellow-btn"
        @click="changeMenu(1)"
      >
        Браки
      </button>
      <button
        id="btn-death"
        :class="{ 'active-btn': menuIndex == 2 }"
        class="yellow-btn"
        @click="changeMenu(2)"
      >
        Смерти
      </button>
    </div>
    <div id="infoDisplay">
      <BirthDisplay v-show="menuIndex == 0" />
      <MarriageDisplay v-show="menuIndex == 1" />
      <DeathDisplay v-show="menuIndex == 2" />
    </div>
  </div>
</template>

<style scoped>
.more {
  height: 0;
  overflow: hidden;
  transition: height 0.5s;
}
</style>

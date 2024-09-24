<script setup lang="ts">
import { getImg } from '@/utils/imageManager'
import { onMounted, ref } from 'vue'

const bookPos = ref<number>(0)
const currentPage = ref<number>(0)
const bookSet = [
  ['book', 'p2'],
  ['p3', 'p4'],
  ['p5', 'p6'],
  ['p7', 'p8'],
  ['p9', 'p10'],
  ['p11', 'p12'],
  ['p13', 'p14'],
  ['p15', 'p16'],
  ['p17', 'p18'],
  ['p19', 'p2']
]

function nextPage() {
  if (currentPage.value < bookSet.length) {
    const page = document.querySelector(`#page${currentPage.value}`) as HTMLElement
    setTimeout(() => {
      page.style.zIndex = `${0 + currentPage.value}`
    }, 100)

    currentPage.value++

    if (currentPage.value == bookSet.length) bookPos.value = 100
    else bookPos.value = 50
  }
}
function previousPage() {
  if (currentPage.value > 0) {
    currentPage.value--

    const page = document.querySelector(`#page${currentPage.value}`) as HTMLElement
    console.log(10 - currentPage.value)
    setTimeout(() => {
      page.style.zIndex = `${10 - currentPage.value}`
    }, 100)

    if (currentPage.value == 0) bookPos.value = 0
    else bookPos.value = 50
  }
}

function bookStyle(index: number) {
  return { 'z-index': currentPage.value > index ? index : 10 - index }
}

onMounted(() => {
  for (let i = 0; i < bookSet.length; i++) {
    const page = document.querySelector(`#page${i}`) as HTMLElement
    page.style.zIndex = `${10 - i}`
  }
})
</script>

<template>
  <div class="documents">
    <button id="prev-btn">
      <img class="arrow-left" :src="getImg('arrow-left')" alt="Image" @click="previousPage" />
    </button>

    <div id="book" class="book" :style="{ transform: `translateX(${bookPos}%)` }">
      <div
        v-for="(pages, index) in bookSet"
        :key="index"
        :id="`page${index}`"
        :class="['paper', { flipped: currentPage > index }]"
      >
        <div class="front">
          <div class="front-content">
            <img class="page-size" :src="getImg(pages[0])" alt="Image" />
          </div>
        </div>
        <div class="back">
          <div class="back-content">
            <img class="page-size" :src="getImg(pages[1])" alt="Image" />
          </div>
        </div>
      </div>
    </div>

    <button id="next-btn">
      <img class="arrow-right" :src="getImg('arrow-right')" alt="Image" @click="nextPage" />
    </button>
  </div>
</template>

<style scoped>
@import '@/assets/styles/style.css';
</style>

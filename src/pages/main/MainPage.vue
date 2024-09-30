<script setup lang="ts">
import { getImg } from '@/utils/imageManager'
import MainPageInfo from '@/pages/main/components/MainPageInfo.vue'
import BookView from '@/pages/main/components/BookView.vue'
import { onBeforeMount, onMounted, onUnmounted, ref, watch } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router'
import MainFooter from '@/components/MainFooter.vue'

import MainHeader from '@/components/MainHeader.vue'
import MainLandingHeader from '@/components/MainLandingHeader.vue'
import { sendFeedback } from '@/api/person'
import type { Feedback } from '@/api/types/request'
import { modalStore } from '@/stores/modalViews'

document.title = 'ГенАмшен'

const route = useRoute()
const name = ref<string>('')
const email = ref<string>('')
const message = ref<string>('')

watch(
  () => route.params.id,
  (n, o) => {
    goToObject(n as string)
  }
)

async function handleFeedbackFormSubmit() {
  const email_check = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
  const modal = modalStore()

  if (!email_check.test(email.value)) {
    modal.activate('Неверная електронная почта')
    return false
  }

  const data: Feedback = {
    name: name.value,
    email: email.value,
    comments: message.value
  }
  await sendFeedback(data).then(() => {
    modal.activate('Отзыв успешно отправлен')
  })
}

function goToObject(id: string) {
  let elementId = ''
  switch (id) {
    case 'about':
      elementId = 'project'
      break
    case 'books':
      elementId = 'documents'
      break
    case 'maps':
      elementId = 'map'
      break
    case 'team':
      elementId = 'team'
      break
    case 'support':
      elementId = 'contact'
      break
    default:
      return
  }

  const element = document.querySelector(`#${elementId}`)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const id = route.params.id as string
  goToObject(id)
})
</script>

<template>
  <MainLandingHeader :is-main="true" />

  <main>
    <section>
      <div class="cover">
        <img class="logo-name" :src="getImg('logo-name')" alt="Image" />
        <h1>Узнай свои корни!</h1>
      </div>
    </section>

    <MainPageInfo />

    <section>
      <div id="documents">
        <div>
          <h2 class="color-white align-center">Метрические книги</h2>
          <p class="color-white mobile-center">
            (Примеры записей о крещении с переводом на русский)
          </p>
        </div>

        <BookView />
      </div>
    </section>

    <section>
      <div id="map">
        <div class="map-back">
          <h2 class="color-white">Карта миграции</h2>
          <img class="map" :src="getImg('map')" alt="Image" />
          <h2 id="team" class="color-white">Команда</h2>
          <div class="team-lead">
            <img class="team-size" :src="getImg('Andranik')" alt="Image" />
            <h3 class="color-white">Даниелян Андраник Рафаелович</h3>
            <p class="team-lead-text-city">г. Торонто, Канада</p>
            <p class="team-lead-text">Основатель и руководитель проекта</p>
            <p class="team-lead-text-one">
              Всё началось с поиска информации для создания своего фамильного древа. Относительно
              достоверно удалось узнать только о бабушках и дедушках. Информация о прародителях и
              тем более о прапрародителях оказалась только в виде устных преданий и легенд, которые
              различались у разных родственников.<span id="dotsOne" />
            </p>
            <span id="moreOne">
              <p class="team-lead-text-one">
                Необходимость узнать достоверную информацию о прародителях привела меня к поиску
                документальных источников, каковыми оказались метрические книги Амшенских церквей и
                внутриепархиальная переписка досоветского периода Российского Причерноморья.
              </p>
              <p class="team-lead-text-one">
                Первые книги, найденные в государственном архиве республики Абхазия, показали, какой
                огромный и очень ценный объём задокументированной информации в них содержится.
              </p>
              <p class="team-lead-text-one">
                Личное общение со многими знакомыми и увлеченными поиском своих корней показало, что
                эта информация представляет собой огромный интерес даже для тех, кто не занимается
                созданием фамильного древа.
              </p>
              <p class="team-lead-text-one">
                Отсюда естественным образом возникла идея создания базы данных метрических книг и
                епархиальной переписки всех известных Амшенских церквей, которые хранятся в архивах
                разных стран, на армянском, русском и английском языках, и предоставления свободного
                доступа к ней.
              </p></span
            >
            <br class="none" />
            <br class="none" />
            <div class="read-more">
              <button id="myBtnReadOne">Развернуть</button>
            </div>
          </div>

          <div class="team-one">
            <div class="top-100">
              <img class="team-size" :src="getImg('mirz')" alt="Image" />
              <h3>Мирзоян Соня Суреновна</h3>
              <p class="team-text-city">г. Ереван, Армения</p>
              <p class="team-text-one">
                Кандидат исторических наук, бывший заместитель директора Национального архива
                Республики Армения. Исследователь Амшенской генеалогии
              </p>
            </div>
            <div class="top-100 align">
              <img class="team-size" :src="getImg('ashot')" alt="Image" />
              <h3>Сеферян Ашот Георгиевич</h3>
              <p class="team-text-city">г. Москва, Россия</p>
              <p class="team-text-one">Кандидат социологических наук</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="team">
        <div>
          <img class="team-size" :src="getImg('tulumdgjan')" alt="Image" />
          <h3 class="color-white">Тулумджян Ардавазд Левонович</h3>
          <p class="team-lead-text-city">г. Краснодар, Россия</p>
          <p class="team-text">
            Заместитель председателя Совета «Региональной армянской национально-культурной автономии
            Краснодарского края»
          </p>
        </div>
        <div class="top-100-one">
          <img class="team-size" :src="getImg('gohar')" alt="Image" />
          <h3 class="color-white">
            Авакян Гоар<br />
            Георгиевна
          </h3>
          <p class="team-lead-text-city">г. Ереван, Армения</p>
          <p class="team-text">
            Кандидат исторических наук, научный сотрудник института древних рукописей Армении
            Матенадаран
          </p>
        </div>
      </div>

      <div class="team-two">
        <div class="top-100-one">
          <br class="none" />
          <img class="team-size" :src="getImg('enik')" alt="Image" />
          <h3 class="color-white">Еник Дмитрий Игорьевич</h3>
          <p class="team-lead-text-city">г. Сухум, Абхазия</p>
          <p class="team-text">
            Заместитель начальника Государственного Архивного Управления Республики Абхазия
          </p>
        </div>
      </div>
    </section>

    <section class="form">
      <div id="contact">
        <h2 class="color-white">Поддержите наш проект!</h2>
        <br /><br />
        <p class="color-white mobile">
          Оставив ваши имя и адрес электронной почты, вы даете нам знать, что вы поддерживаете
          проект и желаете в дальнейшем получать информацию о продвижении и всех новинках.
        </p>
        <br /><br /><br />
        <form
          id="my-form"
          name="form"
          accept-charset="utf-8"
          @submit.prevent="handleFeedbackFormSubmit()"
        >
          <div>
            <label for="name"></label>
            <input
              type="text"
              name="name"
              id="name"
              v-model="name"
              placeholder="Ваше имя"
              :required="true"
            />
          </div>
          <br />
          <div>
            <label for="email-address"></label>
            <input
              v-model="email"
              type="email"
              name="_replyto"
              id="email-address"
              placeholder="Электронная почта"
              :required="true"
            />
          </div>
          <br />
          <div>
            <label>
              <textarea
                v-model="message"
                rows="4"
                cols="50"
                placeholder="Рекомендации и пожелания к проекту"
                class="message"
                name="message"
              ></textarea>
            </label>
          </div>
          <br />
          <input type="submit" value="Отправить" />
        </form>
      </div>

      <div id="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <p class="modal-text">Ваш запрос получен</p>
          <p class="modal-text">Благодарим за проявленный интерес к проекту ГенАмшен</p>
        </div>
      </div>
    </section>
  </main>

  <MainFooter :enable-login-link="true" />
</template>

<style scoped>
@import '@/assets/styles/style.css';
</style>

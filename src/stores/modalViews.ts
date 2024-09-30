import type { ApprovePerson } from '@/api/types/request'
import type { ModerPersonInfo } from '@/pages/database/types/historicalTypes'
import { defineStore } from 'pinia'

export enum ModalTypes {
  NONE,
  FIRST = 'Вы вышли из личного кабинета и будете перенаправлены на страницу "Войти в ГенАмшен"',
  SECOND = 'Сохраненные данные не найдены. Пожалуйста, перейдите в раздел "Создать профиль" для создания нового профиля',
  THREE = 'Поля "Имя" и "Фамилия" обязательны к заполнению',
  FOUR = 'Поля "Имя пользователя", "Електронная почта" и "Пароль" обязательны к заполнению',
  FIVE = 'Данные введены не на армянском языке. Пожалуйста, введите данные на армянском языке',
  SIX = 'Пожалуйста, внесите "Имя" и "Фамилию" в раздел, чтобы сохранить данные об историческом человеке.',
  SEVEN = 'Размер фото должен быть меньше 2MB',
  EIGHT = 'Данные успешно проверены и сохранены',
  NINE = 'Вы уверены, что хотите удалить этого оператора?',
  TEN = 'Вы уверены, что хотите удалить этого модератора?',
  ELEVEN = 'Человек с такими именем и фамилией уже существует в базе данных. Пожалуйста, обратитесь к модератору.',
  TWELVE = 'Пользователь с такими никнеймом уже существует в базе данных.',
  THIRTEEN = 'У вас есть не подтвержденная историческая личность',
  FOURTEEN = 'У вас есть незавершенная историческая личность. Хотите создать новую?'
}

interface ModalCloseEvent {
  onClose?: () => void
}
interface ModalChoseEvent {
  onCancel?: () => void
  onApprove: () => void
}

type ModalEvent = ModalChoseEvent | ModalCloseEvent

interface State {
  modalType: ModalTypes | string
  event?: ModalEvent
  btnCancel?: string
  btnApprove?: string
}

export const modalStore = defineStore('modalViews', {
  state: (): State => {
    return {
      modalType: ModalTypes.NONE
    }
  },
  actions: {
    activate(
      type: ModalTypes | string,
      event?: ModalEvent,
      btnCancel?: string,
      btnApprove?: string
    ) {
      this.event = event
      this.modalType = type
      this.btnCancel = btnCancel
      this.btnApprove = btnApprove
    },
    close() {
      if (this.event && 'onClose' in this.event) {
        this.event.onClose?.()
      }
      this.event = undefined
      this.btnCancel = undefined
      this.btnApprove = undefined
      this.modalType = ModalTypes.NONE
    }
  }
})

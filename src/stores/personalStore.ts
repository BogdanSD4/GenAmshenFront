import type { ApprovePerson } from '@/api/types/request'
import type { ModerPersonInfo } from '@/pages/database/types/historicalTypes'
import { defineStore } from 'pinia'

interface State {
  firstName: string
  lastName: string
  photo: string
  background_photo: string
}

export const personStore = defineStore('personStore', {
  state: (): State => {
    return {
      firstName: '',
      lastName: '',
      photo: '',
      background_photo: ''
    }
  }
})

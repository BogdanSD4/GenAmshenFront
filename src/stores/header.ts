import type { ApprovePerson } from '@/api/types/request'
import type { ModerPersonInfo } from '@/pages/database/types/historicalTypes'
import { defineStore } from 'pinia'

interface State {
  hamburger: boolean
}

export const headerStore = defineStore('mainHeader', {
  state: (): State => {
    return {
      hamburger: false
    }
  }
})

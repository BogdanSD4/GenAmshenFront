import { defineStore } from 'pinia'
import type { ApprovePerson } from '@/api/types/request'
import type { HistoricalPersonTls } from '@/pages/database/types/historicalTypes'

interface State {
  approve: ApprovePerson
  data?: HistoricalPersonTls
}

export const acceptStore = defineStore('acceptPerson', {
  state: (): State => {
    return {
      approve: {
        id: -1,
        capture: -1
      }
    }
  }
})

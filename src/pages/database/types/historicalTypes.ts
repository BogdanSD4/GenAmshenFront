import type { Translation } from '@/pages/database/context/historicalContentLanguage'

export enum HistoricalLang {
  ENGLISH = 'en',
  RUSSIAN = 'ru',
  ARMENIAN = 'ar'
}

export interface HistoricalFormDTO {
  label: keyof Translation
  items: string[]
}

export interface HistoricalInput {
  text: string
  placeholder: string
  disabled: boolean
}

export interface HistoricalEditItem {
  index: number[]
  value: boolean
}

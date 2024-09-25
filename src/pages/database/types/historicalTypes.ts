import type { Translation } from '@/pages/database/context/historicalContentLanguage'

export enum HistoricalLang {
  ENGLISH = 'en',
  RUSSIAN = 'ru',
  ARMENIAN = 'ar'
}

export interface HistoricalFormDTO {
  field?: string
  label: keyof Translation
  items: HistoricalFormItem[]
}

export interface HistoricalFormItem {
  value: string
  code: string
}

export interface HistoricalInput {
  field: string | undefined
  code: string
  text: string
  placeholder: string
  disabled: boolean
}

export interface HistoricalEditItem {
  index: number[]
  value: boolean
}

export interface HistoricalPersonBase {
  first_name: string[]
  last_name: string[]
  patronymic: string[]
  gender: string[]
  name_note: string[]
  birth_date: string[]
  birth_date_note: string[]
  birth_country: string[]
  birth_region: string[]
  birth_city: string[]
  birth_street: string[]
  birth_building: string[]
  birth_postal: string[]
  birth_place_note: string[]
  baptism_date: string[]
  baptism_date_note: string[]
  baptism_country: string[]
  baptism_region: string[]
  baptism_city: string[]
  baptism_street: string[]
  baptism_building: string[]
  baptism_postal: string[]
  baptism_note_priest: string[]
}

export interface HistoricalPerson extends HistoricalPersonBase {
  father: HistoricalPersonBase
  mother: HistoricalPersonBase
  godfather: HistoricalPersonBase
  comments: string[]
}

export enum PersonType {
  BIRTH = 'person',
  WEDDING = 'wedding',
  DEATH = 'death'
}

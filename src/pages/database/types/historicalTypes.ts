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

export interface HistoricalPersonTls extends HistoricalPersonBase {
  father: HistoricalPersonBase
  mother: HistoricalPersonBase
  godfather: HistoricalPersonBase
  comments: string[]
  book_photo: string
  capture: number[]
}

export interface HistoricalDeathTls {
  age: string[]
  book: string[]
  burial_city: string[]
  burial_country: string[]
  burial_date: string[]
  burial_date_note: string[]
  burial_place_note: string[]
  burial_region: string[]
  burial_street: string[]
  comments: string[]
  death_date: string[]
  death_date_note: string[]
  first_name: string[]
  id: string[]
  last_name: string[]
  name_note: string[]
  patronymic: string[]
  review: string[]
  user: string[]
  capture: number[]
  book_photo: string
}

export interface HistoricalDeath {
  age: string
  book: number
  burial_city: string
  burial_country: string
  burial_date: string
  burial_date_note: string
  burial_place_note: string
  burial_region: string
  burial_street: string
  capture: number
  comments: null
  death_date: string
  death_date_note: string
  first_name: string
  id: number
  last_name: string
  name_note: string
  patronymic: string
}

export interface HistoricalMarriage {
  id: number
  first_name: string
  last_name: string
  patronymic: string
  age: string
  name_note: string
  wedding_number: string
  country: string
  region: string
  city: string
  street: string
  building: string
  postal_code: string
  place_note: string
  bride_first_name: string
  bride_last_name: string
  bride_patronymic: string
  bride_age: string
  bride_name_note: string
  bride_wedding_number: string
  bride_country: string
  bride_region: string
  bride_city: string
  bride_street: string
  bride_building: string
  bride_postal_code: string
  bride_place_note: string
  bride_father_first_name: string
  bride_father_last_name: string
  bride_father_patronymic: string
  bride_father_name_note: string
  wedding_date: string
  wedding_date_note: string
  wedding_country: string
  wedding_region: string
  wedding_city: string
  wedding_street: string
  wedding_building: string
  wedding_postal_code: string
  wedding_place_note: string
  witness_1_first_name: string
  witness_1_last_name: string
  witness_1_patronymic: string
  witness_1_name_note: string
  witness_1_country: string
  witness_1_region: string
  witness_1_city: string
  witness_1_street: string
  witness_1_building: string
  witness_1_postal: string
  witness_1_place_note: string
  witness_2_first_name: string
  witness_2_last_name: string
  witness_2_patronymic: string
  witness_2_name_note: string
  witness_2_country: string
  witness_2_region: string
  witness_2_city: string
  witness_2_street: string
  witness_2_building: string
  witness_2_postal: string
  witness_2_place_note: string
  comments: string
  capture: number
}

export type ClerkPersonInfo = HistoricalDeath | HistoricalMarriage
export type ModerPersonInfo = HistoricalPersonTls | HistoricalDeathTls

export type PersonInfo = ClerkPersonInfo | ModerPersonInfo

export enum PersonType {
  BIRTH = 'person',
  WEDDING = 'wedding',
  DEATH = 'death'
}

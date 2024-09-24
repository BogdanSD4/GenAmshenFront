import type { HistoricalFormDTO } from '@/pages/database/types/historicalTypes'

export const HPersonBirthContent: HistoricalFormDTO[] = [
  {
    label: 'name',
    items: ['firstName', 'lastName', 'patronymic', 'gender', 'note']
  },
  {
    label: 'birthDate',
    items: ['date', 'note']
  },
  {
    label: 'birthPlace',
    items: ['country', 'region', 'city', 'street', 'building', 'postalCode', 'note']
  },
  {
    label: 'baptism',
    items: ['date', 'note']
  },
  {
    label: 'baptismPlace',
    items: ['country', 'region', 'city', 'street', 'building', 'postalCode', 'witnessNote']
  },
  {
    label: 'father',
    items: ['firstName', 'lastName', 'patronymic', 'note']
  },
  {
    label: 'birthDate',
    items: ['date', 'note']
  },
  {
    label: 'birthPlace',
    items: ['country', 'region', 'city', 'street', 'building', 'postalCode', 'note']
  },
  {
    label: 'baptism',
    items: ['date', 'note']
  },
  {
    label: 'baptismPlace',
    items: ['country', 'region', 'city', 'street', 'building', 'postalCode', 'witnessNote']
  },
  {
    label: 'mother',
    items: ['firstName', 'lastName', 'patronymic', 'note']
  },
  {
    label: 'birthDate',
    items: ['date', 'note']
  },
  {
    label: 'birthPlace',
    items: ['country', 'region', 'city', 'street', 'building', 'postalCode', 'note']
  },
  {
    label: 'baptism',
    items: ['date', 'note']
  },
  {
    label: 'baptismPlace',
    items: ['country', 'region', 'city', 'street', 'building', 'postalCode', 'witnessNote']
  },
  {
    label: 'godfather',
    items: ['firstName', 'lastName', 'patronymic', 'note']
  },
  {
    label: 'birthDate',
    items: ['date', 'note']
  },
  {
    label: 'birthPlace',
    items: ['country', 'region', 'city', 'street', 'building', 'postalCode', 'note']
  },
  {
    label: 'baptism',
    items: ['date', 'note']
  },
  {
    label: 'baptismPlace',
    items: ['country', 'region', 'city', 'street', 'building', 'postalCode', 'witnessNote']
  },
  {
    label: 'comments',
    items: ['comments']
  }
]

export const HPersonMarriageContent: HistoricalFormDTO[] = [
  {
    label: 'groom',
    items: ['firstName', 'lastName', 'patronymic', 'age', 'note', 'marriageNumber']
  },
  {
    label: 'adress',
    items: ['country', 'region', 'city', 'street', 'building', 'postalCode', 'note']
  },
  {
    label: 'bride',
    items: ['firstName', 'lastName', 'patronymic', 'age', 'note', 'marriageNumber']
  },
  {
    label: 'adress',
    items: ['country', 'region', 'city', 'street', 'building', 'postalCode', 'note']
  },
  {
    label: 'brideFather',
    items: ['firstName', 'lastName', 'patronymic', 'note']
  },
  {
    label: 'weddingDate',
    items: ['date', 'note']
  },
  {
    label: 'adress',
    items: ['country', 'region', 'city', 'street', 'building', 'postalCode', 'note']
  },
  {
    label: 'witness',
    items: ['firstName', 'lastName', 'patronymic', 'note']
  },
  {
    label: 'adress',
    items: ['country', 'region', 'city', 'street', 'building', 'postalCode', 'note']
  },
  {
    label: 'witness_2',
    items: ['firstName', 'lastName', 'patronymic', 'note']
  },
  {
    label: 'adress',
    items: ['country', 'region', 'city', 'street', 'building', 'postalCode', 'note']
  },
  {
    label: 'comments',
    items: ['comments']
  }
]

export const HPersonDeathContent: HistoricalFormDTO[] = [
  {
    label: 'name',
    items: ['firstName', 'lastName', 'patronymic', 'age', 'note']
  },
  {
    label: 'deathDate',
    items: ['date', 'note']
  },
  {
    label: 'burialDate',
    items: ['date', 'note']
  },
  {
    label: 'burialPlace',
    items: ['country', 'region', 'city', 'street', 'note']
  },
  {
    label: 'comments',
    items: ['comments']
  }
]

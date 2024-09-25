import type { HistoricalFormDTO } from '@/pages/database/types/historicalTypes'

export const HPersonBirthContent: HistoricalFormDTO[] = [
  {
    label: 'name',
    items: [
      { value: 'firstName', code: 'first_name' },
      { value: 'lastName', code: 'last_name' },
      { value: 'patronymic', code: 'patronymic' },
      { value: 'gender', code: 'gender' },
      { value: 'note', code: 'name_note' }
    ]
  },
  {
    label: 'birthDate',
    items: [
      { value: 'date', code: 'birth_date' },
      { value: 'note', code: 'birth_date_note' }
    ]
  },
  {
    label: 'birthPlace',
    items: [
      { value: 'country', code: 'birth_country' },
      { value: 'region', code: 'birth_region' },
      { value: 'city', code: 'birth_city' },
      { value: 'street', code: 'birth_street' },
      { value: 'building', code: 'birth_building' },
      { value: 'postalCode', code: 'birth_postal' },
      { value: 'note', code: 'birth_place_note' }
    ]
  },
  {
    label: 'baptism',
    items: [
      { value: 'date', code: 'baptism_date' },
      { value: 'note', code: 'baptism_date_note' }
    ]
  },
  {
    label: 'baptismPlace',
    items: [
      { value: 'country', code: 'baptism_country' },
      { value: 'region', code: 'baptism_region' },
      { value: 'city', code: 'baptism_city' },
      { value: 'street', code: 'baptism_street' },
      { value: 'building', code: 'baptism_building' },
      { value: 'postalCode', code: 'baptism_postal' },
      { value: 'witnessNote', code: 'baptism_note_priest' }
    ]
  },
  {
    field: 'father',
    label: 'father',
    items: [
      { value: 'firstName', code: 'first_name' },
      { value: 'lastName', code: 'last_name' },
      { value: 'patronymic', code: 'patronymic' },
      { value: 'note', code: 'name_note' }
    ]
  },
  {
    field: 'father',
    label: 'birthDate',
    items: [
      { value: 'date', code: 'birth_date' },
      { value: 'note', code: 'birth_date_note' }
    ]
  },
  {
    field: 'father',
    label: 'birthPlace',
    items: [
      { value: 'country', code: 'birth_country' },
      { value: 'region', code: 'birth_region' },
      { value: 'city', code: 'birth_city' },
      { value: 'street', code: 'birth_street' },
      { value: 'building', code: 'birth_building' },
      { value: 'postalCode', code: 'birth_postal' },
      { value: 'note', code: 'birth_place_note' }
    ]
  },
  {
    field: 'father',
    label: 'baptism',
    items: [
      { value: 'date', code: 'baptism_date' },
      { value: 'note', code: 'baptism_date_note' }
    ]
  },
  {
    field: 'father',
    label: 'baptismPlace',
    items: [
      { value: 'country', code: 'baptism_country' },
      { value: 'region', code: 'baptism_region' },
      { value: 'city', code: 'baptism_city' },
      { value: 'street', code: 'baptism_street' },
      { value: 'building', code: 'baptism_building' },
      { value: 'postalCode', code: 'baptism_postal' },
      { value: 'witnessNote', code: 'baptism_note_priest' }
    ]
  },
  {
    field: 'mother',
    label: 'mother',
    items: [
      { value: 'firstName', code: 'first_name' },
      { value: 'lastName', code: 'last_name' },
      { value: 'patronymic', code: 'patronymic' },
      { value: 'note', code: 'name_note' }
    ]
  },
  {
    field: 'mother',
    label: 'birthDate',
    items: [
      { value: 'date', code: 'birth_date' },
      { value: 'note', code: 'birth_date_note' }
    ]
  },
  {
    field: 'mother',
    label: 'birthPlace',
    items: [
      { value: 'country', code: 'birth_country' },
      { value: 'region', code: 'birth_region' },
      { value: 'city', code: 'birth_city' },
      { value: 'street', code: 'birth_street' },
      { value: 'building', code: 'birth_building' },
      { value: 'postalCode', code: 'birth_postal' },
      { value: 'note', code: 'birth_place_note' }
    ]
  },
  {
    field: 'mother',
    label: 'baptism',
    items: [
      { value: 'date', code: 'baptism_date' },
      { value: 'note', code: 'baptism_date_note' }
    ]
  },
  {
    field: 'mother',
    label: 'baptismPlace',
    items: [
      { value: 'country', code: 'baptism_country' },
      { value: 'region', code: 'baptism_region' },
      { value: 'city', code: 'baptism_city' },
      { value: 'street', code: 'baptism_street' },
      { value: 'building', code: 'baptism_building' },
      { value: 'postalCode', code: 'baptism_postal' },
      { value: 'witnessNote', code: 'baptism_note_priest' }
    ]
  },
  {
    field: 'godfather',
    label: 'godfather',
    items: [
      { value: 'firstName', code: 'first_name' },
      { value: 'lastName', code: 'last_name' },
      { value: 'patronymic', code: 'patronymic' },
      { value: 'note', code: 'name_note' }
    ]
  },
  {
    field: 'godfather',
    label: 'birthDate',
    items: [
      { value: 'date', code: 'birth_date' },
      { value: 'note', code: 'birth_date_note' }
    ]
  },
  {
    field: 'godfather',
    label: 'birthPlace',
    items: [
      { value: 'country', code: 'birth_country' },
      { value: 'region', code: 'birth_region' },
      { value: 'city', code: 'birth_city' },
      { value: 'street', code: 'birth_street' },
      { value: 'building', code: 'birth_building' },
      { value: 'postalCode', code: 'birth_postal' },
      { value: 'note', code: 'birth_place_note' }
    ]
  },
  {
    field: 'godfather',
    label: 'baptism',
    items: [
      { value: 'date', code: 'baptism_date' },
      { value: 'note', code: 'baptism_date_note' }
    ]
  },
  {
    field: 'godfather',
    label: 'baptismPlace',
    items: [
      { value: 'country', code: 'baptism_country' },
      { value: 'region', code: 'baptism_region' },
      { value: 'city', code: 'baptism_city' },
      { value: 'street', code: 'baptism_street' },
      { value: 'building', code: 'baptism_building' },
      { value: 'postalCode', code: 'baptism_postal' },
      { value: 'witnessNote', code: 'baptism_note_priest' }
    ]
  },
  {
    label: 'comments',
    items: [{ value: 'comments', code: 'comments' }]
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

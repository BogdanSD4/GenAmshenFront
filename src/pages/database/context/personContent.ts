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
    items: [
      { value: 'firstName', code: 'first_name' },
      { value: 'lastName', code: 'last_name' },
      { value: 'patronymic', code: 'patronymic' },
      { value: 'age', code: 'age' },
      { value: 'marriageNumber', code: 'wedding_number' },
      { value: 'note', code: 'name_note' }
    ]
  },
  {
    label: 'adress',
    items: [
      { value: 'country', code: 'country' },
      { value: 'region', code: 'region' },
      { value: 'city', code: 'city' },
      { value: 'street', code: 'street' },
      { value: 'building', code: 'building' },
      { value: 'postalCode', code: 'postal_code' },
      { value: 'note', code: 'place_note' }
    ]
  },
  {
    label: 'bride',
    items: [
      { value: 'firstName', code: 'bride_first_name' },
      { value: 'lastName', code: 'bride_last_name' },
      { value: 'patronymic', code: 'bride_patronymic' },
      { value: 'age', code: 'bride_age' },
      { value: 'marriageNumber', code: 'bride_wedding_number' },
      { value: 'note', code: 'bride_name_note' }
    ]
  },
  {
    label: 'adress',
    items: [
      { value: 'country', code: 'bride_country' },
      { value: 'region', code: 'bride_region' },
      { value: 'city', code: 'bride_city' },
      { value: 'street', code: 'bride_street' },
      { value: 'building', code: 'bride_building' },
      { value: 'postalCode', code: 'bride_postal_code' },
      { value: 'note', code: 'bride_place_note' }
    ]
  },
  {
    label: 'brideFather',
    items: [
      { value: 'firstName', code: 'bride_father_first_name' },
      { value: 'lastName', code: 'bride_father_last_name' },
      { value: 'patronymic', code: 'bride_father_patronymic' },
      { value: 'note', code: 'bride_father_name_note' }
    ]
  },
  {
    label: 'weddingDate',
    items: [
      { value: 'date', code: 'wedding_date' },
      { value: 'note', code: 'wedding_date_note' }
    ]
  },
  {
    label: 'adress',
    items: [
      { value: 'country', code: 'wedding_country' },
      { value: 'region', code: 'wedding_region' },
      { value: 'city', code: 'wedding_city' },
      { value: 'street', code: 'wedding_street' },
      { value: 'building', code: 'wedding_building' },
      { value: 'postalCode', code: 'wedding_postal_code' },
      { value: 'note', code: 'wedding_place_note' }
    ]
  },
  {
    label: 'witness',
    items: [
      { value: 'firstName', code: 'witness_1_first_name' },
      { value: 'lastName', code: 'witness_1_last_name' },
      { value: 'patronymic', code: 'witness_1_patronymic' },
      { value: 'note', code: 'witness_1_name_note' }
    ]
  },
  {
    label: 'adress',
    items: [
      { value: 'country', code: 'witness_1_country' },
      { value: 'region', code: 'witness_1_region' },
      { value: 'city', code: 'witness_1_city' },
      { value: 'street', code: 'witness_1_street' },
      { value: 'building', code: 'witness_1_building' },
      { value: 'postalCode', code: 'witness_1_postal_code' },
      { value: 'note', code: 'witness_1_place_note' }
    ]
  },
  {
    label: 'witness_2',
    items: [
      { value: 'firstName', code: 'witness_2_first_name' },
      { value: 'lastName', code: 'witness_2_last_name' },
      { value: 'patronymic', code: 'witness_2_patronymic' },
      { value: 'note', code: 'witness_2_name_note' }
    ]
  },
  {
    label: 'adress',
    items: [
      { value: 'country', code: 'witness_2_country' },
      { value: 'region', code: 'witness_2_region' },
      { value: 'city', code: 'witness_2_city' },
      { value: 'street', code: 'witness_2_street' },
      { value: 'building', code: 'witness_2_building' },
      { value: 'postalCode', code: 'witness_2_postal_code' },
      { value: 'note', code: 'witness_2_place_note' }
    ]
  },
  {
    label: 'comments',
    items: [{ value: 'comments', code: 'comments' }]
  }
]

export const HPersonDeathContent: HistoricalFormDTO[] = [
  {
    label: 'name',
    items: [
      { value: 'firstName', code: 'firstName' },
      { value: 'lastName', code: 'lastName' },
      { value: 'patronymic', code: 'patronymic' },
      { value: 'age', code: 'age' },
      { value: 'note', code: 'name_note' }
    ]
  },
  {
    label: 'deathDate',
    items: [
      { value: 'date', code: 'death_date' },
      { value: 'note', code: 'death_date_note' }
    ]
  },
  {
    label: 'burialDate',
    items: [
      { value: 'date', code: 'burial_date' },
      { value: 'note', code: 'burial_date_note' }
    ]
  },
  {
    label: 'burialPlace',
    items: [
      { value: 'country', code: 'burial_country' },
      { value: 'region', code: 'burial_region' },
      { value: 'city', code: 'burial_city' },
      { value: 'street', code: 'burial_street' },
      { value: 'building', code: 'burial_building' },
      { value: 'postalCode', code: 'burial_postal_code' },
      { value: 'note', code: 'burial_place_note' }
    ]
  },
  {
    label: 'comments',
    items: [{ value: 'comments', code: 'comments' }]
  }
]

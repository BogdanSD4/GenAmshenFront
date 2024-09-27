import type { HistoricalFormDTO } from '@/pages/database/types/historicalTypes'

export const HBookContent: HistoricalFormDTO[] = [
  {
    label: 'archive',
    items: [
      { value: 'archiveName', code: 'archive' },
      { value: 'fund', code: 'fund' },
      { value: 'description', code: 'description' }
    ]
  },
  {
    label: 'archiveLocation',
    items: [
      { value: 'country', code: 'country' },
      { value: 'region', code: 'region' },
      { value: 'city', code: 'city' },
      { value: 'street', code: 'street' },
      { value: 'building', code: 'building' },
      { value: 'postalCode', code: 'index' },
      { value: 'note', code: 'note' }
    ]
  },
  {
    label: 'book',
    items: [
      { value: 'bookNumber', code: 'book_number' },
      { value: 'slideNumber', code: 'slide_number' },
      { value: 'pageNumber', code: 'page_number' },
      { value: 'note', code: 'book_note' }
    ]
  },
  {
    label: 'priest',
    items: [
      { value: 'firstName', code: 'priest_first_name' },
      { value: 'lastName', code: 'priest_last_name' },
      { value: 'patronymic', code: 'priest_patronymic' },
      { value: 'note', code: 'priest_note' }
    ]
  },
  {
    label: 'birthDate',
    items: [
      { value: 'date', code: 'priest_birth_date' },
      { value: 'note', code: 'priest_birth_date_note' }
    ]
  },
  {
    label: 'birthPlace',
    items: [
      { value: 'country', code: 'priest_birth_country' },
      { value: 'region', code: 'priest_birth_region' },
      { value: 'city', code: 'priest_birth_city' },
      { value: 'street', code: 'priest_birth_street' },
      { value: 'building', code: 'priest_birth_building' },
      { value: 'postalCode', code: 'priest_birth_postal' },
      { value: 'note', code: 'priest_birth_place_note' }
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
    label: 'comments',
    items: [{ value: 'comments', code: 'comments' }]
  }
]

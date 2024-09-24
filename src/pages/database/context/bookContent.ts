import type { HistoricalFormDTO } from '@/pages/database/types/historicalTypes'

export const HBookContent: HistoricalFormDTO[] = [
  {
    label: 'archive',
    items: ['archiveName', 'fund', 'description']
  },
  {
    label: 'archiveLocation',
    items: ['country', 'region', 'city', 'street', 'building', 'postalCode', 'note']
  },
  {
    label: 'book',
    items: ['bookNumber', 'slideNumber', 'pageNumber', 'note']
  },
  {
    label: 'priest',
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

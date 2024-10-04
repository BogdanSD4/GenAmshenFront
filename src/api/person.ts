import api from '@/api/axios/api'
import { userStore } from '@/stores/userRole'
import { UserRole } from '@/types/userRole'
import { computed } from 'vue'
import { toFormData } from '@/api/serializers/formData'
import type { ApprovePerson, Feedback } from '@/api/types/request'
import {
  type HistoricalPersonTls,
  type PersonInfo,
  PersonType
} from '@/pages/database/types/historicalTypes'
import type { PendingPerson } from '@/api/types/response'

const user = userStore()
const userType = computed(() => {
  console.log(user.role)
  switch (user.role) {
    case UserRole.USER:
      return 'by_clerk'
    case UserRole.MODER:
    case UserRole.ADMIN:
      return 'by_moder'
  }
  return ''
})

export async function getPersonData(params?: ApprovePerson): Promise<PersonInfo> {
  return await api.get(`api/check/${userType.value}/`, { params }).then((response) => response.data)
}

export async function createBook(book_capture: number, data: any): Promise<any> {
  return await api
    .post(`api/book/create/${userType.value}/`, toFormData(data), {
      params: { book_capture: book_capture }
    })
    .then((response) => response.data)
}

export async function updatePersonByModer(params: ApprovePerson, data: any) {
  return await api
    .put('api/check/by_moder/', toFormData(data), { params })
    .then((response) => response.data)
}

export async function createPerson(type: PersonType, params: any): Promise<any> {
  return await api.post(`api/${type}/${userType.value}/`, params).then((response) => response.data)
}

export async function updatePerson(type: PersonType, params: any): Promise<any> {
  switch (userType.value) {
    case 'by_moder':
      return await api
        .post(`api/${type}/${userType.value}/`, params)
        .then((response) => response.data)
    case 'by_clerk':
      return await api
        .put(`api/${type}/${userType.value}/`, params)
        .then((response) => response.data)
    default:
      throw new Error('Invalid user')
  }
}

export async function checkUserData(id: number): Promise<PendingPerson[]> {
  return await api
    .get('api/check/user_data/', { params: { user_id: id } })
    .then((response) => response.data)
}

export async function sendFeedback(params: Feedback): Promise<PendingPerson[]> {
  return await api.post('api/send/feedback/', toFormData(params)).then((response) => response.data)
}

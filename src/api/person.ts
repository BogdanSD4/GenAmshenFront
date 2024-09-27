import api from '@/api/axios/api'
import { userStore } from '@/stores/userRole'
import { UserRole } from '@/types/userRole'
import { computed } from 'vue'
import { toFormData } from '@/api/serializers/formData'
import type { ApprovePerson } from '@/api/types/request'
import {
  type HistoricalPersonTls,
  type PersonInfo,
  PersonType
} from '@/pages/database/types/historicalTypes'

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
  console.log(params)
  return await api.get(`api/check/${userType.value}/`, { params }).then((response) => response.data)
}

export async function createBook(params: any): Promise<any> {
  return await api
    .post(`api/book/create/${userType.value}/`, toFormData(params))
    .then((response) => response.data)
}

export async function updatePersonByModer(params: ApprovePerson, data: any) {
  return await api
    .post('api/check/by_moder/', toFormData(data), { params })
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

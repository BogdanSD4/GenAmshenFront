import api from '@/api/axios/api'
import { userStote } from '@/stores/userRole'
import { UserRole } from '@/types/userRole'
import { computed } from 'vue'
import { toFormData } from '@/api/serializers/formData'

const user = userStote()
const userType = computed(() => {
  switch (user.role) {
    case UserRole.USER:
      return 'by_clerk'
    case UserRole.MODER || UserRole.ADMIN:
      return 'by_moder'
  }
  return ''
})

export async function getPersonData(): Promise<any> {
  return await api.get(`api/data/get/${userType.value}/`).then((response) => response.data)
}

export async function createBook(params: any): Promise<any> {
  return await api
    .post(`api/book/create/${userType.value}/`, toFormData(params))
    .then((response) => response.data)
}

export async function createPersonBirth(params: any): Promise<any> {
  return await api.post(`api/person/${userType.value}/`, params).then((response) => response.data)
}
export async function createPersonMarriage(params: any): Promise<any> {
  return await api.post(`api/wedding/${userType.value}/`, params).then((response) => response.data)
}
export async function createPersonDeath(params: any): Promise<any> {
  return await api.post(`api/death/${userType.value}/`, params).then((response) => response.data)
}

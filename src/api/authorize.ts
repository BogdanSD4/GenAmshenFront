import api from '@/api/axios/api'
import { toFormData } from '@/api/serializers/formData'
import type { LoginResponse } from '@/api/types/response'
import type { Login } from '@/api/types/request'

export async function login(params: Login): Promise<LoginResponse> {
  return await api.post('users/sign_in/', toFormData(params)).then((response) => response.data)
}

export async function personInfo(): Promise<LoginResponse> {
  return await api.get('users/info/').then((response) => response.data)
}

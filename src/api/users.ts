import api from '@/api/axios/api'
import type { UserData, UserInfo } from '@/pages/users/components/userControl/types/userData'
import type { UserListResponce } from '@/api/types/request'
import { toFormData } from '@/api/serializers/formData'
import type { PendingResponse } from '@/api/types/response'

export async function userList(params: UserListResponce): Promise<UserInfo[]> {
  return await api.get('users/list/', { params }).then((response) => response.data)
}

export async function userAdd(params: UserData): Promise<UserInfo[]> {
  return await api.post('users/create/', toFormData(params)).then((response) => response.data)
}

export async function userDelete(id: number): Promise<any> {
  return await api.delete('users/delete/', { params: { id: id } }).then((response) => response)
}

export async function userEdit(id: number): Promise<UserData> {
  return await api.get('users/detail/', { params: { id: id } }).then((response) => response.data)
}

export async function userUpdate(params: UserData): Promise<any> {
  return await api.put('users/update/', toFormData(params)).then((response) => response.data)
}

export async function pendingList(): Promise<PendingResponse[]> {
  return await api.get('users/pending/').then((response) => response.data)
}

export async function changePhoto(photo: File): Promise<any> {
  return await api
    .put('users/photo/', toFormData({ photo: photo }))
    .then((response) => response.data)
}

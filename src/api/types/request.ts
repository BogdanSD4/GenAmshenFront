import type { UserType } from '@/pages/users/components/userControl/types/userData'

export interface Login {
  username: string
  password: string
}

export interface UserListResponce {
  group_id: UserType
}

export interface ApprovePerson {
  id: number
  capture: number
}

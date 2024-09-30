export interface LoginResponse {
  id: number
  token: string
  username: string
  email: string
  role: string
  photo: string
  first_name: string
  last_name: string
  background_photo: string
}

export interface PendingResponse {
  id: number
  user: PendingUser
}
export interface PendingUser {
  id: number
  first_name: string
  last_name: string
  photo: string
  capture: number
}

export interface PendingPerson {
  id: number
  first_name: string
  last_name: string
}

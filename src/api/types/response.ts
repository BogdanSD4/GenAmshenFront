export interface LoginResponse {
  id: number
  token: string
  username: string
  email: string
  groups: string
  photo: string
  first_name: string
  last_name: string
  background_photo: string
}

export interface PendingResponse {
  id: number
  first_name: string
  last_name: string
  photo: string
}

export interface PendingPerson {
  id: number
  first_name: string
  last_name: string
}

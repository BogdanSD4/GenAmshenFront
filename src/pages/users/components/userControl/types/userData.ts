export interface UserData {
  username: string
  email: string
  first_name: string
  last_name: string
  patronymic: string
  names_note: string
  birth_date?: string
  birthday_note: string
  country: string
  region: string
  city: string
  street: string
  building: string
  postal: string
  photo?: File | string
  background_photo?: File | string
  address_note: string
  comments: string
  groups: UserType[]
  password: string
  id?: number
}

export interface UserInfo {
  id: number
  first_name: string
  last_name: string
  photo: string
}

export enum UserType {
  NONE = 0,
  MODER = 2,
  CLERK = 3
}

export enum UserMenuType {
  NONE = 'none',
  clerkList = 'clist',
  clerkAdd = 'cadd',
  moderList = 'mlist',
  moderAdd = 'madd'
}

export interface EditUser {
  user: UserType
  id: number
}

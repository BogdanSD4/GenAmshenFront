import { defineStore } from 'pinia'
import { UserRole } from '@/types/userRole'
import { useCookies } from 'vue3-cookies'
import { personInfo } from '@/api/authorize'
import router from '@/router'
import { modalStore, ModalTypes } from '@/stores/modalViews'

interface State {
  id: number
  role: UserRole
  username: string
  email: string
  photo: string
  first_name: string
  last_name: string
  background_photo: string
}

const defaultState: State = {
  id: -1,
  role: UserRole.GUEST,
  username: '',
  email: '',
  photo: '',
  first_name: '',
  last_name: '',
  background_photo: ''
}

export const userStore = defineStore('user', {
  state: (): State => {
    return { ...defaultState }
  },
  actions: {
    async valid() {
      let result = true
      await personInfo()
        .then((response) => {
          this.setRole(response.role)
          this.id = response.id
          this.username = response.username
          this.email = response.email
          this.photo = response.photo
          this.first_name = response.first_name
          this.last_name = response.last_name
          this.background_photo = response.background_photo
        })
        .catch((error) => (result = false))

      return result
    },
    setRole(role: string) {
      switch (role) {
        case 'Administrator':
          this.role = UserRole.ADMIN
          break
        case 'Moderator':
          this.role = UserRole.MODER
          break
        case 'Clerk':
          this.role = UserRole.USER
          break
        default:
          throw new Error('Unknown user role')
      }
    },
    access(role: UserRole, only: boolean = false) {
      if (only) return this.role == role

      switch (role) {
        case UserRole.ADMIN:
          return [UserRole.ADMIN].includes(this.role)
        case UserRole.MODER:
          return [UserRole.MODER, UserRole.ADMIN].includes(this.role)
        case UserRole.USER:
          return [UserRole.USER, UserRole.MODER, UserRole.ADMIN].includes(this.role)
        default:
          throw new Error('Unknown user role')
      }
    },
    async logout() {
      const cookies = useCookies().cookies
      cookies.remove('gen_token')
      this.$state = { ...defaultState }

      const modal = modalStore()
      modal.activate(ModalTypes.FIRST)
      await router.push('/login')
    }
  }
})

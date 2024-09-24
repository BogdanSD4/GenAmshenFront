import { apiConfiguration } from '@/api/axios/apiConfig'

const api = apiConfiguration(import.meta.env.VITE_API_URL)

export default api

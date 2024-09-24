import axios, { type AxiosInstance } from 'axios'
import { useCookies } from 'vue3-cookies'

const cookies = useCookies().cookies

export function apiConfiguration(url: string): AxiosInstance {
  const instance = axios.create()
  instance.interceptors.request.use((config) => {
    console.log(config.url)
    if (!config.url?.includes(url)) config.url = url + config.url

    const token = cookies.get('gen_token')
    console.log(token)
    if (token) {
      config.headers.Authorization = `Token ${token}`
    }

    return config
  })

  return instance
}

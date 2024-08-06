import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export type PropsFetcher = {
  url: string
  method?: string
  data?: any
  headers?: {}
}

const instance: AxiosInstance = axios.create({
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
})

export async function handlerAxios({
  url,
  method = 'get',
  data,
  headers,
}: AxiosRequestConfig<any>) {
  try {
    const all = await instance({
      method,
      url,
      data,
      headers,
    })
    return { data: all.data, status: all.status }
  } catch (e: any) {
    return { status: e.response.status, data: e.response.data }
  }
}

import { useMutation, useQuery } from '@tanstack/vue-query'
import appConfig from '~/app.config'

const request = $fetch.create({
  baseURL: appConfig.backendApiUrl,
})

export const useCreateText = () =>
  useMutation({
    mutationFn: (text: string) =>
      request<Text>('/create/', {
        method: 'POST',
        body: { textshare_text: text },
      }),
  })

export const useGetText = (textId: string) =>
  useQuery({
    queryKey: ['detail'],
    queryFn: () => request<Text>(`/detail/${textId}`),
  })

type Text = {
  id: number
  textshare_text: string
  textshare_datecreate: string
  textshare_update: string
  textshare_url: string
}

import { revalidate, useFetch } from 'atomic-utils'

export function useUser() {
  return useFetch<{
    user: {
      name: string
      email: string
      image: string
    }
    expires: string
  }>('/auth/session', {
    maxCacheAge: '15 sec',
    id: 'User',
    onResolve() {
      revalidate('GET /preferences')
    },
    transform(data) {
      return 'user' in data ? data : null!
    }
  })
}


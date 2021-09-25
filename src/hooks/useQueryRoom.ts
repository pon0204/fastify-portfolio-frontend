import axios from 'axios'
import { useQuery } from 'react-query'
import { Room } from '../types/types'

export const useQueryRoom = (id: string) => {
  const getRoom = async () => {
    const { data } = await axios.get<Room>(
      `${process.env.REACT_APP_REST_URL}/room/${id}`
    )
    // data.posts.map((v: any) => (v.genre = v.genre.split(',')))
    return data
  }

  return useQuery({
    queryKey: 'room',
    queryFn: getRoom,
    staleTime: 10000,
  })
}

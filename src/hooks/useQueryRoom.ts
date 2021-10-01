import axios from 'axios'
import { useQuery } from 'react-query'
import { useAppDispatch } from '../app/hooks'
import { setChats } from '../slices/chatSlice'
import { setEditedRoom } from '../slices/roomSlice'
import { Room } from '../types/types'

export const useQueryRoom = (id: string) => {
  const dispatch = useAppDispatch()
  const getRoom = async () => {
    const { data } = await axios.get<Room>(
      `${process.env.REACT_APP_REST_URL}/room/${id}`
    )
    const editedRoom = {
      title: data.room.title,
      purpose: data.room.purpose,
      myName: data.room.myName,
      partnerName: data.room.partnerName,
      myPhotoURL: '',
      partnerPhotoURL: '',
    }
    const chats = JSON.parse(data.room.chat)
    dispatch(setEditedRoom({ ...editedRoom }))
    dispatch(setChats(chats))

    return data
  }

  return useQuery({
    queryKey: 'room',
    queryFn: getRoom,
    staleTime: 10000,
  })
}

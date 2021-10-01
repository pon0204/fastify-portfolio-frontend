import axios from 'axios'
import { useMutation } from 'react-query'
import { useAppSelector } from '../app/hooks'
import { selectChat } from '../slices/chatSlice'
import { selectEditedRoom } from '../slices/roomSlice'

export const useMutateRoom = () => {
  const editedRoom = useAppSelector(selectEditedRoom)
  const chat = useAppSelector(selectChat)

  const room = {
    title: editedRoom.title,
    purpose: editedRoom.purpose,
    myName: editedRoom.myName,
    partnerName: editedRoom.partnerName,
    chat: JSON.stringify(chat),
  }
  const createRoomMutation = useMutation(
    () => axios.post(`${process.env.REACT_APP_REST_URL}/room`, room),
    {
      onSuccess: (res) => {
        console.log(res.data)
      },
    }
  )

  return createRoomMutation
}

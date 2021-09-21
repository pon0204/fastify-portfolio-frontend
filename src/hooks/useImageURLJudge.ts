import React from 'react'
import { useAppSelector } from '../app/hooks'
import { selectEditedRoom } from '../slices/roomSlice'
import defaultPhoto from '../image/profile_default.png'

export const useImageURLJudge = () => {
  const editedRoom = useAppSelector(selectEditedRoom)

  const imageURLJudge = (isMe:boolean):string => {
    const image:string = isMe ? editedRoom.myPhotoURL : editedRoom.partnerPhotoURL
    if(image === ''){
      return defaultPhoto 
    }else{
      return image
    }
  }
  return {
    imageURL: (isMe:boolean) => imageURLJudge(isMe)
  }
}

import React, { VFC } from 'react'
import { useAppSelector } from '../../../app/hooks'
import { useImageURLJudge } from '../../../hooks/useImageURLJudge'
import { selectEditedRoom } from '../../../slices/roomSlice'

interface props {
  isMe: boolean
}

const Avatar: VFC<props> = ({ isMe }) => {
  const editedRoom = useAppSelector(selectEditedRoom)
  const imageURLJudge = useImageURLJudge()

  return (
    <div>
      <img
        src={imageURLJudge.imageURL(isMe)}
        className='mb-1 w-16 h-16 bg-indigo-200 rounded-full'
        alt=''
      />
      <p className='text-center text-sm'>
        {isMe ? editedRoom.myName : editedRoom.partnerName}
      </p>
    </div>
  )
}

export default Avatar

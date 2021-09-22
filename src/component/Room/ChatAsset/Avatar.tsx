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
        className='rounded-full w-16 h-16 bg-indigo-200 mb-1'
        alt=''
      />
      <p className='text-center text-sm'>
        {isMe ? editedRoom.myName : editedRoom.partnerName}
      </p>
    </div>
  )
}

export default Avatar

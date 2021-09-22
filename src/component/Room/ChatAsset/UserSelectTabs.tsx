import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { useImageURLJudge } from '../../../hooks/useImageURLJudge'
import { selectEditedChat, setEditedIsMe } from '../../../slices/chatSlice'
import { selectEditedRoom } from '../../../slices/roomSlice'

export default function UserSelectTabs() {
  const dispatch = useAppDispatch()
  const editedChat = useAppSelector(selectEditedChat)
  const editedRoom = useAppSelector(selectEditedRoom)
  const imageURLJudge = useImageURLJudge()

  return (
    <div className='flex w-full h-20 bg-white'>
      <div
        onClick={() => dispatch(setEditedIsMe(false))}
        className={
          'w-1/2 border cursor-pointer ' +
          (!editedChat.isMe && 'border-blue-600')
        }
      >
        <div className='mx-auto w-full pt-1 text-center'>
          <img
            src={imageURLJudge.imageURL(false)}
            className='rounded-full w-12 h-12 bg-indigo-200 mx-auto'
            alt=''
          />
          <p>{editedRoom.partnerName}</p>
        </div>
      </div>
      <div
        onClick={() => dispatch(setEditedIsMe(true))}
        className={
          'w-1/2 border cursor-pointer ' +
          (editedChat.isMe && 'border-blue-600')
        }
      >
        <div className='mx-auto w-full pt-1 text-center'>
          <img
            src={imageURLJudge.imageURL(true)}
            className='rounded-full w-12 h-12 bg-indigo-200 mx-auto'
            alt=''
          />
          <p className=''>{editedRoom.myName}</p>
        </div>
      </div>
    </div>
  )
}

import { Icon } from '@iconify/react'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
  resetEditedChat,
  selectEditedChat,
  setChat,
  setEditedChat,
  setEditedIsMeReverse,
} from '../../../slices/chatSlice'

const InputForm = () => {
  const dispatch = useAppDispatch()
  const editedChat = useAppSelector(selectEditedChat)

  return (
    <div className='relative h-full'>
      <textarea
        className='p-4 w-full h-full bg-gray-100'
        placeholder='考えを入力'
        value={editedChat.text}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          dispatch(setEditedChat(event.target.value))
        }
      />
      {!editedChat.text ? (
        <button className='absolute bottom-6 right-6 w-12 h-12 text-white bg-blue-700 rounded-full opacity-30'>
          <Icon
            icon='heroicons-solid:paper-airplane'
            rotate={1}
            className='mx-auto text-2xl'
          />
        </button>
      ) : (
        <button
          className='absolute bottom-6 right-6 w-12 h-12 text-white bg-blue-700 rounded-full'
          onClick={() => {
            dispatch(setChat())
            dispatch(resetEditedChat())
            dispatch(setEditedIsMeReverse())
          }}
        >
          <Icon
            icon='heroicons-solid:paper-airplane'
            rotate={1}
            className='mx-auto text-2xl'
          />
        </button>
      )}
    </div>
  )
}

export default InputForm

import React from 'react'
import { Icon } from '@iconify/react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { resetEditedChat, selectEditedChat, setChat, setEditedChat } from '../../../slices/chatSlice';

// ユーザー1と2を切り替えるボタン

const InputForm = () => {
  const dispatch = useAppDispatch()
  const editedChat = useAppSelector(selectEditedChat)

  return (
    <div className='h-full relative'>
      <textarea className='h-full w-full bg-gray-100 p-4' placeholder='考えを入力' value={editedChat.text}
      onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => dispatch(setEditedChat(event.target.value))}
        />
      {
      !editedChat.text ?
        <button className='rounded-full bg-blue-700 opacity-30 w-12 h-12 absolute right-6 bottom-6 text-white'>
          <Icon icon="heroicons-solid:paper-airplane" rotate={1} className='text-2xl mx-auto'/>
        </button>      
      :
        <button className='rounded-full bg-blue-700 w-12 h-12 absolute right-6 bottom-6 text-white'
        onClick={() => {
          dispatch(setChat(''))
          dispatch(resetEditedChat())
          }
        }
        >
          <Icon icon="heroicons-solid:paper-airplane" rotate={1} className='text-2xl mx-auto'/>
        </button> 
      }
    </div>
  )
}

export default InputForm
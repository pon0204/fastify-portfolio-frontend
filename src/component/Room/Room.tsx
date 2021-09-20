import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectChat } from '../../slices/chatSlice'
import { Chat } from '../../types/types'
import ChatBox from './RoomAsset/ChatBox'
import InputForm from './RoomAsset/InputForm'

const Room = () => {
  const chatData = useAppSelector(selectChat)

  return (
    <div className='py-12 px-20'>
      {
      chatData.map((chat:Chat,index:number) => (
        <ChatBox userName={chat.userName} direction={chat.direction} text={chat.text}/>
      ))
      }
      <div className='fixed border h-32 w-11/12 rounded-md bottom-4 left-1/2 transform -translate-x-1/2'>
        <InputForm/>
      </div>
    </div>
  )
}

export default Room

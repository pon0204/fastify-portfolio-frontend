import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectChat } from '../../slices/chatSlice'
import { Chat } from '../../types/types'
import ChatBox from './RoomAsset/ChatBox'

const Room = () => {
  const chatData = useAppSelector(selectChat)
  
  return (
    <div className='py-12 px-20'>
      {
      chatData.map((chat:Chat,index:number) => (
        <ChatBox userName={chat.userName} direction={chat.direction} text={chat.text}/>
      ))
      }
    </div>
  )
}

export default Room

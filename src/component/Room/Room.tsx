import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectChat } from '../../slices/chatSlice'
import { Chat } from '../../types/types'
import ChatBox from './RoomAsset/ChatBox'
import InputForm from './RoomAsset/InputForm'
import UserSelectTabs from './RoomAsset/UserSelectTabs'

const Room = () => {
  const chatData = useAppSelector(selectChat)

  return (
    <div className='pt-24 pb-96 px-20'>
      <div className='fixed w-40 bg-indigo-500 p-4 text-white text-center font-bold top-1 right-4 text-md'>保 存</div>
      {
      chatData.map((chat:Chat,index:number) => (
        <ChatBox isMe={chat.isMe} text={chat.text} key={index}/>
      ))
      }
      <div className='fixed border h-32 w-11/12 rounded-md bottom-20 left-1/2 transform -translate-x-1/2'>
        <UserSelectTabs/>
        <InputForm/>
        <div className='h-4 bg-white'/>
      </div>
    </div>
  )
}

export default Room

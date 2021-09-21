import React,{ useEffect } from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectChat } from '../../slices/chatSlice'
import { Chat, Chats } from '../../types/types'
import ChatBox from './RoomAsset/ChatBox'
import InputForm from './RoomAsset/InputForm'
import UserSelectTabs from './RoomAsset/UserSelectTabs'

const Room = () => {
  const chatData:Chat[] = useAppSelector(selectChat)

  const ScrollBottom = (target:HTMLElement) => {
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  useEffect(() => {
    const target = document.getElementById("target");
    if (target) {
        ScrollBottom(target)
    }
    }, [chatData])

  return (
    <div className='pt-24 px-20'>
      <div className='fixed w-40 bg-red-500 p-4 text-white text-center font-bold top-1 right-4 text-md'>保 存</div>
      {
      chatData.map((chat:Chat,index:number) => (
        <ChatBox isMe={chat.isMe} text={chat.text} key={index}/>
      ))
      }
      <div className='fixed border h-32 w-11/12 rounded-md bottom-24 left-1/2 transform -translate-x-1/2'>
        <UserSelectTabs/>
        <InputForm/>
        <div className='h-4 bg-white'/>
      </div>
      <div id='target' className='h-60'></div>
    </div>
  )
}

export default Room

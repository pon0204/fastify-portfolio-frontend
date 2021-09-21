import React,{ useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectChat } from '../../slices/chatSlice'
import { selectEditedRoom, selectEditedRoomMode, setRoomEditMode } from '../../slices/roomSlice'
import { Chat, Chats, editedRoom } from '../../types/types'
import ChatBox from './ChatAsset/ChatBox'
import InputForm from './ChatAsset/InputForm'
import RoomConfigModal from './RoomConfigModal'
import UserSelectTabs from './ChatAsset/UserSelectTabs'

const Room = () => {
  const chatData:Chat[] = useAppSelector(selectChat)
  const RoomEditMode: boolean = useAppSelector(selectEditedRoomMode)
  const dispatch = useAppDispatch()

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
      {RoomEditMode &&
        <RoomConfigModal/>
      }
      <div className='fixed top-1 right-4 flex gap-2'>
        <button onClick={() => dispatch(setRoomEditMode(true))} className='w-40 bg-gray-400 p-4 text-white text-center font-bold text-md'>編 集</button>
        <button className='w-40 bg-red-500 p-4 text-white text-center font-bold text-md'>保 存</button>
      </div>
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

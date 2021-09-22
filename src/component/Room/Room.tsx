import React, { useEffect } from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectChat } from '../../slices/chatSlice'
import { selectEditedRoomMode } from '../../slices/roomSlice'
import { Chat } from '../../types/types'
import ChatBox from './ChatAsset/ChatBox'
import InputForm from './ChatAsset/InputForm'
import UserSelectTabs from './ChatAsset/UserSelectTabs'
import RoomConfigModal from './RoomConfigModal'

const Room = () => {
  const chatData: Chat[] = useAppSelector(selectChat)
  const RoomEditMode: boolean = useAppSelector(selectEditedRoomMode)

  const ScrollBottom = (target: HTMLElement) => {
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }

  useEffect(() => {
    const target = document.getElementById('target')
    if (target) {
      ScrollBottom(target)
    }
  }, [chatData])

  return (
    <div className='pt-40 px-20'>
      {RoomEditMode && <RoomConfigModal />}
      {chatData.map((chat: Chat, index: number) => (
        <ChatBox isMe={chat.isMe} text={chat.text} key={index} />
      ))}
      <div className='fixed bottom-24 left-1/2 w-11/12 h-32 border rounded-md transform -translate-x-1/2'>
        <UserSelectTabs />
        <InputForm />
        <div className='h-4 bg-white' />
      </div>
      <div id='target' className='h-60'></div>
    </div>
  )
}

export default Room

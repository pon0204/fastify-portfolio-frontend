import React from 'react'
import ChatBox from './RoomAsset/ChatBox'

const chatData = [
  {
    direction: 'left',
    text: 'ほげい1'
  },
  {
    direction: 'left',
    text: 'ほげい2'
  },
  {
    direction: 'right',
    text: 'ほげい3'
  },
]

console.log(chatData[0])

const Room = () => {
  return (
    <div className='py-12 px-4 lg:px-20 '>
      {
      chatData.map((chat,index) => (
        <ChatBox direction={chat.direction} text={chat.text}/>
      ))
      }
    </div>
  )
}

export default Room

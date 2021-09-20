import React,{ FC } from 'react'
import Avatar from './Avatar'
import SpeechBallon from './SpeechBallon'

interface props {
  userName: string
  direction: string,
  text: string
}

const ChatBox:FC<props> = (props) => {
  return (
    <div>
      {props.direction === 'left' ?
      <div className='flex  justify-start'>
        <div className='flex mb-8'>
          <Avatar userName={props.userName}/>
          <SpeechBallon text={props.text}/>
        </div>
      </div>
      :
      <div className='flex  justify-end'>
        <div className='flex mb-8'>
          <SpeechBallon text={props.text}/>
          <Avatar userName={props.userName}/>
        </div>
      </div>
      }
    </div>
  )
}

export default ChatBox

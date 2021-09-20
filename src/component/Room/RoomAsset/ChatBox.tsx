import React,{ FC } from 'react'
import Avatar from './Avatar'
import SpeechBallon from './SpeechBallon'

interface props {
  isMe: boolean
  text: string
}

const ChatBox:FC<props> = (props) => {
  return (
    <div>
      {props.isMe ?
      <div className='flex  justify-end'>
        <div className='flex mb-8'>
          <SpeechBallon text={props.text}/>
          <Avatar userName={'自分'}/>
        </div>
      </div>
      :
      <div className='flex  justify-start'>
        <div className='flex mb-8'>
          <Avatar userName={'相手'}/>
          <SpeechBallon text={props.text}/>
        </div>
      </div>

      }
    </div>
  )
}

export default ChatBox

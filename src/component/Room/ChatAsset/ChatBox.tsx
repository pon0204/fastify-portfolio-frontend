import React, { FC } from 'react'
import Avatar from './Avatar'
import SpeechBallon from './SpeechBallon'

interface props {
  isMe: boolean
  text: string
}

const ChatBox: FC<props> = (props) => {
  return (
    <div>
      {props.isMe ? (
        <div className='flex  justify-end'>
          <div className='flex mb-4'>
            <SpeechBallon isMe={props.isMe} text={props.text} />
            <Avatar isMe={props.isMe} />
          </div>
        </div>
      ) : (
        <div className='flex  justify-start'>
          <div className='flex mb-4'>
            <Avatar isMe={props.isMe} />
            <SpeechBallon isMe={props.isMe} text={props.text} />
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatBox

import React,{ FC } from 'react'
import Avatar from './Avatar'
import SpeechBallon from './SpeechBallon'

interface props {
  direction: string,
  text: string
}
const ChatBox:FC<props> = (props) => {

  return (
    <div>
      {props.direction === 'left' ?
      <div className='flex  justify-start'>
        <div className='flex mb-8'>
          <Avatar/>
          <SpeechBallon text={'テキスト'}/>
        </div>
      </div>
      :
      <div className='flex  justify-end'>
        <div className='flex mb-8'>
          <SpeechBallon text={'テキスト'}/>
          <Avatar/>
        </div>
      </div>

      }
    </div>
  )
}

export default ChatBox

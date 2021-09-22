import React, { FC } from 'react'

interface props {
  isMe: boolean
  text: string
}

const SpeechBallon:FC<props>= (props) => {
  return (
    <div className='mx-4 pt-2'>
      {
      props.isMe ? 
        <div className='w-96 bg-blue-500 p-4 text-white text-lg break-all'>
          {props.text}
        </div>
      :
        <div className='w-96 bg-gray-300 p-4 break-normal break-all'>
          {props.text}
        </div>
      }
    </div>
  )
}

export default SpeechBallon

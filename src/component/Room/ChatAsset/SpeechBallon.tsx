import React, { VFC } from 'react'

interface props {
  isMe: boolean
  text: string
}

const SpeechBallon: VFC<props> = (props) => {
  return (
    <div className='mx-4 pt-2'>
      {props.isMe ? (
        <div className='p-4 w-96 text-white break-all text-lg bg-blue-500'>
          {props.text}
        </div>
      ) : (
        <div className='p-4 w-96 break-all break-normal bg-gray-300'>
          {props.text}
        </div>
      )}
    </div>
  )
}

export default SpeechBallon

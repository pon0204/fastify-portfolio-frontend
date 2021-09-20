import React,{FC} from 'react'

interface props {
  text: string
}

const SpeechBallon:FC<props>= ({text}) => {
  return (
    <div className='mx-4'>
      <div className='w-96 bg-indigo-300 p-4'>
        {text}
        {text}
        {text}
        {text}
        {text}
        {text}
        {text}
        {text}
      </div>
    </div>
  )
}

export default SpeechBallon

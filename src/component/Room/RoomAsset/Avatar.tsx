import React,{ FC } from 'react'

interface props {
  userName : string
}

const Avatar:FC<props> = ({userName}) => {
  return (
    <div>
      <div className='rounded-full w-16 h-16 bg-indigo-200'/>
      <p className='text-center text-sm'>{userName}</p>
    </div>
  )
}

export default Avatar

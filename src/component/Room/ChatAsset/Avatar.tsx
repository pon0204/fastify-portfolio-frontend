import React,{ FC } from 'react'
import defaultPhoto from '../../../image/profile_default.png'

interface props {
  userName : string
}

const Avatar:FC<props> = ({userName}) => {
  return (
    <div>
        <img src={defaultPhoto} className="rounded-full w-16 h-16 bg-indigo-200 mb-1" alt=""/>
      <p className='text-center text-sm'>{userName}</p>
    </div>
  )
}

export default Avatar

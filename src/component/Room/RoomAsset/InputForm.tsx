import React from 'react'
import { Icon } from '@iconify/react';

const InputForm = () => {
  return (
    <div className='h-full relative'>
      <textarea className='h-full w-full bg-gray-100 p-4'></textarea>
      <button className='rounded-full bg-blue-700 w-12 h-12 absolute right-6 bottom-6 text-white '>
        <Icon icon="heroicons-solid:paper-airplane" rotate={1} className='text-2xl mx-auto'/>
      </button>      
    </div>
  )
}

export default InputForm
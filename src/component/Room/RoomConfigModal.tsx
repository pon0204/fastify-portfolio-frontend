import React from 'react'
import RoomInputForm from './RoomModalAsset/RoomInputForm'

const RoomConfigModal = () => {
  return (
    <div className='fixed z-10 left-0 top-0 w-full h-full bg-gray-500 bg-opacity-30'>
      <div className='absolute z-20 left-1/2 top-1/2 w-2/3 h-2/3 bg-white transform -translate-x-1/2 -translate-y-1/2'>
        <h2 className='py-2 text-center text-gray-600 text-2xl font-bold'>
          Room設定
        </h2>
        <RoomInputForm />
      </div>
    </div>
  )
}

export default RoomConfigModal

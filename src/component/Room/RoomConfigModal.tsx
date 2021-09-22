import React from 'react'
import RoomInputForm from './RoomModalAsset/RoomInputForm'

const RoomConfigModal = () => {
  return (
    <div className='bg-opacity-30 fixed top-0 left-0 w-full h-full bg-gray-500 z-10'>
      <div className='w-2/3 h-2/3 bg-white top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 z-20'>
        <h2 className='text-center py-2 text-2xl font-bold text-gray-600'>
          Room設定
        </h2>
        <RoomInputForm />
      </div>
    </div>
  )
}

export default RoomConfigModal

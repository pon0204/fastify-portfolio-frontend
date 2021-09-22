import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectEditedRoom, setRoomEditMode } from '../slices/roomSlice'

const Layout: FC = ({ children }) => {
  const dispatch = useAppDispatch()
  const editedRoom = useAppSelector(selectEditedRoom)
  const location = useLocation()

  if (location.pathname === '/room') {
    return (
      <div>
        <div className='fixed flex justify-between w-full h-16 bg-blue-600'>
          <div className='flex items-center'>
            <Link to='/' className='mr-4 p-4 text-white text-2xl font-bold'>
              Empty Room
            </Link>
            <h2 className='text-left text-white text-xl'>
              <span className='text-lg'>タイトル</span> : {editedRoom.title}
            </h2>
          </div>
          <div className='flex items-center'>
            <button
              onClick={() => dispatch(setRoomEditMode(true))}
              className='text-md mx-2 p-4 w-40 text-center text-white font-bold bg-gray-400'
            >
              編 集
            </button>
            <button className='text-md mx-2 p-4 w-40 text-center text-white font-bold bg-red-500'>
              保 存
            </button>
          </div>
        </div>
        <div className='h4 fixed top-16 p-2 w-full bg-indigo-300'>
          【目的】{editedRoom.purpose}
        </div>
        <div>{children}</div>
      </div>
    )
  }

  return (
    <div>
      <div className='fixed flex justify-between w-full h-16 bg-blue-600'>
        <Link to='/' className='mr-4 p-4 text-white text-2xl font-bold'>
          Empty Room
        </Link>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Layout

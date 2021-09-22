import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectEditedRoom, setRoomEditMode } from '../slices/roomSlice'

const Layout: FC = ({children}) => {
  const dispatch = useAppDispatch()
  const editedRoom = useAppSelector(selectEditedRoom)
  const location = useLocation()

  if(location.pathname === '/room'){
    return (
      <div>
      <div className='h-16 bg-blue-600 flex fixed w-full justify-between'>
        <div className='flex items-center'>
          <Link to='/' className='p-4 text-2xl text-white font-bold mr-4'>
            Empty Room
          </Link>
          <h2 className='text-white text-left text-xl'><span className='text-lg'>タイトル</span> : {editedRoom.title}</h2>
        </div>
        <div className='flex items-center'>
          <button onClick={() => dispatch(setRoomEditMode(true))} className='w-40 bg-gray-400 p-4 text-white text-center font-bold text-md mx-2'>編 集</button>
          <button className='w-40 bg-red-500 p-4 text-white text-center font-bold text-md mx-2'>保 存</button>
        </div>
      </div>
      <div className='h4 bg-indigo-300 fixed top-16 w-full p-2'>【目的】{editedRoom.purpose}</div>
      <div>
        {children}  
      </div>
      </div>
    )
  }

  return (
    <div>
      <div className='h-16 bg-blue-600 flex fixed w-full justify-between'>
        <Link to='/' className='p-4 text-2xl text-white font-bold mr-4'>
          Empty Room
        </Link>
      </div>
      <div>
        {children}  
      </div>
    </div>
  )
}

export default Layout

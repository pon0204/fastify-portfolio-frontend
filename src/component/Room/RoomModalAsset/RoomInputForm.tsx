import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectEditedRoom, setEditedRoom, setRoomEditMode } from '../../../slices/roomSlice';
import RoomFormFile from './RoomFormFile';

const RoomInputForm = () => {
  const dispatch = useAppDispatch()
  const editedRoom = useAppSelector(selectEditedRoom)

  return (
    <div className='h-full relative'>
      <h3 className='pl-10'>タイトル</h3>
      <input type='text' className='w-11/12 bg-gray-100 p-4 mx-auto block my-2' placeholder='アイディア壁打ち' value={editedRoom.title}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(setEditedRoom({...editedRoom,title: event.target.value}))}
        />
      <h3 className='pl-10 pb-1'>目的</h3>
      <input type='text' className='w-11/12 bg-gray-100 p-4 mx-auto block' placeholder='自分のアイディアを相手に説得出来るレベルまで考え抜く' value={editedRoom.purpose}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(setEditedRoom({...editedRoom,purpose: event.target.value}))}
        />
      <div className='flex text-center justify-center'>
        <div className='mx-20'>
          <RoomFormFile isMe={true}/>
          <input type='text' className='w-24 bg-gray-100 p-2 mx-auto block text-center' placeholder='自分' value={editedRoom.myName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(setEditedRoom({...editedRoom,myName: event.target.value}))}
          />
        </div>
        <div className='mx-20'>
          <RoomFormFile isMe={false}/>
          <input type='text' className='w-24 bg-gray-100 p-2 mx-auto block text-center' placeholder='相手' value={editedRoom.partnerName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(setEditedRoom({...editedRoom,partnerName: event.target.value}))}
          />
        </div>
      </div>
      {
      editedRoom.title === '' || editedRoom.purpose === '' ?
        <button disabled className='bg-blue-700 opacity-60 w-24 h-16 absolute right-6 bottom-16 text-white'>
          未入力有り
        </button>      
      :
        <button className='bg-blue-700 w-24 h-16 absolute right-6 bottom-16 text-white'
        onClick={() => dispatch(setRoomEditMode(false))}>
          保存
        </button>      
      }
    </div>
  )
}

export default RoomInputForm
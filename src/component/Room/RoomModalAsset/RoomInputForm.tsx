import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
  selectEditedRoom,
  setEditedRoom,
  setRoomEditMode,
} from '../../../slices/roomSlice'
import RoomFormFile from './RoomFormFile'

const RoomInputForm = () => {
  const dispatch = useAppDispatch()
  const editedRoom = useAppSelector(selectEditedRoom)

  return (
    <div className='relative h-full'>
      <h3 className='pl-10'>タイトル</h3>
      <input
        type='text'
        className='block mx-auto my-2 p-4 w-11/12 bg-gray-100'
        placeholder='アイディア壁打ち'
        value={editedRoom.title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setEditedRoom({ ...editedRoom, title: event.target.value }))
        }
      />
      <h3 className='pb-1 pl-10'>目的</h3>
      <input
        type='text'
        className='block mx-auto p-4 w-11/12 bg-gray-100'
        placeholder='自分のアイディアを相手に説得出来るレベルまで考え抜く'
        value={editedRoom.purpose}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(
            setEditedRoom({ ...editedRoom, purpose: event.target.value })
          )
        }
      />
      <div className='flex justify-center text-center'>
        <div className='mx-20'>
          <RoomFormFile isMe={false} />
          <input
            type='text'
            className='block mx-auto p-2 w-24 text-center bg-gray-100'
            placeholder='相手'
            value={editedRoom.partnerName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(
                setEditedRoom({
                  ...editedRoom,
                  partnerName: event.target.value,
                })
              )
            }
          />
        </div>
        <div className='mx-20'>
          <RoomFormFile isMe={true} />
          <input
            type='text'
            className='block mx-auto p-2 w-24 text-center bg-gray-100'
            placeholder='自分'
            value={editedRoom.myName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(
                setEditedRoom({ ...editedRoom, myName: event.target.value })
              )
            }
          />
        </div>
      </div>
      {editedRoom.title === '' || editedRoom.purpose === '' ? (
        <button
          disabled
          className='absolute bottom-16 right-6 w-24 h-16 text-white bg-blue-700 opacity-60'
        >
          未入力有り
        </button>
      ) : (
        <button
          className='absolute bottom-16 right-6 w-24 h-16 text-white bg-blue-700'
          onClick={() => dispatch(setRoomEditMode(false))}
        >
          保存
        </button>
      )}
    </div>
  )
}

export default RoomInputForm

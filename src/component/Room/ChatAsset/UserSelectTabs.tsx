import React, { useEffect,useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectEditedChat, setEditedIsMe } from '../../../slices/chatSlice';
import defaultPhoto from '../../../image/profile_default.png'

export default function UserSelectTabs() {
  const dispatch = useAppDispatch()
  const editedChat = useAppSelector(selectEditedChat)

  return (
    <div className='flex w-full h-20 bg-white'>
      <div 
      onClick={() => dispatch(setEditedIsMe(false))}
      className={'w-1/2 border cursor-pointer ' + (!editedChat.isMe && 'border-blue-600')}>
        <div className='mx-auto w-10 pt-2 text-center'>
        <img src={defaultPhoto} className="rounded-full w-10 h-10 bg-indigo-200 mb-1" alt=""/>
          <p className=''>相手</p>
        </div>
      </div>
      <div 
      onClick={() => dispatch(setEditedIsMe(true))}
      className={'w-1/2 border cursor-pointer ' + (editedChat.isMe && 'border-blue-600')}>
      <div className='mx-auto w-10 pt-2 text-center'>
        <img src={defaultPhoto} className="rounded-full w-10 h-10 bg-indigo-200 mb-1" alt=""/>
          <p className=''>自分</p>
        </div>
      </div>
    </div>
  );
}
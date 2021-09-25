import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { Chat } from '../types/types'

export interface chatState {
  chats: Chat[]
  editedChat: Chat
}

const initialState: chatState = {
  chats: [],
  editedChat: {
    isMe: true,
    text: '',
  },
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChat: (state) => {
      state.chats = [...state.chats, state.editedChat]
    },
    setChats: (state, action: PayloadAction<any>) => {
      state.chats = action.payload
    },
    setEditedChat: (state, action: PayloadAction<string>) => {
      state.editedChat.text = action.payload
    },
    resetEditedChat: (state) => {
      state.editedChat.text = ''
    },
    setEditedIsMe: (state, action: PayloadAction<boolean>) => {
      state.editedChat.isMe = action.payload
    },
    setEditedIsMeReverse: (state) => {
      state.editedChat.isMe = !state.editedChat.isMe
    },
  },
})

export const {
  setChat,
  setChats,
  setEditedChat,
  setEditedIsMe,
  setEditedIsMeReverse,
  resetEditedChat,
} = chatSlice.actions
export const selectChat = (state: RootState) => state.chat.chats
export const selectEditedChat = (state: RootState) => state.chat.editedChat
export default chatSlice.reducer

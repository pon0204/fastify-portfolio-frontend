import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { Chats,Chat } from '../types/types'

export interface chatState {
  chat: Chats
  editedChat: Chat
}

const initialState:any = {
  chat: [
  ],
  editedChat: {
    isMe: true,
    text: ''
  }
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChat: (state) => {
      state.chat = [...state.chat,state.editedChat]
    },
    setEditedChat: (state,action: PayloadAction<string>) => {
      state.editedChat.text = action.payload
    },
    resetEditedChat: (state) => {
      state.editedChat.text = ''
    },
    setEditedIsMe: (state) => {
      state.editedChat.isMe = !state.editedChat.isMe
    },
}
})

export const { setChat, setEditedChat,setEditedIsMe,resetEditedChat } = chatSlice.actions
export const selectChat = (state: RootState) => state.chat.chat
export const selectEditedChat = (state: RootState) => state.chat.editedChat
export default chatSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { Chats } from '../types/types'

export interface chatState {
  chat: Chats
}

const initialState:any = {
  chat: [
    {
    userName: 'ユーザー1',
    direction: 'left',
    text: 'テキスト1'
    },
    {
    userName: 'ユーザー2',
    direction: 'right',
    text: 'テキスト2'
    },
]
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChat: (state, action: PayloadAction) => {
      state.chat = action.payload
    },
}
})

export const { setChat } = chatSlice.actions
export const selectChat = (state: RootState) => state.chat.chat
export default chatSlice.reducer

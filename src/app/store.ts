import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import chatReducer from '../slices/chatSlice'
import roomReducer from '../slices/roomSlice'

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    room: roomReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { editedRoom } from '../types/types'

export interface roomState {
  editedRoom: editedRoom
  RoomEditMode: boolean
}

const initialState: roomState = {
  editedRoom: {
    title: '',
    purpose: '',
    myName: '自分',
    partnerName: '相手',
    myPhotoURL: '',
    partnerPhotoURL: '',
    // myPhoto:  {name: '', lastModified: 0},
    // partnerPhoto:  {name: '', lastModified: 0},
  },
  RoomEditMode: true,
}

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setEditedRoom: (state, action: PayloadAction<editedRoom>) => {
      state.editedRoom = action.payload
    },
    setRoomEditMode: (state, action: PayloadAction<boolean>) => {
      state.RoomEditMode = action.payload
    },
  },
})

export const { setEditedRoom, setRoomEditMode } = roomSlice.actions
export const selectEditedRoom = (state: RootState) => state.room.editedRoom
export const selectEditedRoomMode = (state: RootState) =>
  state.room.RoomEditMode
export default roomSlice.reducer

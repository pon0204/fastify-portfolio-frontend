import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { editedRoom } from '../types/types'

export interface roomState {
  editedRoom: editedRoom
}

const initialState:roomState = {
  editedRoom: {
    title: '',
    purpose: '',
    myName: '',
    partnerName: ''
  }
}

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setEditedRoom: (state,action: PayloadAction<editedRoom>) => {
      state.editedRoom = action.payload
    },
}
})

export const { setEditedRoom } = roomSlice.actions
export const selectEditedRoom = (state: RootState) => state.room.editedRoom
export default roomSlice.reducer

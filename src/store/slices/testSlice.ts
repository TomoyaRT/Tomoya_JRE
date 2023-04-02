import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  testValue: 0,
}

export const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.testValue += action.payload
    },
    sub: (state, action: PayloadAction<number>) => {
      state.testValue -= action.payload
    },
  },
})

export const { add, sub } = testSlice.actions
export default testSlice.reducer

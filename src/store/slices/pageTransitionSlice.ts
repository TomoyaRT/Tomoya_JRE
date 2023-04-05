import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
}

export const pageTransitionSlice = createSlice({
  name: 'pageTransitionSlice',
  initialState,
  reducers: {
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { updateLoading } = pageTransitionSlice.actions
export default pageTransitionSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  isLoading: boolean
  loadingType: string
}

const initialState: InitialState = {
  isLoading: true,
  loadingType: 'App',
}

interface SetLoadingPayloadAction {
  loading: boolean
  type: string
}

export const loadingSlice = createSlice({
  name: 'loadingSlice',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<SetLoadingPayloadAction>) => {
      const { loading, type } = action.payload
      state.isLoading = loading
      state.loadingType = type
    },
  },
})

export const { setLoading } = loadingSlice.actions
export default loadingSlice.reducer

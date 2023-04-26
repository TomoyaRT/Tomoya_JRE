import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from '@/store/slices/loadingSlice'

export const store = configureStore({
  reducer: {
    loadingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

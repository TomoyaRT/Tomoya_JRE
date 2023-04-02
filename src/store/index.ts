import { configureStore } from '@reduxjs/toolkit'
import testReducer from '@/store/slices/testSlice'

export const store = configureStore({
  reducer: {
    testReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

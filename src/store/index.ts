import { configureStore } from '@reduxjs/toolkit'
import pageTransitionReducer from '@/store/slices/pageTransitionSlice'

export const store = configureStore({
  reducer: {
    pageTransitionReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

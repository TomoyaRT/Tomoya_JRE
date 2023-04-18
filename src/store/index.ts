import { configureStore } from '@reduxjs/toolkit'
import pageTransitionReducer from '@/store/slices/pageTransitionSlice'
import loadingReducer from '@/store/slices/loadingSlice'

export const store = configureStore({
  reducer: {
    pageTransitionReducer,
    loadingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

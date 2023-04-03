import { configureStore } from '@reduxjs/toolkit'
import testReducer from '@/store/slices/testSlice'
import pageTransitionReducer from '@/store/slices/pageTransitionSlice'

export const store = configureStore({
  reducer: {
    testReducer,
    pageTransitionReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

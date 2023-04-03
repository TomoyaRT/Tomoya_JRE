import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  // 開始跳轉頁面
  routeChangeStart: false,
  // 完成跳轉頁面
  routeChangeComplete: false,
  // 完成頁面跳轉的轉場動畫
  pageTransitionComplete: false,
}

export const pageTransitionSlice = createSlice({
  name: 'pageTransitionSlice',
  initialState,
  reducers: {
    // TODO 改成兩種方法 開始轉場 與 結束轉場
    updateRouteStart: (state, action: PayloadAction<boolean>) => {
      state.routeChangeStart = action.payload
    },
    updateRouteComplete: (state, action: PayloadAction<boolean>) => {
      state.routeChangeComplete = action.payload
    },
    updateTransitionComplete: (state, action: PayloadAction<boolean>) => {
      state.pageTransitionComplete = action.payload
    },
  },
})

export const {
  updateRouteStart,
  updateRouteComplete,
  updateTransitionComplete,
} = pageTransitionSlice.actions
export default pageTransitionSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface AppState {
  active: string,
  windows: string[]
}

const initialState: AppState = {
  active: 'temp',
  windows: []
}

export const taskbarSlice = createSlice({
  name: 'taskbar',
  initialState,
  reducers: {
    setActiveWindow: (state, action: PayloadAction<string>) => {
      state.active = action.payload;
    },
    addWindow: (state, action: PayloadAction<string>) => {
      state.windows.push(action.payload);
    },
    removeWindow: (state, action: PayloadAction<string>) => {
      const index = state.windows.indexOf(action.payload);
      if (index !== -1) {
        state.windows.splice(index, 1);
      }
    }
  }
})

export const {
  setActiveWindow,
  addWindow,
  removeWindow
} = taskbarSlice.actions;

export const selectActive = (state: RootState) => state.taskbar.active;
export const selectWindows = (state: RootState) => state.taskbar.windows;

export default taskbarSlice.reducer;

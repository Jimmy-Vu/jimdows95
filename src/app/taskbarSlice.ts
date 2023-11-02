import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface AppState {
  windows: { title: string, id: string }[]
}

const initialState: AppState = {
  windows: [{ title: 'About Me', id: 'aboutMe' }]
}

export const taskbarSlice = createSlice({
  name: 'taskbar',
  initialState,
  reducers: {
    addWindow: (state, action: PayloadAction<{title: string, id: string}>) => {
      state.windows.push(action.payload);
    },
    removeWindow: (state, action: PayloadAction<{ title: string, id: string }>) => {
      const index = state.windows.indexOf(action.payload);
      if (index !== -1) {
        state.windows.splice(index, 1);
      } else {
        console.error({ error: 'Removal of window from taskbar failed.' })
      }
    }
  }
})

export const {
  addWindow,
  removeWindow
} = taskbarSlice.actions;

export const selectWindows = (state: RootState) => state.taskbar.windows;

export default taskbarSlice.reducer;

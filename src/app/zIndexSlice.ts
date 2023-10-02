import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface AppState {
  active: string,
  windows: string[]
}

const initialState: AppState = {
  active: 'temp',
  windows: ['aboutMe', 'projects', 'contactMe', 'sorryHal', 'colosseum', 'vicarus', 'jimdows95', 'nhh']
}

export const zIndexSlice = createSlice({
  name: 'zIndex',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setActiveWindow: (state, action: PayloadAction<string>) => {
      state.active = action.payload;
      state.windows.splice(state.active.indexOf(action.payload), 1);
      state.windows.push(action.payload);
    }
  }
})

export const {
  setActiveWindow
} = zIndexSlice.actions;

export const selectWindows = (state: RootState) => state.zIndexes.windows;

export default zIndexSlice.reducer;

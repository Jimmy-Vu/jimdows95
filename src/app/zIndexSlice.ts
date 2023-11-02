import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface AppState {
  active: string,
  windows: string[]
}

const initialState: AppState = {
  active: 'temp',
  // windows go by their id names, not their title names
  windows: ['aboutMe', 'projects', 'contactMe', 'sorryHal', 'colosseum', 'vicarus', 'jimdows95', 'nhh']
}

export const zIndexSlice = createSlice({
  name: 'zIndex',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setActiveWindow: (state, action: PayloadAction<string>) => {
      const index = state.windows.indexOf(action.payload);
      if (index !== -1) {
        // Remove the item from its current position
        state.windows.splice(index, 1);
        // Add it to the end to make it the active window
        state.windows.push(action.payload);
        // Update the active property
        state.active = action.payload;
      }
    }
  }
})

export const {
  setActiveWindow
} = zIndexSlice.actions;

export const selectActive = (state: RootState) => state.zIndexes.active;
export const selectWindows = (state: RootState) => state.zIndexes.windows;

export default zIndexSlice.reducer;

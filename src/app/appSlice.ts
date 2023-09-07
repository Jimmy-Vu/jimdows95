import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

interface AppState {
  aboutMeIsOpen: boolean,
  projectsIsOpen: boolean,
  contactMeIsOpen: boolean,
  sorryHalIsOpen: boolean
}

const initialState: AppState = {
  aboutMeIsOpen: true,
  projectsIsOpen: false,
  contactMeIsOpen: false,
  sorryHalIsOpen: false
}

export const appSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAboutMeState: (state, action: PayloadAction<boolean>) => {
      state.aboutMeIsOpen = action.payload
    },
    setProjectsState: (state, action: PayloadAction<boolean>) => {
      state.projectsIsOpen = action.payload
    },
    setContactMeState: (state, action: PayloadAction<boolean>) => {
      state.contactMeIsOpen = action.payload
    },
    setSorryHalIsOpen: (state, action: PayloadAction<boolean>) => {
      state.sorryHalIsOpen = action.payload
    }
  }
});

export const { setAboutMeState, setProjectsState, setContactMeState, setSorryHalIsOpen  } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAboutMeState = (state: RootState) => state.app.aboutMeIsOpen;
export const selectProjectsState = (state: RootState) => state.app.projectsIsOpen;
export const selectContactMeState = (state: RootState) => state.app.contactMeIsOpen;
export const selectSorryHalState = (state: RootState) => state.app.sorryHalIsOpen;

export default appSlice.reducer;

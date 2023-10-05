import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

interface AppState {
  aboutMe: {
    aboutMeIsOpen: boolean,
    aboutMeIsMax: boolean
  },
  projects: {
    projectsIsOpen: boolean,
    projectsIsMax: boolean
  },
  contactMe: {
    contactMeIsOpen: boolean,
    contactMeIsMax: boolean
  },
  sorryHal: {
    sorryHalIsOpen: boolean,
    sorryHalIsMax: boolean
  }
}

const initialState: AppState = {
  aboutMe: {
    aboutMeIsOpen: true,
    aboutMeIsMax: false
  },
  projects: {
    projectsIsOpen: false,
    projectsIsMax: false
  },
  contactMe: {
    contactMeIsOpen: false,
    contactMeIsMax: false
  },
  sorryHal: {
    sorryHalIsOpen: false,
    sorryHalIsMax: false
  }
}

export const appSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAboutMeOpenState: (state, action: PayloadAction<boolean>) => {
      state.aboutMe.aboutMeIsOpen = action.payload
    },
    setAboutMeMaxState: (state, action: PayloadAction<boolean>) => {
      state.aboutMe.aboutMeIsMax = action.payload
    },
    setProjectsOpenState: (state, action: PayloadAction<boolean>) => {
      state.projects.projectsIsOpen = action.payload
    },
    setProjectsMaxState: (state, action: PayloadAction<boolean>) => {
      state.projects.projectsIsMax = action.payload
    },
    setContactMeOpenState: (state, action: PayloadAction<boolean>) => {
      state.contactMe.contactMeIsOpen = action.payload
    },
    setContactMeMaxState: (state, action: PayloadAction<boolean>) => {
      state.contactMe.contactMeIsMax = action.payload
    },
    setSorryHalOpenState: (state, action: PayloadAction<boolean>) => {
      state.sorryHal.sorryHalIsOpen = action.payload
    },
    setSorryHalMaxState: (state, action: PayloadAction<boolean>) => {
      state.sorryHal.sorryHalIsMax = action.payload
    }
  }
});

export const {
  setAboutMeOpenState,
  setAboutMeMaxState,
  setProjectsOpenState,
  setProjectsMaxState,
  setContactMeOpenState,
  setContactMeMaxState,
  setSorryHalOpenState,
  setSorryHalMaxState
} = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAboutMeOpenState = (state: RootState) => state.app.aboutMe.aboutMeIsOpen;
export const selectAboutMeMaxState = (state: RootState) => state.app.aboutMe.aboutMeIsMax;

export const selectProjectsOpenState = (state: RootState) => state.app.projects.projectsIsOpen;
export const selectProjectsMaxState = (state: RootState) => state.app.projects.projectsIsMax;

export const selectContactMeOpenState = (state: RootState) => state.app.contactMe.contactMeIsOpen;
export const selectContactMeMaxState = (state: RootState) => state.app.contactMe.contactMeIsMax;

export const selectSorryHalOpenState = (state: RootState) => state.app.sorryHal.sorryHalIsOpen;
export const selectSorryHalmaxState = (state: RootState) => state.app.sorryHal.sorryHalIsMax;

export default appSlice.reducer;

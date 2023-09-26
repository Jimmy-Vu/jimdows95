import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface ProjectsState {
  colosseum: {
    colosseumIsOpen: boolean,
    colosseumIsMax: boolean
  },
  vicarus: {
    vicarusIsOpen: boolean,
    vicarusIsMax: boolean
  },
  jimdows95: {
    jimdows95IsOpen: boolean,
    jimdows95IsMax: boolean
  },
  nhh: {
    nhhIsOpen: boolean,
    nhhIsMax: boolean
  }
}

const initialState: ProjectsState = {
  colosseum: {
    colosseumIsOpen: false,
    colosseumIsMax: false
  },
  vicarus: {
    vicarusIsOpen: false,
    vicarusIsMax: false
  },
  jimdows95: {
    jimdows95IsOpen: false,
    jimdows95IsMax: false
  },
  nhh: {
    nhhIsOpen: false,
    nhhIsMax: false
  }
}

export const projectsSlice = createSlice({
  name: 'projects',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setColosseumOpenState: (state, action: PayloadAction<boolean>) => {
      state.colosseum.colosseumIsOpen = action.payload
    },
    setColosseumMaxState: (state, action: PayloadAction<boolean>) => {
      state.colosseum.colosseumIsMax = action.payload
    },
    setVicarusOpenState: (state, action: PayloadAction<boolean>) => {
      state.vicarus.vicarusIsOpen = action.payload
    },
    setVicarusMaxState: (state, action: PayloadAction<boolean>) => {
      state.vicarus.vicarusIsMax = action.payload
    },
    setJimdows95OpenState: (state, action: PayloadAction<boolean>) => {
      state.jimdows95.jimdows95IsOpen = action.payload
    },
    setJimdowsMaxState: (state, action: PayloadAction<boolean>) => {
      state.jimdows95.jimdows95IsMax = action.payload
    },
    setNHHOpenState: (state, action: PayloadAction<boolean>) => {
      state.nhh.nhhIsOpen = action.payload
    },
    setNHHMaxState: (state, action: PayloadAction<boolean>) => {
      state.nhh.nhhIsMax = action.payload
    }
  }
});

export const {
  setColosseumOpenState,
  setColosseumMaxState,
  setVicarusOpenState,
  setVicarusMaxState,
  setJimdows95OpenState,
  setJimdowsMaxState,
  setNHHOpenState,
  setNHHMaxState
} = projectsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectColosseumOpenState = (state: RootState) => state.projects.colosseum.colosseumIsOpen;
export const selectColosseumMaxState = (state: RootState) => state.projects.colosseum.colosseumIsMax;

export const selectVicarusOpenState = (state: RootState) => state.projects.vicarus.vicarusIsOpen;
export const selectVicarusMaxState = (state: RootState) => state.projects.vicarus.vicarusIsMax;

export const selectJimdows95OpenState = (state: RootState) => state.projects.jimdows95.jimdows95IsOpen;
export const selectJimdows95MaxState = (state: RootState) => state.projects.jimdows95.jimdows95IsMax;

export const selectNHHOpenState = (state: RootState) => state.projects.nhh.nhhIsOpen;
export const selectNHHMaxState = (state: RootState) => state.projects.nhh.nhhIsMax;

export default projectsSlice.reducer;

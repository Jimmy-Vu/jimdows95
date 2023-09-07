import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface ProjectsState {
  colosseumIsOpen: boolean,
  vicarusIsOpen: boolean,
  jimdows95IsOpen: boolean,
  nhhIsOpen: boolean
}

const initialState: ProjectsState = {
  colosseumIsOpen: false,
  vicarusIsOpen: true,
  jimdows95IsOpen: false,
  nhhIsOpen: false
}

export const projectsSlice = createSlice({
  name: 'projects',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setColosseumState: (state, action: PayloadAction<boolean>) => {
      state.colosseumIsOpen = action.payload
    },
    setVicarusState: (state, action: PayloadAction<boolean>) => {
      state.vicarusIsOpen = action.payload
    },
    setJimdows95State: (state, action: PayloadAction<boolean>) => {
      state.jimdows95IsOpen = action.payload
    },
    setNHHState: (state, action: PayloadAction<boolean>) => {
      state.nhhIsOpen = action.payload
    }
  }
});

export const { setColosseumState, setVicarusState, setJimdows95State, setNHHState } = projectsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectColosseumState = (state: RootState) => state.projects.colosseumIsOpen;
export const selectVicarusState = (state: RootState) => state.projects.vicarusIsOpen;
export const selectJimdows95State = (state: RootState) => state.projects.jimdows95IsOpen;
export const selectNHHState = (state: RootState) => state.projects.nhhIsOpen;

export default projectsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'dark',
  currentPage: '/',
  notification: '4',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleMode: (state) => {
        state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
    setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
    },
  },
});

export const { toggleMode, setCurrentPage } = appSlice.actions;

export default appSlice.reducer;

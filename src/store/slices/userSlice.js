import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Shubham Paliwal',
  type: 'Admin',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  user: {
    name: '',
    age: 0,
    email: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUserInfos: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserInfos } = userSlice.actions;

export default userSlice.reducer;

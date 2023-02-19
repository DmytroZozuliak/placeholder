import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  isLogged: boolean;
  userName: string | null;
}

const initialState: User = {
  isLogged: !!localStorage.getItem('userName'),
  userName: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<{ name: string }>) => {
      state.isLogged = true;
      state.userName = action.payload.name;
      localStorage.setItem('userName', action.payload.name);
    },
    logOut: (state) => {
      state.isLogged = false;
      state.userName = null;
      localStorage.removeItem('userName');
    },
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;

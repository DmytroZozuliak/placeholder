import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface InitialStateInterface {
//   isLogged: boolean;
//   userName: string | null;
// }

const initialState = {
  isLogged: !!localStorage.getItem('userName'),
  userName: 'admin',
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
      state.userName = '';
      localStorage.removeItem('userName');
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;

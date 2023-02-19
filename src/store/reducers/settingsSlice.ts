import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Settings {
  theme: string;
  language: string;
}

const initialState: Settings = {
  theme: localStorage.getItem('theme') || 'dark',
  language: localStorage.getItem('i18nextLng') || 'en',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    settingsToggleTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', state.theme);
    },
    settingsToggleLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
  },
});

export const { reducer: settingsReducer, actions: settingsActions } = settingsSlice;

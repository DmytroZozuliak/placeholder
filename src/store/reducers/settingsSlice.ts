import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { languageStorage, themeStorage } from '../../utils/localStorageModels';

export interface Settings {
  theme: string;
  language: string;
}

const initialState: Settings = {
  theme: themeStorage.getItem() || 'dark',
  language: languageStorage.getItem() || 'en',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    settingsToggleTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      themeStorage.setItem(state.theme);
    },
    settingsToggleLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
  },
});

export const { reducer: settingsReducer, actions: settingsActions } = settingsSlice;

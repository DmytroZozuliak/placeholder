import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { themeMode } from '../../theme/theme';
import { languageStorage, themeStorage } from '../../utils/localStorageModels';

export interface Settings {
  theme: string;
  language: string;
}

const initialState: Settings = {
  theme: themeStorage.getItem() || themeMode.dark,
  language: languageStorage.getItem() || 'en',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    settingsToggleTheme(state) {
      state.theme = state.theme === themeMode.dark ? themeMode.light : themeMode.dark;
      themeStorage.setItem(state.theme);
    },
    settingsToggleLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
  },
});

export const { reducer: settingsReducer, actions: settingsActions } = settingsSlice;

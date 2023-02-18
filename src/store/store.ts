import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import settingsSlice from './reducers/settingsSlice';
import boardSlice from './reducers/boardSlice';
import snackSlice from './reducers/snackSlice';

const rootReducer = combineReducers({
  user: userReducer,
  settings: settingsSlice,
  board: boardSlice,
  snack: snackSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) => gDM(),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

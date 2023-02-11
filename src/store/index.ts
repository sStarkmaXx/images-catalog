import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cardsReducer } from './slices/cards.slice';

const rootReducer = combineReducers({
  cards: cardsReducer,
});

export const createStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];

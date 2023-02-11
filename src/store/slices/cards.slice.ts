import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CardType = {
  image: string;
  filesize: number;
  timestamp: number;
  category: string;
};

type CardsResponceType = {
  loading: boolean;
  error: string;
  cards: CardType[];
};

const initialState: CardsResponceType = {
  loading: false,
  error: '',
  cards: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<CardType[]>) {
      state.loading = false;
      state.cards = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const cardsActions = cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;

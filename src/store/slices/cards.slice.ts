import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CardType = {
  image: string;
  filesize: number;
  timestamp: number;
  category: string;
};

type CardsType = {
  loading: boolean;
  error: string;
  cards: CardType[];
  closedCards: Array<string>;
};

const initialState: CardsType = {
  loading: false,
  error: '',
  cards: [],
  closedCards: localStorage.getItem('closedCards')?.split(',') || [],
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
    closeCard(state, action: PayloadAction<string>) {
      state.closedCards?.push(action.payload);
      localStorage.setItem('closedCards', state.closedCards!.join(','));
    },
    restoreCards(state) {
      state.closedCards = [];
      localStorage.removeItem('closedCards');
    },
  },
});

export const cardsActions = cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;

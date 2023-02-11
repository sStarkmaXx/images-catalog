import axios from '../../axios';
import { AppDispatch } from '../index';
import { cardsActions } from '../slices/cards.slice';

export const fetchCards = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(cardsActions.fetching());
      const responce = await axios.get('catalog.json');
      dispatch(cardsActions.fetchSuccess(responce.data));
      console.log(responce);
    } catch (e) {
      dispatch(cardsActions.fetchError(e as Error));
    }
  };
};

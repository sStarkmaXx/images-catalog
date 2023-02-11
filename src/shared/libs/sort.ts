import { CardKeysType, CardType } from '../../store/slices/cards.slice';
import { Draft } from '@reduxjs/toolkit';
import { getFileName } from './getFileName';

export const sort = (arr: Draft<CardType>[], type: CardKeysType) => {
  let sortedArr;
  if (type === 'category') {
    sortedArr = arr.sort((a, b) => {
      if (a[type] > b[type]) {
        return 1;
      }
      if (a[type] < b[type]) {
        return -1;
      }
      return 0;
    });
  } else if (type === 'image') {
    sortedArr = arr.sort((a, b) => {
      if (getFileName(a[type]) > getFileName(b[type])) {
        return 1;
      }
      if (getFileName(a[type]) < getFileName(b[type])) {
        return -1;
      }
      return 0;
    });
  } else {
    sortedArr = arr.sort((a, b) => a[type] - b[type]);
  }
  return sortedArr;
};

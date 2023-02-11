import { v1 } from 'uuid';
import ImageCard from '../components/ImageCard';
import { Box, Pagination } from '@mui/material';
import { CardType } from '../store/slices/cards.slice';
import { useRef, useState } from 'react';

type CardsViewPropsType = {
  cards: CardType[];
};

const CardsView: React.FC<CardsViewPropsType> = ({ cards = [] }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 30;
  const pagesCount = useRef(Math.ceil(cards.length / pageSize));

  const cardsForRender = () => {
    const lastIndex = pageSize * currentPage - 1;
    let firstIndex = lastIndex - pageSize + 1;
    const cardsForRender = [];
    for (let i = firstIndex; i <= lastIndex; i++) {
      if (cards[i]) {
        cardsForRender.push(cards[i]);
      } else {
        return;
      }
    }
    return cardsForRender;
  };

  const cardsRender = cardsForRender()?.map((card) => {
    return <ImageCard key={v1()} card={card} />;
  });

  const onChangeHandler = (e: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        gap: '20px',
      }}
    >
      {cardsRender}
      <Pagination count={pagesCount.current} onChange={onChangeHandler} />
    </Box>
  );
};

export default CardsView;

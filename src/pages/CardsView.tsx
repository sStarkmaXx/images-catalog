import { v1 } from 'uuid';
import ImageCard from '../components/ImageCard';
import { Box } from '@mui/material';
import { CardType } from '../store/slices/cards.slice';

type CardsViewPropsType = {
  cards: CardType[];
};

const CardsView: React.FC<CardsViewPropsType> = ({ cards = [] }) => {
  const cardsRender = cards.map((card) => {
    return <ImageCard key={v1()} card={card} />;
  });

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
    </Box>
  );
};

export default CardsView;

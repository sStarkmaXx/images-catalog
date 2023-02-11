import { v1 } from 'uuid';
import ImageCard from './ImageCard';
import { Box } from '@mui/material';

export type CardType = {
  image: string;
  filesize: number;
  timestamp: number;
  category: string;
};

const CardsView = () => {
  const data = [
    {
      image: 'animals/animals-2939726__480.jpg',
      filesize: 74353,
      timestamp: 1393824669830,
      category: 'animals',
    },
    {
      image: 'animals/annas-hummingbird-5837675__480.jpg',
      filesize: 23729,
      timestamp: 1434946533948,
      category: 'animals',
    },
    {
      image: 'animals/australian-shepherd-5902417__480.jpg',
      filesize: 32397,
      timestamp: 1534059476248,
      category: 'animals',
    },
    {
      image: 'animals/baby-monkey-4888534__480.jpg',
      filesize: 52480,
      timestamp: 1425205376562,
      category: 'animals',
    },
    {
      image: 'animals/beach-5064674__480.jpg',
      filesize: 78331,
      timestamp: 1557913558128,
      category: 'animals',
    },
    {
      image: 'animals/bear-5846065__480.jpg',
      filesize: 17058,
      timestamp: 1602228419473,
      category: 'animals',
    },
    {
      image: 'animals/bee-4235093__480.jpg',
      filesize: 39349,
      timestamp: 1398174208559,
      category: 'animals',
    },
    {
      image: 'animals/bee-5749361__480.jpg',
      filesize: 34074,
      timestamp: 1422027098387,
      category: 'animals',
    },
    {
      image: 'animals/bird-5491117__480.jpg',
      filesize: 13981,
      timestamp: 1418484572592,
      category: 'animals',
    },
    {
      image: 'animals/bird-5905555__480.jpg',
      filesize: 54135,
      timestamp: 1480733218510,
      category: 'animals',
    },
    {
      image: 'animals/birds-5101153__340.jpg',
      filesize: 17373,
      timestamp: 1583588190643,
      category: 'animals',
    },
    {
      image: 'animals/birds-5797634__480.jpg',
      filesize: 47352,
      timestamp: 1512602709714,
      category: 'animals',
    },
    {
      image: 'animals/blackbird-5810073__480.jpg',
      filesize: 34619,
      timestamp: 1444254834318,
      category: 'animals',
    },
    {
      image: 'animals/blackbird-5814541__480.jpg',
      filesize: 53042,
      timestamp: 1526572319379,
      category: 'animals',
    },
  ];

  const cards = data.map((card) => {
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
      {cards}
    </Box>
  );
};

export default CardsView;

import { useState } from 'react';
import { Card, CardHeader, CardMedia, IconButton, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CardType, cardsActions } from '../store/slices/cards.slice';
import { useAppDispatch } from '../hook/redux';

type ImageCardPropsType = {
  card: CardType;
  isClosed: boolean;
};

const ImageCard: React.FC<ImageCardPropsType> = ({ card, isClosed }) => {
  const dispatch = useAppDispatch();
  const [closed, setClosed] = useState(isClosed);

  const onClickHandler = () => {
    setClosed(true);
    dispatch(cardsActions.closeCard(card.image));
  };

  return (
    <Paper
      elevation={8}
      sx={{
        display: `${closed ? 'none' : 'block'}`,
      }}
    >
      <Card sx={{ width: 350, height: 300 }}>
        <CardMedia
          component="img"
          image={'http://contest.elecard.ru/frontend_data/' + card.image}
          alt="Paella dish"
          height={200}
          sx={{
            backgroundColor: '#eceff1',
            objectFit: 'contain',
            margin: 'auto',
          }}
        />
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={onClickHandler}>
              <CloseIcon />
            </IconButton>
          }
          title={card.category}
          subheader={new Date(card.timestamp).toLocaleDateString()}
          sx={{ height: 100, backgroundColor: '#b0bec5' }}
        />
      </Card>
    </Paper>
  );
};

export default ImageCard;

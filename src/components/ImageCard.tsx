import * as React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Divider,
  Paper,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CardType } from './CardsView';

type ImageCardPropsType = {
  card: CardType;
};

const ImageCard: React.FC<ImageCardPropsType> = ({ card }) => {
  const [fade, setFade] = React.useState(true);

  return (
    <Paper
      elevation={8}
      sx={{
        display: `${fade ? 'block' : 'none'}`,
      }}
    >
      <Card sx={{ width: 400, height: 300 }}>
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
            <IconButton aria-label="settings" onClick={() => setFade(false)}>
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

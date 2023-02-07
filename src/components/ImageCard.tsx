import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { CardType } from './CardsView';

type ImageCardPropsType = {
  card: CardType;
};

const ImageCard: React.FC<ImageCardPropsType> = ({ card }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <CloseIcon />
          </IconButton>
        }
        title={card.category}
        subheader={new Date(card.timestamp).toLocaleDateString()}
      />
      <CardMedia
        component="img"
        height="194"
        image={'http://contest.elecard.ru/frontend_data/' + card.image}
        alt="Paella dish"
      />
    </Card>
  );
};

export default ImageCard;

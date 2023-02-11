import { v1 } from 'uuid';
import ImageCard from '../components/ImageCard';
import {
  Badge,
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Pagination,
  Radio,
  RadioGroup,
} from '@mui/material';
import {
  CardKeysType,
  CardType,
  cardsActions,
} from '../store/slices/cards.slice';
import { useRef, useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useAppSelector, useAppDispatch } from '../hook/redux';
import { sort } from '../shared/libs/sort';

type CardsViewPropsType = {
  cards: CardType[];
};

const CardsView: React.FC<CardsViewPropsType> = ({ cards = [] }) => {
  const dispatch = useAppDispatch();
  const closedImages = useAppSelector((state) => state.cards.closedCards);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<CardKeysType>('category');
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
    let isClosed = false;
    if (closedImages) {
      isClosed = !!closedImages.find((image) => image === card.image);
    }

    return <ImageCard key={v1()} card={card} isClosed={isClosed} />;
  });

  const onChangeHandler = (e: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const restoreImagesHandler = () => {
    dispatch(cardsActions.restoreCards());
  };

  const setSortHandler = (type: CardKeysType) => {
    dispatch(cardsActions.sortCards(type));
    setSortBy(type);
  };

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: '20px',
          alignItems: 'center',
        }}
      >
        <FormControl sx={{ flexDirection: 'row' }}>
          <FormLabel
            id="sort"
            focused={false}
            sx={{
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              fontSize: '20px',
            }}
          >
            Sort by:
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="sort"
            name="types"
            sx={{ marginLeft: '20px' }}
          >
            <FormControlLabel
              value="category"
              control={<Radio />}
              label="Category"
              onClick={() => setSortHandler('category')}
              checked={sortBy === 'category'}
            />
            <FormControlLabel
              value="date"
              control={<Radio />}
              label="Date"
              onClick={() => setSortHandler('timestamp')}
              checked={sortBy === 'timestamp'}
            />
            <FormControlLabel
              value="fileName"
              control={<Radio />}
              label="File name"
              onClick={() => setSortHandler('image')}
              checked={sortBy === 'image'}
            />
            <FormControlLabel
              value="fileSize"
              control={<Radio />}
              label="File size"
              onClick={() => setSortHandler('filesize')}
              checked={sortBy === 'filesize'}
            />
          </RadioGroup>
        </FormControl>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!!closedImages?.length && (
            <VisibilityIcon
              color="action"
              sx={{ marginRight: '5px', cursor: 'pointer' }}
              onClick={restoreImagesHandler}
            />
          )}
          <Badge badgeContent={closedImages?.length} color="primary">
            <VisibilityOffIcon color="action" />
          </Badge>
        </Box>
      </Container>
      <Container
        sx={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
          gap: '15px',
        }}
      >
        {cardsRender}
      </Container>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '20px',
        }}
      >
        <Pagination count={pagesCount.current} onChange={onChangeHandler} />
      </Container>
    </>
  );
};

export default CardsView;

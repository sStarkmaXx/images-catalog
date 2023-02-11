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
import { CardType, cardsActions } from '../store/slices/cards.slice';
import { useRef, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import { useAppSelector, useAppDispatch } from '../hook/redux';

type CardsViewPropsType = {
  cards: CardType[];
};

const CardsView: React.FC<CardsViewPropsType> = ({ cards = [] }) => {
  const dispatch = useAppDispatch();
  const closedImages = useAppSelector((state) => state.cards.closedCards);
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
              // onClick={}
              // checked={currentDisplayType === 'cards'}
            />
            <FormControlLabel
              value="date"
              control={<Radio />}
              label="Date"
              // onClick={() => setDisplayType('tree')}
              // checked={currentDisplayType === 'tree'}
            />
            <FormControlLabel
              value="fileName"
              control={<Radio />}
              label="File name"
              // onClick={() => setDisplayType('tree')}
              // checked={currentDisplayType === 'tree'}
            />
            <FormControlLabel
              value="fileSize"
              control={<Radio />}
              label="File size"
              // onClick={() => setDisplayType('tree')}
              // checked={currentDisplayType === 'tree'}
            />
          </RadioGroup>
        </FormControl>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!!closedImages?.length && (
            <RestoreFromTrashIcon
              color="action"
              sx={{ marginRight: '5px', cursor: 'pointer' }}
              onClick={restoreImagesHandler}
            />
          )}
          <Badge badgeContent={closedImages?.length} color="primary">
            <DeleteIcon color="action" />
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

import {
  AccordionDetails,
  AccordionSummary,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material';
import { Accordion as MUIaccord } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppSelector } from '../hook/redux';
import { v1 } from 'uuid';

type AccordionPropsType = {
  category: string;
};

const Accordion: React.FC<AccordionPropsType> = ({ category }) => {
  const cards = useAppSelector((state) => state.cards.cards);
  const imagesByCategory = cards.filter((card) => card.category === category);

  return (
    <MUIaccord sx={{ backgroundColor: '#263238', color: 'white' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon htmlColor="white" />}
        aria-controls={`${category}`}
        id={`${category}-header`}
      >
        <Typography>{category}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ImageList
          sx={{ width: '100%', height: 600 }}
          cols={10}
          rowHeight={164}
        >
          {imagesByCategory.map((item) => (
            <ImageListItem key={v1()}>
              <img
                src={`http://contest.elecard.ru/frontend_data/${item.image}`}
                srcSet={`http://contest.elecard.ru/frontend_data/${item.image}`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </AccordionDetails>
    </MUIaccord>
  );
};

export default Accordion;

import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import { DisplayType } from '../App';

type HeaderPropsType = {
  currentDisplayType: DisplayType;
  setDisplayType: (type: DisplayType) => void;
};

const Header: React.FC<HeaderPropsType> = ({
  currentDisplayType,
  setDisplayType,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        backgroundColor: 'silver',
        justifyContent: 'center',
      }}
    >
      <FormControl>
        <FormLabel id="display-type" focused={false}>
          Choose display type
        </FormLabel>
        <RadioGroup row aria-labelledby="display-type" name="types">
          <FormControlLabel
            value="cards"
            control={<Radio />}
            label="Cards"
            onClick={() => setDisplayType('cards')}
            checked={currentDisplayType === 'cards'}
          />
          <FormControlLabel
            value="tree"
            control={<Radio />}
            label="Tree"
            onClick={() => setDisplayType('tree')}
            checked={currentDisplayType === 'tree'}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Header;

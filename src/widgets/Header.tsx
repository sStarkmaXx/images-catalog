import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Paper,
} from '@mui/material';
import { DisplayType } from '../App';

type HeaderPropsType = {
  currentDisplayType: DisplayType;
  setDisplayType: (type: DisplayType) => void;
};

const radioStyle = {
  color: '#eceff1',
  '&.Mui-checked': {
    color: '#eceff1',
  },
};

const Header: React.FC<HeaderPropsType> = ({
  currentDisplayType,
  setDisplayType,
}) => {
  return (
    <Paper elevation={3} sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '60px',
          backgroundColor: '#607d8b',
          justifyContent: 'center',
        }}
      >
        <FormControl sx={{ color: 'white', flexDirection: 'row' }}>
          <FormLabel
            id="display-type"
            focused={false}
            sx={{
              display: 'flex',
              color: 'white',
              textAlign: 'center',
              fontWeight: '700',
              alignItems: 'center',
              fontSize: '25px',
            }}
          >
            Choose display type:
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="display-type"
            name="types"
            sx={{ marginLeft: '20px' }}
          >
            <FormControlLabel
              value="cards"
              control={<Radio sx={radioStyle} />}
              label="Cards"
              onClick={() => setDisplayType('cards')}
              checked={currentDisplayType === 'cards'}
            />
            <FormControlLabel
              value="tree"
              control={<Radio sx={radioStyle} />}
              label="Tree"
              onClick={() => setDisplayType('tree')}
              checked={currentDisplayType === 'tree'}
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Paper>
  );
};

export default Header;

import './App.css';
import CardsView from './components/CardsView';
import Header from './components/Header';
import { useState } from 'react';
import Footer from './components/Footer';
import { Box } from '@mui/material';
import SimpleFade from './components/Asd';

export type DisplayType = 'cards' | 'tree';

function App() {
  const [displayType, setDisplayType] = useState<DisplayType>('cards');

  const setDisplayTypeHandler = (type: DisplayType) => {
    setDisplayType(type);
  };

  return (
    <div className="App">
      <Header
        currentDisplayType={displayType}
        setDisplayType={setDisplayTypeHandler}
      />

      <Box
        sx={{
          flexGrow: '1',
          overflow: 'auto',
          margin: 0,
          width: '100%',
          padding: '20px 20px',
        }}
      >
        {/* {displayType === 'cards' && <TitlebarImageList />} */}
        {displayType === 'cards' && <CardsView />}
        {displayType === 'tree' && <SimpleFade />}
      </Box>
      <Footer />
    </div>
  );
}

export default App;

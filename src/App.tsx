import './App.css';
import CardsView from './components/CardsView';
import Header from './components/Header';
import { useState } from 'react';
import TreeView from './components/TreeView';
import Footer from './components/Footer';
import { Container } from '@mui/material';

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
      <Container
        sx={{
          flexGrow: '1',
          overflow: 'auto',
        }}
      >
        {displayType === 'cards' && <CardsView />}
        {displayType === 'tree' && <TreeView />}
      </Container>
      <Footer />
    </div>
  );
}

export default App;

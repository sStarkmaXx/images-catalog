import './App.css';
import CardsView from './pages/CardsView';
import Header from './widgets/Header';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import { Box } from '@mui/material';
import { fetchCards } from './store/actions/cards.action';
import { useAppDispatch, useAppSelector } from './hook/redux';
import Loader from './shared/ui/loader/Loader';
import TreeView from './pages/TreeView';

export type DisplayType = 'cards' | 'tree';

function App() {
  const dispatch = useAppDispatch();
  const { error, loading, cards } = useAppSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  const [displayType, setDisplayType] = useState<DisplayType>('cards');

  const setDisplayTypeHandler = (type: DisplayType) => {
    setDisplayType(type);
  };

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
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
            {displayType === 'cards' && <CardsView cards={cards} />}
            {displayType === 'tree' && <TreeView />}
            {error && <div>{error}</div>}
          </Box>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

import { v1 } from 'uuid';
import { useAppSelector } from '../hook/redux';
import Accordion from '../widgets/Accordion';

const TreeView = () => {
  const cards = useAppSelector((state) => state.cards.cards);

  const getCategories = () => {
    const categoriesArr: Array<string> = [];
    cards.map((card, index) => {
      if (!categoriesArr.length) {
        categoriesArr.push(card.category);
      } else if (
        cards[index + 1] &&
        card.category !== cards[index + 1].category
      ) {
        categoriesArr.push(cards[index + 1].category);
      } else {
        return;
      }
    });
    return categoriesArr;
  };

  const categories = getCategories().map((category) => {
    return <Accordion key={v1()} category={category} />;
  });

  return <div>{categories}</div>;
};

export default TreeView;

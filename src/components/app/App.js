import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './app.module.scss';
import { Filters } from '../filters/filters';
import { ButtonFilterContainer } from '../button-filter-container/button-filter-container';
import { getShips } from '../../store/ships/selectors';
import { setFilteredShips } from '../../store/actions';
import { PaginatedItems } from '../paginated-items/paginated-items';

const App = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();
  const ships = useSelector(getShips);

  const handleChangeInputShipName = (evt) => {
    const value = evt.target.value;
    setInputValue(value);
  };

  useEffect(() => {
    const formattedValue = inputValue.trim().toLowerCase()
    const filteredShips = ships.filter((ship) => ship.name.toLowerCase().includes(formattedValue));
    dispatch(setFilteredShips(filteredShips));
  }, [inputValue]);

  const handleButtonFilterClick = (evt) => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>SpaceX Ships</h1>
      {
        isFilterOpen
        ?
          <Filters
            onClick={handleButtonFilterClick}
            handleChangeInputShipName={handleChangeInputShipName}
            inputValue={inputValue}
          />
        :
          <ButtonFilterContainer
            isFilterOpen={isFilterOpen}
            onClick={handleButtonFilterClick}
          />
      }
      <main className={styles.main}>
        <PaginatedItems />
      </main>
    </div>
  );
};

export { App };

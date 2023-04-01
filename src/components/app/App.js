import { useState } from 'react';

import styles from './app.module.scss';
import { Filters } from '../filters/filters';
import { ButtonFilterContainer } from '../button-filter-container/button-filter-container';
import { ShipList } from '../ship-list/ship-list';

const App = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleButtonFilterClick = (evt) => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>SpaceX Ships</h1>
      {
        isFilterOpen
        ?
        <Filters onClick={handleButtonFilterClick} />
        :
        <ButtonFilterContainer isFilterOpen={isFilterOpen} onClick={handleButtonFilterClick} />
      }
      <main className={styles.main}>
        <ShipList />
      </main>
    </div>
  );
};

export { App };

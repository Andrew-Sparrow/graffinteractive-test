import styles from './app.module.scss';
import { Ship } from '../ship/ship';
import { Filters } from '../filters/filters';
import { ButtonFilterContainer } from '../button-filter-container/button-filter-container';
import { useState } from 'react';


const App = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleButtonFilterClick = (evt) => {
    setIsFilterOpen((prev) => !prev);
  }

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
        {[1, 2].map((item, index) => <Ship key={index} />)}
      </main>
    </div>
  );
};

export { App };

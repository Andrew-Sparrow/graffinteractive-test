import styles from './app.module.scss';
import { Ship } from '../ship/ship';
import { Filters } from '../filters/filters';
import { ButtonFilter } from '../button-filter/button-filter';
import { useState } from 'react';


const App = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleButtonFilterClick = (evt) => {
    setIsFilterOpen((prev) => !prev);
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>SpaceX Ships</h1>
      <ButtonFilter onClick={handleButtonFilterClick} />
      {
        isFilterOpen && <Filters />
      }
      <main className={styles.main}>
        {[1, 2].map((item, index) => <Ship key={index} />)}
      </main>
    </div>
  );
};

export { App };

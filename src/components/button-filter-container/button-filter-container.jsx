import React from 'react';
import { HandySvg } from 'handy-svg';
import iconFilterSVG from '../../img/icons/Filters.svg';
import iconArrowLeftSVG from '../../img/icons/Arrow_Left.svg';

import styles from './button-filter-container.module.scss';

const IconFilter = () => (
  <HandySvg
    src={iconFilterSVG}
    width="24"
    height="24"
  />
);

const IconArrowLeft = () => (
  <HandySvg
    src={iconArrowLeftSVG}
    width="24"
    height="24"
  />
);

const ButtonFilterContainer = (props) => {
  const { isFilterOpen, onClick } = props;

  return (
    <div>
      {
        isFilterOpen ?
          <button className={styles.button} type="button" onClick={onClick}><IconArrowLeft /><span className={styles.text}></span>Фильтры</button>
          :
          <button className={styles.button} type="button" onClick={onClick}><IconFilter /><span className={styles.text}></span>Фильтры</button>
      }
    </div>
  )
};

export { ButtonFilterContainer };

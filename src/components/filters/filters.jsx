import React from 'react';
import { HandySvg } from 'handy-svg';

import styles from './filters.module.scss';
import iconArrowLeftSVG from '../../img/icons/Arrow_Left.svg';

const IconArrowLeft = ({ onClick }) => (
  <HandySvg
    className={styles.button}
    src={iconArrowLeftSVG}
    width="24"
    height="24"
    onClick={onClick}
  />
);

const Filters = ({ onClick }) => {
  return (
    <aside className={styles.filters} >
      <div className={styles.title_container}>
        <IconArrowLeft onClick={onClick}/>
        <h2 className={styles.title}>Фильтры</h2>
      </div>
    </aside>
  )
};

export { Filters };

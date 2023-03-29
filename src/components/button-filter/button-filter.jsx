import React from 'react';
import { HandySvg } from 'handy-svg';
import iconSrc from '../../img/icons/Filters.svg';

import styles from './button-filter.module.scss';

export const IconFilter = () => (
  <HandySvg
    src={iconSrc}
    width="24"
    height="24"
  />
);

const ButtonFilter = (props) => {
  const { onClick } = props;

  return (
    <button className={styles.button} type="button" onClick={onClick}><IconFilter /><span className={styles.text}></span>Фильтры</button>
  )
};

export { ButtonFilter };

import React from 'react';
import styles from './button-filter.module.scss';


const ButtonFilter = (props) => {
  const { onClick } = props;

  return (
    <button className={styles.button} type="button" onClick={onClick}>Фильтры</button>
  )
};

export { ButtonFilter };

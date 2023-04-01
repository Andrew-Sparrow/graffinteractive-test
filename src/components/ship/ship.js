import React from 'react';
import styles from './ship.module.scss';

const Ship = (props) => {
  const { name, type, port } = props;

  return (
    <li className={styles.ship}>
      <h2 className={styles.ship__title}>{name}</h2>
      <p className='ship__info'><span className={styles.ship__detail}>Тип</span>{type}</p>
      <p className='ship__info'><span className={styles.ship__detail}>Порт</span>{port}</p>
    </li>
  )
}

export { Ship };

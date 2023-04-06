import React from 'react';
import styles from './ship.module.scss';
import { Link } from 'react-router-dom';


const Ship = (props) => {
  const {
    id,
    name,
    type,
    port,
  } = props;

  // TODO перенос по словам
  return (
    <Link to={`/ship/${ id }`} className={styles.ship}>
      <li className={styles.ship__item}>
        <h2 className={styles.ship__title}>{name}</h2>
        <p><span className={styles.ship__detail}>Тип</span>{type}</p>
        <p><span className={styles.ship__detail}>Порт</span>{port}</p>
      </li>
    </Link >
  )
}

export { Ship };

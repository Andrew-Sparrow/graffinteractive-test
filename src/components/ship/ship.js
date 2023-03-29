import React from 'react';
import styles from './ship.module.scss';

const Ship = () => {
  return (
    <div className={styles.ship}>
      <h2 className={styles.ship__title}> Ship title</h2>
      <p className='ship__info'><span className={styles.ship__detail}>Тип</span>asdfa </p>
      <p className='ship__info'><span className={styles.ship__detail}>Порт</span>fffff</p>
    </div>
  )
}

export { Ship };

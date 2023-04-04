import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './details.module.scss';


const Details = (props) => {
  const { id } = useParams();

  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <h2 className={styles.title}>404</h2>
        <div>Details - {id}</div>
      </div>
    </div>
  )
}

export { Details };

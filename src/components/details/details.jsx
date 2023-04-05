import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from './details.module.scss';
import { getShips } from '../../store/ships/selectors';


const Details = (props) => {
  const { id } = useParams();

  const ships = useSelector(getShips);

  const ship = ships.find((item) => item.id === id);

  return (
    <div className={styles.app}>
      <div className={styles.detail}>
        <h2 className={styles.detail__title}>{ship?.name}</h2>
        <p className={styles.detail__info}><span className={styles.detail__name}>Тип</span>{ship?.type}</p>
        <p className={styles.detail__info}><span className={styles.detail__name}>Вес</span>{ship?.mass_kg} кг</p>
        <p className={styles.detail__info}><span className={styles.detail__name}>Порт</span>{ship?.home_port}</p>
        <p className={styles.detail__info}><span className={styles.detail__name}>Год</span>{ship?.year_built}</p>
        <p className={styles.detail__missions}>
          <span className={styles.detail__name}>Миссии</span>
          <span className={styles.detail__launches}>{['FalconSat', 'FalconSat'].map((item) => `${ item }, `)}</span>
        </p>
      </div>
    </div>
  )
};

export { Details };

import React from 'react';
import { useSelector } from 'react-redux';

import { getIsShipsLoading } from '../../store/ships/selectors';
import { Ship } from '../ship/ship';
import { LoadingScreen } from '../loading-screen/loading-screen';
import styles from './ship-list.module.scss';


const ShipList = ({ currentItems }) => {
  const isShipsLoading = useSelector(getIsShipsLoading);

  if (isShipsLoading) {
    return (
      <LoadingScreen />
    );
  };

  return (
    <ul className={styles.list}>
      {
        currentItems && currentItems.map((ship) =>
          <Ship
            id={ship.id}
            key={ship.id}
            type={ship.type}
            name={ship.name}
            port={ship.home_port}
          />)
      }
    </ul>
  )
}

export { ShipList };

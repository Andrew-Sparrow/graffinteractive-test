import React from 'react';
import { useSelector } from 'react-redux';

import { getShips, getIsDataLoaded } from '../../store/ships/selectors';
import { Ship } from '../ship/ship';
import { LoadingScreen } from '../loading-screen/loading-screen';
import styles from './ship-list.module.scss';

const ShipList = () => {
  const isDataLoaded = useSelector(getIsDataLoaded);
  const ships = useSelector(getShips);


  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <ul className={styles.list}>
      {
        ships.map((ship) =>
        <Ship
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

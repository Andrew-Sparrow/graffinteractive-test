import React from 'react';
import { useSelector } from 'react-redux';

import { getShips, getIsDataLoaded } from '../../store/ships/selectors';
import { Ship } from '../ship/ship';
import { LoadingScreen } from '../loading-screen/loading-screen';


const ShipList = () => {
  const isDataLoaded = useSelector(getIsDataLoaded);
  const ships = useSelector(getShips);


  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <ul>
      {
        ships.map((ship) => <Ship key={ship.id} />)
      }
    </ul>
  )
}

export { ShipList };

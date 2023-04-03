import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './app.module.scss';
import { Filters } from '../filters/filters';
import { ButtonFilterContainer } from '../button-filter-container/button-filter-container';
import { getShips } from '../../store/ships/selectors';
import { setFilteredShips } from '../../store/actions';
import { PaginatedItems } from '../paginated-items/paginated-items';

const options = [
  // { value: 'Port Canaveral' },
  { value: 'Port of Los Angeles' },
  { value: 'Fort Lauderdale' }
];

const checkedRadio = '';

const App = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [inputShipNameValue, setInputShipNameValue] = useState('');
  const [selectedShipPorts, setSelectedShipPorts] = useState(options);
  const [checkedShipType, setCheckedShipTypes] = useState(checkedRadio);

  const dispatch = useDispatch();
  const ships = useSelector(getShips);

  // filter input value stored here to remember its value after filter rerender
  const handleChangeInputShipName = (evt) => {
    const value = evt.target.value;
    setInputShipNameValue(value);
  };

  const handleChangeCheckedPorts = (evt) => {
    console.log(evt.currentTarget);
  };

  useEffect(() => {
    const isInputShipNameValueEmpty = inputShipNameValue === '';
    const isSelectedShipPortsEmpty = selectedShipPorts.length === 0;
    const isCheckedShipTypeEmpty = checkedShipType === '';

    const formattedInputValue = inputShipNameValue.trim().toLowerCase()
    const filteredShips = ships.filter((ship) => {
      if (isInputShipNameValueEmpty && isSelectedShipPortsEmpty && isCheckedShipTypeEmpty) {
        return true;
      } else {
        return ship.name.toLowerCase().includes(formattedInputValue)
          && (isSelectedShipPortsEmpty ? true : options.some((checkedItem) => checkedItem.value === ship.home_port));
      }
    });
    dispatch(setFilteredShips(filteredShips));
  }, [inputShipNameValue, selectedShipPorts]);

  const handleButtonFilterClick = (evt) => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>SpaceX Ships</h1>
      {
        isFilterOpen
        ?
          <Filters
            onClick={handleButtonFilterClick}
            handleChangeInputShipName={handleChangeInputShipName}
            handleChangeCheckedPorts={handleChangeCheckedPorts}
            inputValue={inputShipNameValue}
          />
        :
          <ButtonFilterContainer
            isFilterOpen={isFilterOpen}
            onClick={handleButtonFilterClick}
          />
      }
      <main className={styles.main}>
        <PaginatedItems />
      </main>
    </div>
  );
};

export { App };

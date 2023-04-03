import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './app.module.scss';
import { Filters } from '../filters/filters';
import { ButtonFilterContainer } from '../button-filter-container/button-filter-container';
import { getShips } from '../../store/ships/selectors';
import { setFilteredShips } from '../../store/actions';
import { PaginatedItems } from '../paginated-items/paginated-items';

const selectedOptions = [];

const checkedRadio = '';

const App = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [inputShipNameValue, setInputShipNameValue] = useState('');
  const [selectedShipPorts, setSelectedShipPorts] = useState(selectedOptions);
  const [checkedShipType, setCheckedShipTypes] = useState(checkedRadio);


  const dispatch = useDispatch();
  const ships = useSelector(getShips);

  // filter input value stored here to remember its value after filter rerender
  const handleChangeInputShipName = (evt) => {
    const value = evt.target.value;
    setInputShipNameValue(value);
  };

  const handleChangeCheckedPorts = (value) => {
    if (selectedShipPorts.includes(value)) {
      setSelectedShipPorts((prev) => prev.filter((item) => item !== value));
    } else {
      setSelectedShipPorts((prev) => [...prev, value]);
    }
  };

  useEffect(() => {
    const isInputShipNameValueEmpty = inputShipNameValue === '';
    const isSelectedShipPortsEmpty = selectedShipPorts.length === 0;
    const isCheckedShipTypeEmpty = checkedShipType === '';

    const formattedInputValue = inputShipNameValue.trim().toLowerCase()
    const filteredShips = ships.filter((ship) => {
      return (isInputShipNameValueEmpty ? true : ship.name.toLowerCase().includes(formattedInputValue))
        && (isSelectedShipPortsEmpty ? true : selectedShipPorts.some((checkedItem) => checkedItem.value === ship.home_port))
        && (isCheckedShipTypeEmpty ? true : checkedShipType === ship.type);
    });
    dispatch(setFilteredShips(filteredShips));
  }, [inputShipNameValue, selectedShipPorts, checkedShipType]);

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
            selectedShipPorts={selectedShipPorts}
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

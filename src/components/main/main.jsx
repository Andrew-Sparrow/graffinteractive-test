import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import styles from './main.module.scss';
import { Filters } from '../filters/filters';
import { ButtonFilterContainer } from '../button-filter-container/button-filter-container';
import { getShips } from '../../store/ships/selectors';
import { setFilteredShips } from '../../store/actions';
import { PaginatedItems } from '../paginated-items/paginated-items';

// TODO перенести логику фильтрации в store

const Main = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [inputShipNameValue, setInputShipNameValue] = useState('');
  const [selectedShipPorts, setSelectedShipPorts] = useState([]);
  const [checkedShipType, setCheckedShipTypes] = useState('');

  const dispatch = useDispatch();
  const ships = useSelector(getShips);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1920px)'
  })

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

  const handleChangeCheckedShipType = (value) => {
    setCheckedShipTypes(value);
  };

  useEffect(() => {
    const isInputShipNameValueEmpty = inputShipNameValue === '';
    const isSelectedShipPortsEmpty = selectedShipPorts.length === 0;
    const isCheckedShipTypeEmpty = checkedShipType === '';

    const formattedInputValue = inputShipNameValue.trim().toLowerCase();

    const filteredShips = ships.filter((ship) => {
      return (isInputShipNameValueEmpty ? true : ship.name.toLowerCase().includes(formattedInputValue))
        && (isSelectedShipPortsEmpty ? true : selectedShipPorts.some((checkedItem) => checkedItem === ship.home_port))
        && (isCheckedShipTypeEmpty ? true : checkedShipType === ship.type);
    });
    dispatch(setFilteredShips(filteredShips));
  }, [inputShipNameValue, selectedShipPorts, checkedShipType]);

  const handleButtonFilterClick = (evt) => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <div className={styles.app}>
      {isDesktop
        ?
        <div className={styles.app__wrapper}>
          <div>
            <h1 className={styles.title}>SpaceX Ships</h1>
            <main className={styles.main}>
              <PaginatedItems />
            </main>
          </div>
          <Filters
            onClick={handleButtonFilterClick}
            handleChangeInputShipName={handleChangeInputShipName}
            handleChangeCheckedPorts={handleChangeCheckedPorts}
            handleChangeCheckedShipType={handleChangeCheckedShipType}
            inputValue={inputShipNameValue}
            selectedShipPorts={selectedShipPorts}
            checkedShipType={checkedShipType}
          />
        </div>
        :
        <>
          <h1 className={styles.title}>SpaceX Ships</h1>
          {isFilterOpen
            ?
            <Filters
              onClick={handleButtonFilterClick}
              handleChangeInputShipName={handleChangeInputShipName}
              handleChangeCheckedPorts={handleChangeCheckedPorts}
              handleChangeCheckedShipType={handleChangeCheckedShipType}
              inputValue={inputShipNameValue}
              selectedShipPorts={selectedShipPorts}
              checkedShipType={checkedShipType}
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
        </>
      }
    </div>
  );
};

export { Main };

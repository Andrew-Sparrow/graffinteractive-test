import React from 'react';
import { HandySvg } from 'handy-svg';
import { useSelector, useDispatch } from 'react-redux';


import styles from './filters.module.scss';
import iconArrowLeftSVG from '../../img/icons/Arrow_Left.svg';
import { MultiSelect } from '../multi-select/multi-select';
import { RadioBlock } from '../radio-block/radio-block.jsx';
import { getShips } from '../../store/ships/selectors';
import { setFilteredShips } from '../../store/actions';

const IconArrowLeft = ({ onClick }) => (
  <HandySvg
    className={styles.button}
    src={iconArrowLeftSVG}
    width="24"
    height="24"
    onClick={onClick}
  />
);

const Filters = ({ onClick }) => {
  const dispatch = useDispatch();
  const ships = useSelector(getShips);

  const handleChangeInputShipName = (evt) => {
    let value = evt.target.value.toLowerCase();
    const filteredShips = ships.filter((ship) => ship.name.toLowerCase().includes(value));
    dispatch(setFilteredShips(filteredShips));
  };

  return (
    <aside className={styles.filters} >
      <div className={styles.title_container}>
        <IconArrowLeft onClick={onClick} />
        <h2 className={styles.title}>Фильтры</h2>
      </div>
      <section className={styles.filters_box}>
        <label className={styles.label} htmlFor="name">Название</label>
        <div className={styles.input_wrapper}>
          <input
            className={styles.input}
            type="text"
            id="name"
            onChange={handleChangeInputShipName}
          />
        </div>
        <MultiSelect />
        <RadioBlock />
      </section>
    </aside>
  )
};

export { Filters };

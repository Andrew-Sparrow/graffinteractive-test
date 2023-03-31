import React from 'react';
import { HandySvg } from 'handy-svg';

import styles from './filters.module.scss';
import iconArrowLeftSVG from '../../img/icons/Arrow_Left.svg';
import { MultiSelect } from '../multi-select/multi-select';
import { RadioBlock } from '../radio-block/radio-block.jsx';

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
  return (
    <aside className={styles.filters} >
      <div className={styles.title_container}>
        <IconArrowLeft onClick={onClick} />
        <h2 className={styles.title}>Фильтры</h2>
      </div>
      <section className={styles.filters_box}>
        <label className={styles.label} htmlFor="name">Название</label>
        <div className={styles.input_wrapper}>
          <input className={styles.input} type="text" id="name" />
        </div>
        <MultiSelect />
        <RadioBlock />
      </section>
    </aside>
  )
};

export { Filters };

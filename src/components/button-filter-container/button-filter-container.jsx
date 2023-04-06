import React from 'react';
import { HandySvg } from 'handy-svg';
import iconFilterSVG from '../../img/icons/Filters.svg';
import { useMediaQuery } from 'react-responsive';

import styles from './button-filter-container.module.scss';


const IconFilter = () => (
  <HandySvg
    src={iconFilterSVG}
    width="24"
    height="24"
  />
);

const ButtonFilterContainer = (props) => {
  const { onClick } = props;

  const isDesktop = useMediaQuery({
    query: '(min-width: 1920px)'
  })

  return (
    <div>
      <button className={styles.button} type="button" onClick={onClick}>
        <IconFilter /><span className={styles.text}></span>Фильтры
      </button>
    </div>
  )
};

export { ButtonFilterContainer };

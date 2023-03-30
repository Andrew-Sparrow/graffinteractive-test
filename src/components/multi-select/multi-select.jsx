import React, { useState } from 'react';

import  multiSelectStyles from './multi-select.module.scss';
import  filterStyles from '../filters/filters.module.scss';
import { OutsideAlerter } from '../outside-alerter/outside-alerter';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MultiSelect = () => {
  const [isSelectActive, setIsSelectActive] = useState(false);

  const onClickSelectHandler = (evt) => {
    setIsSelectActive((prev) => !prev);
  };

  const onClickOutsideHandler = () => {
    setIsSelectActive(false);
  }

  return (
    <>
      <label className={filterStyles.label} htmlFor="port">Порт</label>
      <OutsideAlerter onClickSelectHandle={onClickOutsideHandler}>
        <div className={multiSelectStyles.select_wrapper} >
          <div className={multiSelectStyles.select} tabIndex="1" onClick={onClickSelectHandler} id="port" />
          {
            isSelectActive &&
            <div className={multiSelectStyles.menu}>
              {options.map((item, index) => <p key={index}>{item.label}</p>)}
            </div>
          }
        </div>
      </OutsideAlerter>
    </>
  )
};

export { MultiSelect };

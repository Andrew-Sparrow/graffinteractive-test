import React, { useState } from 'react';

import styles from './multi-select.module.scss';
import { OutsideAlerter } from '../outside-alerter/outside-alerter';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MultiSelect = () => {
  const [isSelectActive, setIsSelectActive] = useState(false);

  const onClickSelectHandle = (evt) => {
    setIsSelectActive((prev) => !prev);
  };

  return (
    <>
      <label className={styles.label} htmlFor="port">Порт</label>
      <OutsideAlerter onClickSelectHandle={onClickSelectHandle}>
        <div className={styles.select_wrapper} >
          <div className={styles.select} tabIndex="1" onClick={onClickSelectHandle} id="port" />
          {
            isSelectActive &&
            <div className={styles.menu}>
              {options.map((item, index) => <p key={index}>{item.label}</p>)}
            </div>
          }
        </div>
      </OutsideAlerter>
    </>
  )
};

export { MultiSelect };

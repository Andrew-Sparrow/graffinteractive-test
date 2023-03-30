import React from 'react';

import styles from './multi-select.module.scss';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MultiSelect = () => {
  return (
    <div className={styles.select_wrapper} >
      <div className={styles.select} tabIndex="1" />
    </div>
  )
};

export { MultiSelect };

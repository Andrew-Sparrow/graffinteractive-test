import React, { useState } from 'react';
import { HandySvg } from 'handy-svg';


import  multiSelectStyles from './multi-select.module.scss';
import  filterStyles from '../filters/filters.module.scss';
import { OutsideAlerter } from '../outside-alerter/outside-alerter';
import iconCheckBoxYesSVG from '../../img/icons/CheckBox_Yes.svg';
import iconCheckBoxNoSVG from '../../img/icons/CheckBox_No.svg';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const IconCheckBoxYes = () => (
  <HandySvg
    src={iconCheckBoxYesSVG}
    width="24"
    height="24"
  />
);

const IconCheckBoxNo = () => (
  <HandySvg
    src={iconCheckBoxNoSVG}
    width="24"
    height="24"
  />
);

const MultiSelect = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);

  const onClickSelectHandler = (evt) => {
    setIsSelectOpen((prev) => !prev);
  };

  const onClickOutsideHandler = () => {
    setIsSelectOpen(false);
  }

  const onSelectedItemClick = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues((prev) => prev.filter((item) => item !== value));
    } else {
      setSelectedValues((prev) => [...prev, value]);
    }
  };

  const isSelected = (value) => {
    return selectedValues.includes(value);
  };

  return (
    <>
      <label className={filterStyles.label} htmlFor="port">Порт</label>
      <OutsideAlerter onClickSelectHandle={onClickOutsideHandler}>
        <div className={multiSelectStyles.select_wrapper} >
          <div className={multiSelectStyles.select} tabIndex="1" onClick={onClickSelectHandler} id="port" >
            <p>Выбрано <span>{selectedValues.length}</span></p>
          </div>
          {
            isSelectOpen &&
            <div className={multiSelectStyles.menu}>
                {options.map((item, index) =>
                  <p
                    key={index}
                    onClick={() => onSelectedItemClick(item.value)}
                    className={multiSelectStyles.menu__item}
                  >
                    {isSelected(item.value)
                      ?
                      <IconCheckBoxYes />
                      :
                      <IconCheckBoxNo />
                     }
                    <span className={multiSelectStyles.label}>{item.label}</span>
                  </p>)
                }
            </div>
          }
        </div>
      </OutsideAlerter>
    </>
  )
};

export { MultiSelect };

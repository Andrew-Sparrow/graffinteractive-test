import React, { useState } from 'react';
import { HandySvg } from 'handy-svg';


import  multiSelectStyles from './multi-select.module.scss';
import  filterStyles from '../filters/filters.module.scss';
import { OutsideAlerter } from '../outside-alerter/outside-alerter';
import iconCheckBoxYesSVG from '../../img/icons/CheckBox_Yes.svg';
import iconCheckBoxNoSVG from '../../img/icons/CheckBox_No.svg';


const options = [
  { value: 'Port Canaveral' },
  { value: 'Port of Los Angeles' },
  { value: 'Fort Lauderdale' }
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

const MultiSelect = (props) => {
  const { handleChangeCheckedPorts } = props;
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
        <div className={multiSelectStyles.select_wrapper} onClick={handleChangeCheckedPorts}>
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
                    tabIndex="2"
                  >
                    {isSelected(item.value)
                      ?
                      <IconCheckBoxYes tabIndex="3" />
                      :
                      <IconCheckBoxNo tabIndex="3" />
                    }
                    <span className={multiSelectStyles.label}>{item.value}</span>
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

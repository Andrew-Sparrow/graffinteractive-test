import React from 'react';
import { HandySvg } from 'handy-svg';

import radioStyles from './radio-block-styles.module.scss';
import iconRadioButtonYesSVG from '../../img/icons/RadioButton_Yes.svg';
import iconRadioButtonNoSVG from '../../img/icons/RadioButton_No.svg';

const typeShipsList = [
  { value: 'Barge' },
  { value: 'Cargo' },
  { value: 'High Speed Craft' },
  { value: 'Tug' },
];

const RadioCheckedYes = ({ onClick }) => (
  <HandySvg
    src={iconRadioButtonYesSVG}
    width="24"
    height="24"
    onClick={onClick}
  />
);

const RadioCheckedNo = ({ onClick }) => (
  <HandySvg
    src={iconRadioButtonNoSVG}
    width="24"
    height="24"
    onClick={onClick}
  />
);


const Radio = (props) => {
  const {
    name,
    isChecked,
    handleChangeCheckedShipType
  } = props;

  return (
    <li className={radioStyles.item} onClick={() => handleChangeCheckedShipType(name)} tabIndex="3">
      <input className={radioStyles.button} id={name} type="radio" name="type"></input>
      {
        isChecked(name)
          ?
          <RadioCheckedYes tabIndex="3" />
          :
          <RadioCheckedNo tabIndex="3" />
      }
      <label className={radioStyles.label} htmlFor={name} >{name}</label>
    </li>
  )
};

const RadioBlock = (props) => {
  const {
    checkedShipType,
    handleChangeCheckedShipType
  } = props;

  const isChecked = (value) => {
    return checkedShipType === value;
  };

  return (<>
    <h3 className={radioStyles.title}>Тип</h3>
    <ul className={radioStyles.list}>
      {typeShipsList.map((item) => {
        return <Radio
          name={item.value}
          key={item.value}
          isChecked={isChecked}
          handleChangeCheckedShipType={handleChangeCheckedShipType}
        />
      })}
    </ul>
  </>)
};

export { RadioBlock };

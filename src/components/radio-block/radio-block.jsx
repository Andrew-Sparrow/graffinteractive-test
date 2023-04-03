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
  const { name } = props;

  return (
    <li className={radioStyles.item}>
      <input className={radioStyles.button} id={name} type="radio" name="type"></input>
      <label className={radioStyles.label} htmlFor={name}>{name}</label>
    </li>
  )
};

const RadioBlock = () => (
  <>
    <h3 className={radioStyles.title}>Тип</h3>
    <ul className={radioStyles.list}>
      {typeShipsList.map((item) => {
        return <Radio name={item.value} key={item.value} />
      })}
    </ul>
  </>
);

export { RadioBlock };

import React from 'react';
import { HandySvg } from 'handy-svg';

import './radio-block-styles.scss';
import iconRadioButtonYesSVG from '../../img/icons/RadioButton_Yes.svg';
import iconRadioButtonNoSVG from '../../img/icons/RadioButton_No.svg';


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

const RadioBlock = () => (
  <></>
);

export { RadioBlock };

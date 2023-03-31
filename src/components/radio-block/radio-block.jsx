import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
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

// const RadioBlock = () => (
//   <form>
//     <RadioGroup.Root className="RadioGroupRoot" defaultValue="default" aria-label="View density">
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <RadioGroup.Item className="RadioGroupItem" value="default" id="r1">
//           {/* <RadioCheckedNo /> */}
//           <RadioGroup.Indicator>
//             <RadioCheckedYes />
//           </RadioGroup.Indicator>
//         </RadioGroup.Item>
//         <label className="Label" htmlFor="r1">
//           Default
//         </label>
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <RadioGroup.Item className="RadioGroupItem" value="comfortable" id="r2">
//           <RadioGroup.Indicator className="RadioGroupIndicator" />
//         </RadioGroup.Item>
//         <label className="Label" htmlFor="r2">
//           Comfortable
//         </label>
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <RadioGroup.Item className="RadioGroupItem" value="compact" id="r3">
//           <RadioGroup.Indicator className="RadioGroupIndicator" />
//         </RadioGroup.Item>
//         <label className="Label" htmlFor="r3">
//           Compact
//         </label>
//       </div>
//     </RadioGroup.Root>
//   </form>
// );

const RadioBlock = () => (
  <RadioGroup.Root className="RadioGroupRoot" name="radio" defaultValue="default">
    <RadioGroup.Item value="default">
      <RadioGroup.Indicator >
        <RadioCheckedYes />
      </RadioGroup.Indicator >
    </RadioGroup.Item>
    <RadioGroup.Item value="comfortable">
      <RadioGroup.Indicator >
        <RadioCheckedYes />
      </RadioGroup.Indicator >
    </RadioGroup.Item>
    <RadioGroup.Item value="compact">
      <RadioGroup.Indicator >
        <RadioCheckedYes />
      </RadioGroup.Indicator >
    </RadioGroup.Item>
  </RadioGroup.Root>
);

export { RadioBlock };

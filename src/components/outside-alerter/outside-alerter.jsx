import { useRef } from "react";
import { useOutsideAlerter } from "../../hooks/use-outside-alerter";

/**
 * Component that alerts if you click outside of it
 *
 * this code is taken from
 * https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
 */

const OutsideAlerter = (props) => {
  const { onClickSelectHandle } = props;
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, onClickSelectHandle);

  return <div ref={wrapperRef}>{props.children}</div>;
}

export { OutsideAlerter };

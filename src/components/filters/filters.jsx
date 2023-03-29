import React, { useState } from 'react';


const Filters = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (evt) => {
    setIsClicked((prev) => !prev);
  }

  return (
    <>
      <button className='button' type="button" onClick={handleClick}>Фильтры</button>
      {
        isClicked && <aside>filters</aside>
      }
    </>
  )
}

export { Filters };

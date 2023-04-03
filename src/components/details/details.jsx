import React from 'react';
import { useParams } from 'react-router-dom';


const Details = (props) => {
  const { id } = useParams();

  return (
    <div>Details - {id}</div>
  )
}

export { Details };

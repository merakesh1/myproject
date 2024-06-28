import React from 'react';
import Hoc1 from '../HOC/Hoc1';

const HocBuilt = ({ message }) => {
  return (
    <>
      <h1>{message}</h1>
    </>
  );
};

export default Hoc1(HocBuilt);

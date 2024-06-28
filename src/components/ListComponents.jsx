import React, { useContext } from 'react';
import { contextObj } from '../context/Context1';

const ListComponents = ({ Name }) => {
  const list = ['rakesh', 'vikranth', 'virat', 'rahul'];
  return (
    <>
      <h1>List Components</h1>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
};

export default ListComponents;

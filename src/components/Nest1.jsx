import React, { useContext } from 'react';
import { contextObj } from '../context/Context1';

const Nest1 = () => {
  const obj = useContext(contextObj);
  console.log(obj);
  return (
    <>
      <h1>{obj.baby}</h1>
      <input
        type='text'
        value={obj.name}
        onChange={(e) => obj.setName(e.target.value)}
        style={{ width: '100%', padding: '8px', fontSize: '16px' }}
      />
      <h1>Nest1-{obj.name}</h1>
      <button onClick={obj.sayHello}>Click</button>
    </>
  );
};

export default Nest1;
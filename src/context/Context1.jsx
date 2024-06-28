import React, { createContext, useState } from 'react';
import Nest1 from '../components/Nest1';

const contextObj = createContext();

const Context1 = (props) => {
  const [name, setName] = useState('hn d');
  let baby = 'baby';
  function sayHello() {
    console.log('hello');
  }
  return (
    <>
      <contextObj.Provider value={{ name, setName, baby, sayHello }}>
        {props.children}
      </contextObj.Provider>
    </>
  );
};

export default Context1;

export { contextObj };

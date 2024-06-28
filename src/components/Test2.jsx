import React, { useEffect } from 'react';

const Test2 = (props) => {
  useEffect(() => {
    console.log('i am from Test2 component');
  });
  return (
    <div>
      <button onClick={props.handleClick}>Test2</button>
    </div>
  );
};

export default Test2;

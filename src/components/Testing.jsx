import React, { useEffect } from 'react';

const Testing = (props) => {
  const { increment } = props;
  useEffect(() => {
    console.log('i am from Testing component');
  });
  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Testing;

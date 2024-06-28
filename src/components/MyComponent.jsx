import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [name, setName] = useState('');
  const [details, setDetails] = useState({ name: '', count: 0 });
  useEffect(() => {
    setCount2(count);
  }, [count]);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((pre) => pre - 1);
  }

  function reset() {
    setCount((pre) => pre - pre);
  }

  return (
    <>
      <h1>
        my heading-{count}-{name}-{count2}
      </h1>
      <input
        type='text'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button className='btn btn-sm btn-dark mx-2' onClick={increment}>
        Increment-{count}
      </button>
      <button className='btn btn-sm btn-dark mx-2' onClick={decrement}>
        Decrement-{count}
      </button>
      <button className='btn btn-sm btn-dark mx-2' onClick={reset}>
        Reset-{count}
      </button>
    </>
  );
}

export default MyComponent;

import React from 'react';

const ResContainer = (props) => {
  const [randNumber, setRandNumber] = React.useState(' ');
  const handleClick = () => {
    setRandNumber(Math.floor(Math.random() * 100) + 1);
  };
  return (
    <>
      <h1 className='text-center mt-4 mb-4' style={{ fontFamily: 'monospace' }}>
        Random number Generator - Welcome {props.Name}!
      </h1>
      <div
        className='m-auto container-sm w-50'
        style={{
          marginTop: '150px',
          border: '1px solid black',
          minHeight: '300px',
        }}
      >
        <h2 className='text-center mt-4' style={{ fontFamily: 'monospace' }}>
          Random number: {randNumber}
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className='btn btn-sm btn-outline-dark' onClick={handleClick}>
            Generate
          </button>
        </div>
      </div>
    </>
  );
};

export default ResContainer;

ResContainer.defaultProps = {
  Name: 'Guest',
};

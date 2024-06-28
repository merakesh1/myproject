import React, { useEffect, useRef } from 'react';

const Focus = () => {
  const refObj = useRef(null);
  useEffect(() => {
    refObj.current?.focus();
  }, []);
  return (
    <div className='mx-5'>
      <input type='text' ref={refObj} />
    </div>
  );
};

export default Focus;

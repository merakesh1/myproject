import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFoundError = () => {
  return (
    <div className='text-center'>
      <h2 className='text-center mt-2'>Page not found</h2>
      <Link className='btn btn-sm btn-outline-dark' to='/'>
        Back
      </Link>
    </div>
  );
};

export default PageNotFoundError;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ name }) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: 'black',
          padding: '10px',
          color: 'white',
          borderBottom: '1px solid white',
        }}
      >
        <span
          className='text-center mt-2 mx-4'
          style={{ fontFamily: 'monospace', fontSize: '20px' }}
        >
          {name}
        </span>
        <div>
          <Link className='btn btn-sm btn-outline-light mx-2' to='/blogs'>
            Blog
          </Link>
          <Link className='btn btn-sm btn-outline-light mx-2' to='/'>
            Home
          </Link>
          <Link className='btn btn-sm btn-outline-light mx-2' to='/contact'>
            Contact
          </Link>
          <Link className='btn btn-sm btn-outline-light mx-2' to='/about'>
            About
          </Link>
          &nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
};

export default Navbar;

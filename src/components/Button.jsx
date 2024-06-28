import React from 'react';
import Types from 'prop-types';

const Button = (props) => {
  return (
    <button
      type='button'
      className='btn btn-sm btn-outline-dark'
      onClick={props.nookinacho}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: Types.string.isRequired,
  nookinacho: Types.func.isRequired,
};

export default Button;

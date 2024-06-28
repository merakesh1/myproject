import React from 'react';

const Image = (props) => {
  return <img width='48' height='48' src={props.src} alt={props.srcAlt} />;
};

export default Image;

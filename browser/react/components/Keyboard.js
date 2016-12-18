import React, { PropTypes } from 'react';

const Keyboard = props => {
  return (
    <div onMouseDown={ props.handleClick }>
      <canvas data-nx="keyboard"></canvas>
    </div>
  );
};

Keyboard.propTypes = {
  handleClick: PropTypes.func
};

export default Keyboard;

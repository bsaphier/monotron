import React, { PropTypes } from 'react';

const Keyboard = (props) => {
  //onMouseDown={props.keyDown}
  // props.nxLoad();
  return (
    <div>
      <canvas data-nx="keyboard"></canvas>
    </div>
  );
};

Keyboard.propTypes = {
  keyDown: PropTypes.func
};

export default Keyboard;

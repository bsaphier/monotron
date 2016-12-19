import React, { PropTypes } from 'react';

const Keyboard = (props) => {
  console.log(props);
  return (
    <div onClick={props.instrument} onMouseUp={props.instrument}>
      <canvas data-nx="keyboard"></canvas>
    </div>
  );
};

// Keyboard.propTypes = {
//   keyUp: PropTypes.func,
//   keyDown: PropTypes.func
// };

export default Keyboard;

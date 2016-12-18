import React, { PropTypes } from 'react';

const Knob = props => {
  return (
    <div onMouseDown={ props.handleClick }>
      <canvas data-nx="dial"></canvas>
    </div>
  );
};

Knob.propTypes = {
  handleClick: PropTypes.func
};

export default Knob;

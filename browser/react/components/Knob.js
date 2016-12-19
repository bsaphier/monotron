import React, { PropTypes } from 'react';

const Knob = props => {
  return (
    <div onMouseDown={ props.handleClick }>
      <canvas data-nx="dial" label={props.label}></canvas>
    </div>
  );
};

Knob.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func
};

export default Knob;

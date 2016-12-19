import React, { PropTypes } from 'react';

const Switch = props => (
  <div>
    <h5>{props.label}</h5>
    <canvas data-nx="select" data-choices={props.choices}></canvas>
  </div>
);

Switch.propTypes = {
  label: PropTypes.string,
  choices: PropTypes.string
};

export default Switch;

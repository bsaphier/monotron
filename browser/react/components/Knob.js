import React, { PropTypes } from 'react';

const Knob = props => (
  <div>
    <h5>{props.label}</h5>
    <canvas data-nx="dial"></canvas>
  </div>
);

Knob.propTypes = {
  label: PropTypes.string
};

export default Knob;

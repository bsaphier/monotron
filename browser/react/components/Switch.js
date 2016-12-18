import React, { PropTypes } from 'react';

const Switch = props => {
  return (
    <div onClick={props.handleChange}>
      <canvas data-nx="select" data-choices={props.choices}></canvas>
    </div>
  );
};

Switch.propTypes = {
  choices: PropTypes.string,
  handleChange: PropTypes.func
};

// export default Switch;

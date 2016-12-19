import React from 'react';

import Knob from './Knob.js';
import Switch from './Switch.js';
import Keyboard from './Keyboard.js';

const Monotron = () => {
  return (
    <div className="container">

      <h3>MONOTRON</h3>

      <div className="row">
        <div className="col-xs-4">
          <Switch label="LFO Dest." choices="Pitch,Cutoff" />
        </div>

        <div className="col-xs-3">
          <Knob label="VCO" />
        </div>

        <div className="col-xs-2">
          <Knob label="LFO Rate" />
          <Knob label="LFO Int" />
        </div>

        <div className="col-xs-3">
          <Knob label="VCF Cutoff" />
          <Knob label="VCF Peak" />
        </div>
      </div>

      <div className="text-center">
        <Keyboard />
      </div>

    </div>
  );
};
export default Monotron;

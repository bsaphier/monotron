import React from 'react';
import MonotronConstructor from '../../../bin/monotron';
import { Knob, Switch, Keyboard } from '../components';

const Monotron = (props) => {

  const switchPos = props.switchPos;
  const keyNoteVal = props.keyNoteVal;
  const intKnobVal = props.intKnobVal;
  const rateKnobVal = props.rateKnobVal;
  const peakKnobVal = props.peakKnobVal;
  const pitchKnobVal = props.pitchKnobVal;
  const cutoffKnobVal = props.cutoffKnobVal;
  const monotron = new MonotronConstructor(props.audioContext);

  return (
    <div className="container">
      <h3>MONOTRON</h3>
      <div className="row">
        <div className="col-xs-4">
          <Knob instrument={monotron} />
        </div>
        <div className="col-xs-4">
          <Knob instrument={monotron} />
          <Knob instrument={monotron} />
        </div>
        <div className="col-xs-4">
          <Knob instrument={monotron} />
          <Knob instrument={monotron} />
        </div>
        {/* <div className="col-xs-*">
          <Switch instrument={monotron} />
        </div> */}
      </div>
      <div className="text-center">
        <Keyboard instrument={monotron} />
      </div>
    </div>
          {/* <div className="col-xs-4">
            <canvas data-nx="dial" id="VCO pitch"></canvas>
          </div>
          <div className="col-xs-4">
            <canvas data-nx="dial" id="LFO rate"></canvas>
            <canvas data-nx="dial" id="LFO int"></canvas>
          </div>
          <div className="col-xs-4">
            <canvas data-nx="dial" id="VCF cutoff"></canvas>
            <canvas data-nx="dial" id="VCF peak"></canvas>
          </div>

          <div className="text-center">
            <canvas data-nx="keyboard"></canvas>
          </div> */}
  );
};

export default Monotron;

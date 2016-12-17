import React from 'react';
import MonotronConstructor from '../../../bin/monotron';
// import { Knob, Switch, Keyboard } from '../components';

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
    <div className="col-xs-12">
      <h3>MONOTRON</h3>
      {/*
      <div>
        <Knob instrument={monotron} />
      </div>
      <div>
        <Switch instrument={monotron} />
      </div>
      <div>
        <Keyboard instrument={monotron} />
      </div>
      */}

          <div className="container">
            <div className="row">
              <div className="col-xs-4">
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
            </div>
          </div>

          <div className="text-center">
            <canvas data-nx="keyboard"></canvas>
          </div>

    </div>
  );
};

export default Monotron;

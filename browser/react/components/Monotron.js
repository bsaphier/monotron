import React from 'react';
import Knob from './Knob.js';
import Keyboard from './Keyboard.js';
import MonotronConstructor from '../../../bin/monotron';

const Monotron = (props) => {

  // const switchPos = props.switchPos;
  // const keyNoteVal = props.keyNoteVal;
  // const intKnobVal = props.intKnobVal;
  // const rateKnobVal = props.rateKnobVal;
  // const peakKnobVal = props.peakKnobVal;
  // const pitchKnobVal = props.pitchKnobVal;
  // const cutoffKnobVal = props.cutoffKnobVal;
  const monotron = new MonotronConstructor(props.audioContext);
  monotron.connect(props.masterGain);
  console.log('****Monotron****', monotron);

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
  );
};

export default Monotron;

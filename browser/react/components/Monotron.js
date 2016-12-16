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
    </div>
  );
};

export default Monotron;

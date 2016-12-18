'use strict';
import React, { Component } from 'react';

import audioContext from '../audio';
import initialState from '../initialState';
import Monotron from '../components/Monotron.js';

export default class AppContainer extends Component {
  constructor (props) {
    super(props);
    this.state = initialState;
    this.createAudioContext = this.createAudioContext.bind(this);
  }
  createAudioContext (opts) {
    return audioContext(opts);
  }
  render () {
    const audioNode = this.createAudioContext();
    const masterGain = audioNode.createGain();
    masterGain.gain.value = 0.7;
    masterGain.connect(audioNode.destination);

    return (
      <div className="container-fluid">
        <Monotron
          audioContext={audioNode}
          masterGain={masterGain}
          switchPos={0}     //*TODO*
          keyNoteVal={0}    //*TODO*
          intKnobVal={0}    //*TODO*
          rateKnobVal={0}   //*TODO*
          peakKnobVal={0}   //*TODO*
          pitchKnobVal={0}  //*TODO*
          cutoffKnobVal={0} //*TODO*
        />
      </div>
    );
  }
}

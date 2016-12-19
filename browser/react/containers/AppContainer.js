'use strict';
import React, { Component } from 'react';

// import audioContext from '../audio';
import initialState, { monotron } from '../initialState';
import Monotron from '../components/Monotron.js';

export default class AppContainer extends Component {

  constructor (props) {
    super(props);
    this.state = initialState;
  }

  // createAudioContext (opts) {
  //   return audioContext(opts);
  // }

  render () {
    // const audioNode = this.createAudioContext();
    // const masterGain = audioNode.createGain();
    // masterGain.gain.value = 0.7;
    // masterGain.connect(audioNode.destination);

    return (
      <div className="container-fluid">
        <Monotron
          keyNoteVal={0.0}                   //*TODO*
          intKnobVal={0.0}                   //*TODO*
          rateKnobVal={0.0}                  //*TODO*
          peakKnobVal={0.0}                  //*TODO*
          pitchKnobVal={0.0}                 //*TODO*
          cutoffKnobVal={0.0}                //*TODO*
          lfoDest={this.state.lfoDest}       //*TODO*
          instrument={monotron} //*TODO*
        />
      </div>
    );
  }
}

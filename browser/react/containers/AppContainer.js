import React, { Component } from 'react';
import initialState from '../initialState';

import audioContext from '../audio';

import Monotron from '../components/Monotron.js';


export default class AppContainer extends Component {
  constructor (props) {
    super(props);
    this.state = initialState;
  }
  audioContext (options) {
    return audioContext(options);
  }
  render () {
    return (
      <div className="container-fluid">
        <Monotron
          audioContext={this.audioContext()}
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

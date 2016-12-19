/* globals nx keyboard1 dial1 dial2 dial3 dial4 dial5 */
import React, { Component, PropTypes } from 'react';

import Knob from './Knob.js';
import Keyboard from './Keyboard.js';
import MonotronConstructor from '../../../bin/monotron';

export default class Monotron extends Component {

  constructor (props) {
    super(props);
    this.state = {
      switchPos: props.switchPos,
      keyNoteVal: props.keyNoteVal,
      intKnobVal: props.intKnobVal,
      rateKnobVal: props.rateKnobVal,
      peakKnobVal: props.peakKnobVal,
      pitchKnobVal: props.pitchKnobVal,
      cutoffKnobVal: props.cutoffKnobVal
    };
    this.nxLoad = this.nxLoad.bind(this);
    // this.keyDown = this.keyDown.bind(this);
    // this.watchKnobs = this.watchKnobs.bind(this);
    // this.handleKnobClick = this.handleKnobClick.bind(this);
    // this.handleSwitchChange = this.handleSwitchChange.bind(this);
  }

  componentDidMount () {
    this.monotron = new MonotronConstructor(this.props.audioContext);
    this.monotron.connect(this.props.masterGain);
  }

  nxLoad () {
    this.monotron.noteOn(nx.mtof(keyboard1.val.note));
    console.log('**data**', this.monotron);
    keyboard1.on('*', function(data) {
      let freq = nx.mtof(data.note);
    });
  }

  // watchKnobs () {
  //   this.setState({
  //     intKnobVal: dial3.val,
  //     rateKnobVal: dial2.val,
  //     peakKnobVal: dial5.val,
  //     pitchKnobVal: dial1.val,
  //     cutoffKnobVal: dial4.val
  //   });
  // }
  //
  // handleKnobClick (event) {
  //   const knobId = event.target.id;
  //   switch (knobId) {
  //     case 'dial1':
  //       console.log(dial1.val);
  //       break;
  //     case 'dial2':
  //       console.log(dial2.val);
  //       break;
  //     case 'dial3':
  //       console.log(dial3.val);
  //       break;
  //     case 'dial4':
  //       console.log(dial4.val);
  //       break;
  //     case 'dial5':
  //       console.log(dial5.val);
  //       break;
  //     default:
  //       console.log('button not found');
  //   }
  // }
  //
  // keyDown () {
  //   const frequency = nx.mtof(keyboard1.val.note);
  //   console.log(frequency);
  // }
  //
  // handleSwitchChange (event) {
  //   this.setState({switchPos: event.target.value});
  // }

  render () {
    return (
      <div className="container" onClick={this.nxLoad}> //onClick={this.watchKnobs}

        <h3>MONOTRON</h3>

        <div className="row">
          <div className="col-xs-4">
            <select name="LFO_dest"> //onChange={this.handleSwitchChange}
              <option value="pitch">pitch</option>
              <option value="cutoff">cutoff</option>
            </select>
          </div>

          <div className="col-xs-3">
            <Knob
              title="VCO_pitch"
              instrument={this.monotron}
              //handleClick={this.handleKnobClick}
            />
          </div>

          <div className="col-xs-2">
            <Knob
              title="LFO_rate"
              instrument={this.monotron}
              //handleClick={this.handleKnobClick}
            />
            <Knob
              title="LFO_int"
              instrument={this.monotron}
              //handleClick={this.handleKnobClick}
            />
          </div>

          <div className="col-xs-3">
            <Knob
              title="VCF_cutoff"
              instrument={this.monotron}
              //handleClick={this.handleKnobClick}
            />
            <Knob
              title="VCF_peak"
              instrument={this.monotron}
              //handleClick={this.handleKnobClick}
            />
          </div>
        </div>

        <div className="text-center">
          <Keyboard
            instrument={this.monotron}
            nxLoad={this.nxLoad}
            //keyDown={this.keyDown}
          />
        </div>

      </div>
    );
  }
}

Monotron.propTypes = {
  switchPos: PropTypes.string,
  keyNoteVal: PropTypes.number,
  intKnobVal: PropTypes.number,
  masterGain: PropTypes.object,
  rateKnobVal: PropTypes.number,
  peakKnobVal: PropTypes.number,
  audioContext: PropTypes.object,
  pitchKnobVal: PropTypes.number,
  cutoffKnobVal: PropTypes.number
};

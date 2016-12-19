/* globals nx keyboard1 dial1 dial2 dial3 dial4 dial5 */
import React, { Component, PropTypes } from 'react';

import Knob from './Knob.js';
import Keyboard from './Keyboard.js';
import MonotronConstructor from '../../../bin/monotron';

export default class Monotron extends Component {

  constructor (props) {
    super(props);
    const monotron = new MonotronConstructor(this.props.audioContext);
    monotron.connect(this.props.masterGain);
    this.state = {
      monotron: monotron,
      switchPos: props.switchPos,
      keyNoteVal: props.keyNoteVal,
      intKnobVal: props.intKnobVal,
      rateKnobVal: props.rateKnobVal,
      peakKnobVal: props.peakKnobVal,
      pitchKnobVal: props.pitchKnobVal,
      cutoffKnobVal: props.cutoffKnobVal
    };
    this.keyUp = this.keyUp.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.watchKnobs = this.watchKnobs.bind(this);
    this.handleKnobClick = this.handleKnobClick.bind(this);
    this.handleSwitchChange = this.handleSwitchChange.bind(this);

  }

  // componentDidMount () {
  // }

  watchKnobs () {
    this.setState({
      intKnobVal: dial3.val,
      rateKnobVal: dial2.val,
      peakKnobVal: dial5.val,
      pitchKnobVal: dial1.val,
      cutoffKnobVal: dial4.val
    });
  }

  handleKnobClick (event) {
    const knobId = event.target.id;
    switch (knobId) {
      case 'dial1':
        console.log(dial1.val);
        break;
      case 'dial2':
        console.log(dial2.val);
        break;
      case 'dial3':
        console.log(dial3.val);
        break;
      case 'dial4':
        console.log(dial4.val);
        break;
      case 'dial5':
        console.log(dial5.val);
        break;
      default:
        console.log('button not found');
    }
  }

  keyDown () {
    const frequency = nx.mtof(keyboard1.val.note);
    this.setState({keyNoteVal: frequency});
    this.state.monotron.noteOn(frequency);
    console.log(frequency);
  }

  keyUp () {
    this.state.monotron.noteOff();
  }

  handleSwitchChange (event) {
    this.setState({switchPos: event.target.value});
  }

  render () {
    return (
      <div className="container" onClick={this.watchKnobs}>

        <h3>MONOTRON</h3>

        <div className="row">
          <div className="col-xs-4">
            <select name="LFO_dest" onChange={this.handleSwitchChange}>
              <option value="pitch">pitch</option>
              <option value="cutoff">cutoff</option>
            </select>
          </div>

          <div className="col-xs-3">
            <Knob
              label="VCO_pitch"
              instrument={this.state.monotron}
              handleClick={this.handleKnobClick}
            />
          </div>

          <div className="col-xs-2">
            <Knob
              label="LFO_rate"
              instrument={this.state.monotron}
              handleClick={this.handleKnobClick}
            />
            <Knob
              label="LFO_int"
              instrument={this.state.monotron}
              handleClick={this.handleKnobClick}
            />
          </div>

          <div className="col-xs-3">
            <Knob
              label="VCF_cutoff"
              instrument={this.state.monotron}
              handleClick={this.handleKnobClick}
            />
            <Knob
              label="VCF_peak"
              instrument={this.state.monotron}
              handleClick={this.handleKnobClick}
            />
          </div>
        </div>

        <div className="text-center">
          <Keyboard
            // keyUp={this.state.monotron}
            // keyDown={this.state.monotron.noteOn}
            instrument={this.state.monotron}
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

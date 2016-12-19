import audioContext from './audio';
import MonotronConstructor from '../../bin/monotron.js';

const audioNode = new AudioContext();
const masterGain = audioNode.createGain();
export const monotron = new MonotronConstructor(audioNode);

masterGain.gain.value = 0.7;
monotron.connect(masterGain);
masterGain.connect(audioNode.destination);

const initialState = {
  keyNoteVal: 0,
  intKnobVal: 0.0,
  rateKnobVal: 0.0,
  peakKnobVal: 0.0,
  pitchKnobVal: 0.0,
  cutoffKnobVal: 0.0,
  lfoDest: 'pitch'
};

export default initialState;

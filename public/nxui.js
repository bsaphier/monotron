/* globals nx keyboard1 select1 dial2 dial3 dial4 dial5 */

class MonotronConstructor {

  constructor (audioContext) {
    this.audioContext = audioContext;

    this.lfoGain = audioContext.createGain();
    this.lfo = audioContext.createOscillator();
    this.vco = audioContext.createOscillator();
    this.vcf = audioContext.createBiquadFilter(); // I'm going to want to design/create a different filter
    this.output = audioContext.createGain();

    // audioNode connections
    this.vco.connect(this.vcf);
    this.vcf.connect(this.output);
    this.lfo.connect(this.lfoGain);
    this.lfoGain.connect(this.vco.frequency); //the vcf.frequency param might chcange

    // initialize output to no volume & set osc types
    this.output.gain.value = 0;
    this.vco.type = this.lfo.type = 'sawtooth';

    this.vco.start(audioContext.currentTime);
    this.lfo.start(audioContext.currentTime);
  }

  noteOn (freq, time = this.audioContext.currentTime) {
    this.vco.frequency.setValueAtTime(freq, time);
    this.output.gain.linearRampToValueAtTime(1.0, time + 0.1);
  }

  noteOff (time = this.audioContext.currentTime) {
    this.output.gain.linearRampToValueAtTime(0.0, time + 0.1);
  }

  switchLFODest (currentSelection) {
    this.lfoGain.disconnect();
    if (currentSelection === 'Cutoff') {
      this.lfoGain.connect(this.vcf.frequency);
    } else {
      this.lfoGain.connect(this.vco.frequency);
    }
  }

  connect (target) {
    this.output.connect(target);
  }
}

const audioContext = (options) => new AudioContext(options);
const createAudioContext = opts => audioContext(opts);

const audioNode = createAudioContext();
const monotron = new MonotronConstructor(audioNode);
const masterGain = audioNode.createGain();

masterGain.gain.value = 0.7;
masterGain.connect(audioNode.destination);
monotron.connect(masterGain);

/* UTILITY FUNCS */
const dialMaker = (name, max, param) => {
  name.on('*', data => {
    //*TODO change how value is calcualted
    const value = data.value * max;
    param.setValueAtTime(value, audioNode.currentTime);
  });
};

nx.onload = function() {

  keyboard1.on('*', data => {
    const freq = nx.mtof(data.note);
    if (keyboard1.clicked) {
      monotron.noteOn(freq);
    } else {
      monotron.noteOff();
    }
  });

  select1.on('*', data => {
    monotron.switchLFODest(data.text);
    console.log(data.text);
  });

  //*TODO VCO knob
  // dialMaker(dial1, 1, monotron);
  dialMaker(dial2, 20, monotron.lfo.frequency);
  dialMaker(dial3, 100, monotron.lfoGain.gain);
  dialMaker(dial4, 2200, monotron.vcf.frequency);
  dialMaker(dial5, 100, monotron.vcf.Q);

};

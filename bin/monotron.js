export default class MonotronConstructor {

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
    this.lfoGain.connect(this.vcf.frequency); //the vcf.frequency param might chcange

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

  nodeOff (time = this.audioContext.currentTime) {
    this.output.gian.linearRampToValueAtTime(0.0, time + 0.1);
  }

  connect (target) {
    this.output.connect(target);
  }
}

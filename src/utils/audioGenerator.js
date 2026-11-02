// Web Audio API Procedural Ambient Sound Generator
// Generates gentle river water flow, soft riverbank wind breeze, and occasional nature chirps
class AmbientAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.windGain = null;
    this.waterGain = null;
    this.timer = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  createPinkNoiseBuffer() {
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.08;
      b6 = white * 0.115926;
    }
    return noiseBuffer;
  }

  start() {
    try {
      this.init();
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      // Wind Generator
      const noiseBuffer = this.createPinkNoiseBuffer();
      const windSource = this.ctx.createBufferSource();
      windSource.buffer = noiseBuffer;
      windSource.loop = true;

      const windFilter = this.ctx.createBiquadFilter();
      windFilter.type = 'lowpass';
      windFilter.frequency.setValueAtTime(320, this.ctx.currentTime);

      // Modulate wind frequency
      const windLFO = this.ctx.createOscillator();
      windLFO.frequency.setValueAtTime(0.15, this.ctx.currentTime);
      const windLFOGain = this.ctx.createGain();
      windLFOGain.gain.setValueAtTime(150, this.ctx.currentTime);
      windLFO.connect(windLFOGain);
      windLFOGain.connect(windFilter.frequency);
      windLFO.start();

      this.windGain = this.ctx.createGain();
      this.windGain.gain.setValueAtTime(0.08, this.ctx.currentTime);

      windSource.connect(windFilter);
      windFilter.connect(this.windGain);
      this.windGain.connect(this.masterGain);
      windSource.start();

      // River Water Flow Stream
      const waterSource = this.ctx.createBufferSource();
      waterSource.buffer = noiseBuffer;
      waterSource.loop = true;

      const waterFilter = this.ctx.createBiquadFilter();
      waterFilter.type = 'bandpass';
      waterFilter.frequency.setValueAtTime(450, this.ctx.currentTime);
      waterFilter.Q.setValueAtTime(2.5, this.ctx.currentTime);

      this.waterGain = this.ctx.createGain();
      this.waterGain.gain.setValueAtTime(0.06, this.ctx.currentTime);

      waterSource.connect(waterFilter);
      waterFilter.connect(this.waterGain);
      this.waterGain.connect(this.masterGain);
      waterSource.start();

      // Fade in master gain smoothly
      this.masterGain.gain.linearRampToValueAtTime(0.22, this.ctx.currentTime + 2.5);
      this.isPlaying = true;

      // Occasional gentle ambient bird chirp
      this.scheduleBirdChirp();
      return true;
    } catch (err) {
      console.warn("Audio Context init error:", err);
      return false;
    }
  }

  scheduleBirdChirp() {
    if (!this.isPlaying) return;
    const nextInterval = 4000 + Math.random() * 8000;
    this.timer = setTimeout(() => {
      if (this.isPlaying && this.ctx) {
        this.playSubtleChirp();
        this.scheduleBirdChirp();
      }
    }, nextInterval);
  }

  playSubtleChirp() {
    try {
      const osc = this.ctx.createOscillator();
      const chirpGain = this.ctx.createGain();
      const baseFreq = 2200 + Math.random() * 600;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, this.ctx.currentTime + 0.08);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.9, this.ctx.currentTime + 0.18);

      chirpGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      chirpGain.gain.linearRampToValueAtTime(0.025, this.ctx.currentTime + 0.04);
      chirpGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.25);

      osc.connect(chirpGain);
      chirpGain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.3);
    } catch (e) {
      // Ignore
    }
  }

  stop() {
    if (!this.ctx || !this.isPlaying) return;
    if (this.timer) clearTimeout(this.timer);
    
    this.masterGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);
    setTimeout(() => {
      if (this.ctx) {
        this.ctx.suspend();
      }
      this.isPlaying = false;
    }, 1300);
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      return this.start();
    }
  }
}

export const ambientSound = new AmbientAudioEngine();

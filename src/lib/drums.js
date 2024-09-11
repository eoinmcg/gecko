(function( global ) {

/*
 * Private stuffz
 */

var enharmonics = 'B#-C|C#-Db|D|D#-Eb|E-Fb|E#-F|F#-Gb|G|G#-Ab|A|A#-Bb|B-Cb',
  middleC = 440 * Math.pow( Math.pow( 2, 1 / 12 ), -9 ),
  numeric = /^[0-9.]+$/,
  octaveOffset = 4,
  space = /\s+/,
  num = /(\d+)/,
  offsets = {};

// populate the offset lookup (note distance from C, in semitones)
enharmonics.split('|').forEach(function( val, i ) {
  val.split('-').forEach(function( note ) {
    offsets[ note ] = i;
  });
});

/*
 * Note class
 *
 * new Note ('A4 q') === 440Hz, quarter note
 * new Note ('- e') === 0Hz (basically a rest), eigth note
 * new Note ('A4 es') === 440Hz, dotted eighth note (eighth + sixteenth)
 * new Note ('A4 0.0125') === 440Hz, 32nd note (or any arbitrary
 * divisor/multiple of 1 beat)
 *
 */

// create a new Note instance from a string
function Note( str ) {
  var couple = str.split( space );
  // frequency, in Hz
  this.frequency = Note.getFrequency( couple[ 0 ] ) || 0;
  // duration, as a ratio of 1 beat (quarter note = 1, half note = 0.5, etc.)
  this.duration = Note.getDuration( couple[ 1 ] ) || 0;
}

// convert a note name (e.g. 'A4') to a frequency (e.g. 440.00)
Note.getFrequency = function( name ) {
  var couple = name.split( num ),
    distance = offsets[ couple[ 0 ] ],
    octaveDiff = ( couple[ 1 ] || octaveOffset ) - octaveOffset,
    freq = middleC * Math.pow( Math.pow( 2, 1 / 12 ), distance );
  return freq * Math.pow( 2, octaveDiff );
};

// convert a duration string (e.g. 'q') to a number (e.g. 1)
// also accepts numeric strings (e.g '0.125')
// and compund durations (e.g. 'es' for dotted-eight or eighth plus sixteenth)
Note.getDuration = function( symbol ) {
  return numeric.test( symbol ) ? parseFloat( symbol ) :
    symbol.toLowerCase().split('').reduce(function( prev, curr ) {
      return prev + ( curr === 'w' ? 4 : curr === 'h' ? 2 :
        curr === 'q' ? 1 : curr === 'e' ? 0.5 :
        curr === 's' ? 0.25 : 0 );
    }, 0 );
};
  
/*
 * Sample class
 * 
 * Play an AudioBuffer for a given duration
 */
  
function Sample( buffer, duration ) {
  this.buffer   = buffer;
  this.duration = Note.getDuration( duration ) || 0;
}

/*
 * Sequence class
 */

// create a new Sequence
function Sequence( ac, tempo, arr ) {
  this.ac = ac || new AudioContext();
  this.createFxNodes();
  this.tempo = tempo || 120;
  this.loop = true;
  this.smoothing = 0;
  this.staccato = 0;
  this.notes = [];
  this.push.apply( this, arr || [] );
}

// create gain and EQ nodes, then connect 'em
Sequence.prototype.createFxNodes = function() {
  var eq = [ [ 'bass', 100 ], [ 'mid', 1000 ], [ 'treble', 2500 ] ],
    prev = this.gain = this.ac.createGain();
  eq.forEach(function( config, filter ) {
    filter = this[ config[ 0 ] ] = this.ac.createBiquadFilter();
    filter.type = 'peaking';
    filter.frequency.value = config[ 1 ];
    prev.connect( prev = filter );
  }.bind( this ));
  prev.connect( this.ac.destination );
  return this;
};

// accepts Note instances or strings (e.g. 'A4 e')
Sequence.prototype.push = function() {
  Array.prototype.forEach.call( arguments, function( note ) {
    this.notes.push( typeof note === 'object' ? note : new Note( note ) );
  }.bind( this ));
  return this;
};

// create a custom waveform as opposed to "sawtooth", "triangle", etc
Sequence.prototype.createCustomWave = function( real, imag ) {
  // Allow user to specify only one array and dupe it for imag.
  if ( !imag ) {
    imag = real;
  }

  // Wave type must be custom to apply period wave.
  this.waveType = 'custom';

  // Reset customWave
  this.customWave = [ new Float32Array( real ), new Float32Array( imag ) ];
};

// recreate the oscillator node (happens on every play)
Sequence.prototype.createOscillator = function() {
  this.stop();
  this.osc = this.ac.createOscillator();

  // customWave should be an array of Float32Arrays. The more elements in
  // each Float32Array, the dirtier (saw-like) the wave is
  if ( this.customWave ) {
    this.osc.setPeriodicWave(
      this.ac.createPeriodicWave.apply( this.ac, this.customWave )
    );
  } else {
    this.osc.type = this.waveType || 'square';
  }

  this.osc.connect( this.gain );
  return this;
};

// schedules this.notes[ index ] to play at the given time
// returns an AudioContext timestamp of when the note will *end*
Sequence.prototype.scheduleNote = function( index, when ) {
  var duration = 60 / this.tempo * this.notes[ index ].duration,
    cutoff = duration * ( 1 - ( this.staccato || 0 ) );
  
  if ( this.notes[ index ] instanceof Sample ) {
    var src = this.ac.createBufferSource();
    
    src.buffer = this.notes[ index ].buffer;
    src.connect( this.gain );
    
    src.start( when );
    src.stop( when + duration );
    
    return when + duration;
  }

  this.setFrequency( this.notes[ index ].frequency, when );

  if ( this.smoothing && this.notes[ index ].frequency ) {
    this.slide( index, when, cutoff );
  }

  this.setFrequency( 0, when + cutoff );
  return when + duration;
};

// get the next note
Sequence.prototype.getNextNote = function( index ) {
  return this.notes[ index < this.notes.length - 1 ? index + 1 : 0 ];
};

// how long do we wait before beginning the slide? (in seconds)
Sequence.prototype.getSlideStartDelay = function( duration ) {
  return duration - Math.min( duration, 60 / this.tempo * this.smoothing );
};

// slide the note at <index> into the next note at the given time,
// and apply staccato effect if needed
Sequence.prototype.slide = function( index, when, cutoff ) {
  var next = this.getNextNote( index ),
    start = this.getSlideStartDelay( cutoff );
  this.setFrequency( this.notes[ index ].frequency, when + start );
  this.rampFrequency( next.frequency, when + cutoff );
  return this;
};

// set frequency at time
Sequence.prototype.setFrequency = function( freq, when ) {
  this.osc.frequency.setValueAtTime( freq, when );
  return this;
};

// ramp to frequency at time
Sequence.prototype.rampFrequency = function( freq, when ) {
  this.osc.frequency.linearRampToValueAtTime( freq, when );
  return this;
};

// run through all notes in the sequence and schedule them
Sequence.prototype.play = function( when ) {
  when = typeof when === 'number' ? when : this.ac.currentTime;

  this.createOscillator();
  this.osc.start( when );

  this.notes.forEach(function( note, i ) {
    when = this.scheduleNote( i, when );
  }.bind( this ));

  this.osc.stop( when );
  this.osc.onended = this.loop ? this.play.bind( this, when ) : null;

  return this;
};

// stop playback, null out the oscillator, cancel parameter automation
Sequence.prototype.stop = function() {
  if ( this.osc ) {
    this.osc.onended = null;
    this.osc.disconnect();
    this.osc = null;
  }
  return this;
};

global.Note = Note;
global.Sample = Sample;
global.Sequence = Sequence;

}( typeof window !== 'undefined' ? window : this ) );


var ac     = new AudioContext();
var tempo  = 115;
var buffer = ac.createBuffer( 1, ac.sampleRate * 10, ac.sampleRate );
var data   = buffer.getChannelData( 0 );

// fill the snare/hi-hat sample with white noise
for ( var i = 0; i < data.length; ++i ) {
  data[ i ] = Math.random() * 2 - 1;
}

var kick = new Sequence( ac, tempo, [
  'G2 0.01',
  'C2 0.19',
  '-  0.80'
]);

var snare = new Sequence( ac, tempo, [
  '- q',
  new Sample( buffer, 'e' ),
  '- qe',
  new Sample( buffer, 'e' ),
  '- e'
]);

var hats = new Sequence( ac, tempo, [
  new Sample( buffer, 's' ),
  '- s'
]);

kick.waveType = 'sine';
kick.smoothing = 0.8;
kick.gain.gain.value = 1;
kick.bass.frequency.value = 60;
kick.bass.gain.value = 5;
kick.mid.frequency.value = 100;
kick.mid.gain.value = 5;

snare.gain.gain.value = 0.5;
snare.bass.frequency.value = 150;
snare.bass.gain.value = 4;
snare.mid.frequency.value = 800;
snare.mid.gain.value = 3;
snare.treble.frequency.value = 5000;
snare.treble.gain.value = -10;

hats.gain.gain.value = 0.3;
hats.treble.type = 'highpass';
hats.treble.frequency.value = 10000;


export default class Drums {
  constructor() {
    this.i = [kick, snare, hats];
  }

  play() {
    this.i.forEach((i) => {
      i.play();
    })
  }
}

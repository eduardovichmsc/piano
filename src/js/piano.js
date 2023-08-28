// was initially written on render.js 
const instrumentsName = {
    key: [
        "noir", "amiri", "8-bit", "test", 
    ],
    bell: [
        "acoustic", "electric"
    ],
    guitar: [
        "snare", "bass", "hi-hat"
    ]
};
const sourceInstruments = {
    'noir': [
        'Native Instruments',
        'https://'
    ],
    'amiri': [
        'dynox',
        'https://wavsupply.net/product/dynox-memory-serum-bank/'        
    ],
    '8-bit': [
        '',
        ''
    ],
}


const keys = document.querySelectorAll('.piano__key');

// object used to identify piano key by clicked qwerty
const keyToNote = {
    // first row (qwerty)
    'q': 'c2',
    '2': 'cb2',
    'w': 'd2',
    '3': 'db2',
    'e': 'e2',
    'r': 'f2',
    '5': 'fb2',
    't': 'g2',
    '6': 'gb2',
    'y': 'a2',
    '7': 'ab2',
    'u': 'b2',
    'i': 'c3',
    '9': 'cb3',
    'o': 'd3',
    '0': 'db3',
    'p': 'e3',
    '[': 'f3',
    '=': 'fb3',
    ']': 'g3',
    
    
    // second row (qwerty)
    'z': 'c',
    's': 'cb',
    'x': 'd',
    'd': 'db',
    'c': 'e',
    'v': 'f',
    'g': 'fb',
    'b': 'g',
    'h': 'gb',
    'n': 'a',
    'j': 'ab',
    'm': 'b',
    ',': 'c2',
    'l': 'cb2',
    '.': 'd2',
    ';': 'db2',
    '/': 'e2'
};

// changes volume of piano keys

// sound keys
const instrumentVolume = document.querySelector('.piano__volume__slider input');

function playSound(note) {
    const audio = new Audio(`src/audio/instruments/${selectedCategory}/${selectedInstrument}/${note}.mp3`);
    audio.volume = instrumentVolume.value;
    audio.play();
    
}

// via Tone.js
// function playSound(note) {
//     const player = new Tone.Player(`src/audio/instruments/${selectedCategory}/${selectedInstrument}/${note}.mp3`).connect(reverb);
//     player.start();
// }

// temp object for currently active keys (if active == true)
const keyState = {};

// playing notes by mouse
keys.forEach(button => {
    button.addEventListener('mousedown', () => {
        const note = button.getAttribute('data-key');
        const matchingKey = document.querySelector(`[data-key="${note}"]`);
        if (matchingKey) {
            matchingKey.classList.add('pressed');
        }
        playSound(note);
    });

    button.addEventListener('mouseup', () => {
        const note = button.getAttribute('data-key');
        const matchingKey = document.querySelector(`[data-key="${note}"]`);
        if (matchingKey) {
            matchingKey.classList.remove('pressed');
        }
    });

    button.addEventListener('mouseleave', () => {
        const note = button.getAttribute('data-key');
        const matchingKey = document.querySelector(`[data-key="${note}"]`);
        if (matchingKey) {
            matchingKey.classList.remove('pressed');
        }
    });
});


// playing notes by qwerty
document.addEventListener('keydown', event => {
    const keyPressed = event.key.toLowerCase();
    const note = keyToNote[keyPressed];
    if (note && !keyState[keyPressed]) {
        keyState[keyPressed] = true;
        playSound(note);
    }

    // sets "pressed key" style ".piano__key.pressed"
    const matchingKey = document.querySelector(`[data-key="${note}"]`);
    if (matchingKey) {
        matchingKey.classList.add('pressed');
    }
});

document.addEventListener('keyup', event => {
    const keyPressed = event.key.toLowerCase();
    const note = keyToNote[keyPressed];
    if (note) {
        keyState[keyPressed] = false;
    }

    // removes ".piano__key.pressed"
    const matchingKey = document.querySelector(`[data-key="${note}"]`);
    if (matchingKey) {
        matchingKey.classList.remove('pressed');

        // resets keystate after every "keyup" / makes bugs
        // for (const key in keyState) {
        //     // delete keyState[key];
        //     console.log(keyState[key]);
        // }
    }
});
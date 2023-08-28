// important / initial category & sound
let selectedInstrument = 'amiri'; 
let selectedCategory = 'key';
let selectedInstrumentSource = 'dynox';


// renders "subInstruments" located in "mainInstrument"
const instrumentToggleButtons = document.querySelectorAll(".nav__main__instrument-title");
const subInstrumentsDiv = document.querySelector(".nav__sub__instruments");

instrumentToggleButtons.forEach(button => {
    button.addEventListener("click", ()=> {
        const tempSelectedInstrument = button.getAttribute("data-instrument-name");
        const subInstrument = instrumentsName[tempSelectedInstrument];

        let subInstrumentsHTML = "";
        subInstrument.forEach(subInstrument => {
            subInstrumentsHTML += `<button class="nav__sub__instrument-item" data-category-name="${tempSelectedInstrument}" data-subinstrument-name="${subInstrument}"><h4>${subInstrument}</h4></button>`;
        });

        subInstrumentsDiv.innerHTML = subInstrumentsHTML;
        subInstrumentsDiv.classList.add("active");
    });
});




// piano -- render
const allKeys = {
    'data-key': [
        'c','cb','d','db','e','f','fb','g','gb','a','ab','b', 'c2', 'cb2', 'd2', 'db2', 'e2', 'f2', 'fb2', 'g2', 'gb2', 'a2', 'ab2', 'b2', 'c3', 'cb3', 'd3', 'db3', 'e3', 'f3', 'fb3', 'g3', 'gb3', 'a3', 'ab3', 'b3'
    ],
    'classic-key': [
        'do', '#', 're', '#', 'mi', 'fa', '#', 'sol', '#', 'la', '#', 'si'
    ],
    'latin-key': [
        'c', '#', 'd', '#', 'e', 'f', '#', 'g', '#', 'a', '#', 'b'
    ],
    'qwerty-key': [
        'z', 's', 'x', 'd', 'c', 'v', 'g', 'b', 'h', 'n', 'j', 'm', 'q', '2', 'w', '3', 'e', 'r', '5', 't', '6', 'y', '7', 'u', 'i', '9', 'o', '0', 'p', '[', '=', ']', 'NaN', 'NaN', 'NaN', 'NaN'
    ]
}
const blackNumbers = [1, 3, 6, 8, 10, 13, 15, 18, 20, 22, 25, 27, 30, 32, 34];

class PianoMaker{
    constructor(key__type, data__key, key__name__classic, key__name__latin, key__name__qwerty){
        this.key__type = key__type;
        this.data__key = data__key;
        this.key__name__classic = key__name__classic;
        this.key__name__latin = key__name__latin;
        this.key__name__qwerty = key__name__qwerty;
    }
    
    render() {

        const element = document.createElement('button');
        element.classList.add('piano__key');
        element.setAttribute('data-key', `${this.data__key}`);
        if (this.key__type == 'white') {
            element.classList.add('white__key');
        } else {
            element.classList.add('black__key');
        }
        element.innerHTML = 
        `
            <span class="note__hint note__qwerty"><h5 class="note__hint-text">${this.key__name__qwerty}</h5></span>
            <span class="note__hint note__latin"><h5 class="note__hint-text">${this.key__name__latin}</h5></span>
            <span class="note__hint note__classic"><h5 class="note__hint-text">${this.key__name__classic}</h5></span>
        `;

        document.querySelector('.piano__block').append(element);
    }
}

for (let i = 0; i < allKeys['data-key'].length; i++) {
    if (blackNumbers.includes(i)) {
        new PianoMaker(
            'black',
            allKeys['data-key'][i],
            allKeys['classic-key'][i%12],
            allKeys['latin-key'][i%12],
            allKeys['qwerty-key'][i]
            ).render();
    } else {
        new PianoMaker(
            'white',
            allKeys['data-key'][i],
            allKeys['classic-key'][i%12],
            allKeys['latin-key'][i%12],
            allKeys['qwerty-key'][i]
            ).render();
    }
}

// shows selected name and category at "piano__info"
document.querySelectorAll('.nav__main__instrument-title').forEach(mainInstrument=>{
    mainInstrument.addEventListener('click', (e)=>{
        const allSubInstruments = document.querySelectorAll('.nav__sub__instrument-item'); 
        
        allSubInstruments.forEach(subInstrument=>{
            subInstrument.addEventListener('click', (e)=>{
                selectedInstrument = subInstrument.getAttribute('data-subinstrument-name');
                selectedCategory = subInstrument.getAttribute('data-category-name');
                selectedInstrumentSource = sourceInstruments[selectedInstrument];

                const soundInfoAll = document.querySelectorAll('.piano__info__title');
                soundInfoAll.forEach(item=>{
                    const soundInfoAttribute = item.getAttribute('data-sound-info');
                    if (soundInfoAttribute == 'category') {
                        item.nextElementSibling.innerHTML = selectedCategory;
                    }
                    if (soundInfoAttribute == 'soundname') {
                        item.nextElementSibling.innerHTML = selectedInstrument;
                    }
                    if (soundInfoAttribute == 'instrument-source') {
                        item.nextElementSibling.innerHTML = `<a class="info__text-h4 info__text-a">${selectedInstrumentSource[0]}</a>`;
                        item.nextElementSibling.setAttribute('href', selectedInstrumentSource[1]);
                    }
                })
            });
        })
    });
});






// nav__links addressing
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach(navLink => {
    navLink.addEventListener("click", (e)=> {
        e.preventDefault();
        
        const dataLink = navLink.getAttribute('data-link');
        if (dataLink == 'instruments') {
            if (document.querySelector('.nav__instruments').classList.contains('show')){
                document.querySelector('.nav__instruments').classList.remove('show');
            } else {
                document.querySelector('.nav__instruments').classList.add('show');
            }
        }
        if (dataLink == 'contacts') {
            window.location.href = "contacts.html";
        }
        if (dataLink == 'login') {
            window.location.href = "login.php";
        }
        });
});



// instrument links active style
const instrLinks = document.querySelectorAll('.nav__main__instrument-title');
instrLinks.forEach(instrLink=>{
    instrLink.addEventListener('click', ()=>{
        const dataInstr = instrLink.getAttribute("data-instrument-name");
        instrLinks.forEach(item=>{
            item.classList.remove('active');
        });
        instrLink.classList.add('active');
    })
});







// key hints
const ntt = document.querySelectorAll('.notes__name-item');

function noteNameDefault() {
    for (let i = 0; i < ntt.length; i++) {
        ntt[i].classList.remove('active');
    }
}
noteNameDefault();

ntt.forEach(item=>{
    const noteButton = item.getAttribute('data-hint');

    function hideKeys(){
        document.querySelectorAll('.note__hint').forEach(item=>{
            item.classList.remove('show');
        })
    }


    // sets "qwerty keys hints" as default
    if (noteButton == 'qwerty') {
        item.classList.add('active');
        document.querySelectorAll('.note__qwerty').forEach(item=>{
            item.classList.add('show');
        })
    }
    
    // toggle key hints
    item.addEventListener('click', ()=>{
        noteNameDefault();
        if (noteButton == 'latin') {
            hideKeys();
            item.classList.add('active');
            document.querySelectorAll('.note__latin').forEach(item=>{
                item.classList.add('show');
            });
        } else if (noteButton == 'classic') {
            hideKeys();
            item.classList.add('active');
            document.querySelectorAll('.note__classic').forEach(item=>{
                item.classList.add('show');
            });
        } else if (noteButton == 'qwerty') {
            hideKeys();
            item.classList.add('active');
            document.querySelectorAll('.note__qwerty').forEach(item=>{
                item.classList.add('show');
            });
        } else {
            hideKeys();
        }
    });
});
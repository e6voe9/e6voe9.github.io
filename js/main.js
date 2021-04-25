// burger open/close script
let burgers = document.querySelectorAll('.burger'),
    menu = document.querySelector('.menu'),
    burger = document.querySelector('.burger');
if (window.innerWidth < 1200) {
    burgers = document.querySelectorAll('.menu-button-open')
}
if (burgers.length > 0) {
    if (burgers.length === 1) {
        burgers[0].addEventListener('click', function() {
            toggleBurger();
        }, { passive: true })
    } else {
        for (let i = 0; i < burgers.length; ++i) {
            burgers[i].addEventListener('click', function() {
                toggleBurger();
            }, { passive: true })
        }
    }
}

function closeMenu() {
    menu.style.maxHeight = null;
    document.body.style = null;
}

function openMenu() {
    menu.style.maxHeight = menu.scrollHeight + 'px';
    document.body.style = "overflow: hidden;";
}

function toggleBurger() {
    burger.classList.toggle('burger--active');
    if (menu.style.maxHeight) {
        closeMenu();
    } else {
        openMenu();
    }
}

// callback popup
let popupOpenBtns = document.querySelectorAll('.callback-open-btn'),
    popup = document.querySelector('.callback'),
    popupCloseBtns = document.querySelectorAll('.callback-close-btn');
for (let i = 0; i < popupOpenBtns.length; ++i) {
    popupOpenBtns[i].addEventListener('click', function() {
        popup.classList.add('callback--active');
    }, { passive: true })
}
for (let i = 0; i < popupCloseBtns.length; ++i) {
    popupCloseBtns[i].addEventListener('click', function() {
        setTimeout(function() {
            popup.classList.remove('callback--active');
            popup.classList.remove('callback--close');
        }, 350);
        popup.classList.add('callback--close');
    }, { passive: true })
}


//language change script
let languageButtons = document.querySelectorAll('.language__item');
for (let i = 0; i < languageButtons.length; ++i) {
    languageButtons[i].addEventListener('click', function() {
        if (!(this.classList.contains('language__item--active'))) {
            let tempLang = this.textContent.toLowerCase();
            tempLang === 'heb' ? document.location.pathname = '/heb/' : document.location.pathname = '/';
        }

    }, { passive: true })
}


//sticky header
let header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    header.classList.toggle("header--sticky", window.scrollY > 0);
}, { passive: true })


//accordion script (FAQ)
let accordionButtons = document.querySelectorAll('.faq__head'),
    accordionBodys = document.querySelectorAll('.faq__body');
for (let i = 0; i < accordionButtons.length; ++i) {
    accordionButtons[i].addEventListener('click', function() {
        if (!(this.classList.contains('faq__head--active'))) {
            for (let j = 0; j < accordionButtons.length; ++j) {
                if (accordionButtons[j] === this) {
                    accordionButtons[j].classList.add('faq__head--active');
                    accordionBodys[j].style.maxHeight = accordionBodys[j].scrollHeight + 'px';
                } else {
                    accordionButtons[j].classList.remove('faq__head--active');
                    accordionBodys[j].style.maxHeight = null;
                }
            }
        } else {
            this.classList.remove('faq__head--active');
            accordionBodys[i].style.maxHeight = null;
        }

    }, { passive: true })
}

function asyncJS(src) {
    let js = document.createElement('script');
    js.src = src;
    document.body.appendChild(js);
}
if (window.innerWidth > 1199) {
    asyncJS('js/particles.js');
}

// callback mask edition
let chooseBlock = document.querySelector('.choose-lang'),
    callBackChooseBtnOpen = document.querySelector('.callback__lang'),
    callBackChooseBtns = document.querySelectorAll('.choose-lang__item'),
    langInput = document.querySelector('.callback__input--lang');

// open choose lang dropdown
callBackChooseBtnOpen.addEventListener('click', function() {
    if (!(chooseBlock.classList.contains('choose-lang--active'))) {
        chooseBlock.classList.add('choose-lang--active');
    } else {
        closeLangChoose()
    }

}, { passive: true })

function closeLangChoose() {
    setTimeout(function() {
        chooseBlock.classList.remove('choose-lang--active');
        chooseBlock.classList.remove('choose-lang--close');
    }, 350)
    chooseBlock.classList.add('choose-lang--close');
}

// choose lang
for (let i = 0; i < callBackChooseBtns.length; ++i) {
    callBackChooseBtns[i].addEventListener('click', function() {
        code = callBackChooseBtns[i].querySelector('.choose-lang__code').getAttribute('data-code'),
            img = callBackChooseBtns[i].querySelector('.callback__flag');
        let temp = img.cloneNode(true);
        langInput.textContent = img.getAttribute('data-lang');
        callBackChooseBtnOpen.innerHTML = '';
        callBackChooseBtnOpen.appendChild(temp);
        closeLangChoose()
    }, { passive: true })
}


let img = callBackChooseBtns[0].querySelector('.callback__flag').cloneNode(true);
callBackChooseBtnOpen.innerHTML = '';
callBackChooseBtnOpen.appendChild(img);
langInput.value = img.getAttribute('data-lang');

function show() {
    const body = document.querySelector('body')
    const content =`
        <textarea class="text" id="text" autofocus></textarea>
        <div class="keyboard">
        <div class="row">
            <div class="key">
                <span>ё</span><sup>~</sup>
            </div>
            <div class="key">
                <span>1</span><sup>!</sup>
            </div>
            <div class="key">
                <span>2</span><sup class="ENG">@</sup><sup class="RU">"</sup>
            </div>
            <div class="key">
                <span>3</span><sup class="ENG">#</sup><sup class="RU">№</sup>
            </div>
            <div class="key">
                <span>4</span><sup class="ENG">$</sup><sup class="RU">;</sup>
            </div>
            <div class="key">
                <span>5</span><sup>%</sup>
            </div>
            <div class="key">
                <span>6</span><sup class="ENG">^</sup><sup class="RU">:</sup>
            </div>
            <div class="key">
                <span>7</span><sup class="ENG">&</sup><sup class="RU">?</sup>
            </div>
            <div class="key">
                <span>8</span><sup>*</sup>
            </div>
            <div class="key">
                <span>9</span><sup>(</sup>
            </div>
            <div class="key">
                <span>0</span><sup>)</sup>
            </div>
            <div class="key">
                <span>-</span><sup>_</sup>
            </div>
            <div class="key">
                <span>=</span><sup>+</sup>
            </div>
            <div class="key backspace">
                <span><i class="material-icons">backspace</i></span>
            </div>
        </div>
        <div class="row">
            <div class="key tab">
                <span><i class="material-icons">keyboard_tab</i></span>
            </div>
            <div class="key">
                <span class="RU">й</span><span class="ENG">q</span>
            </div>
            <div class="key">
                <span class="RU">ц</span><span class="ENG">w</span>
            </div>
            <div class="key">
                <span class="RU">у</span><span class="ENG">e</span>
            </div>
            <div class="key">
                <span class="RU">к</span><span class="ENG">r</span>
            </div>
            <div class="key">
                <span class="RU">е</span><span class="ENG">t</span>
            </div>
            <div class="key">
                <span class="RU">н</span><span class="ENG">y</span>
            </div>
            <div class="key">
                <span class="RU">г</span><span class="ENG">u</span>
            </div>
            <div class="key">
                <span class="RU">ш</span><span class="ENG">i</span>
            </div>
            <div class="key">
                <span class="RU">щ</span><span class="ENG">o</span>
            </div>
            <div class="key">
                <span class="RU">з</span><span class="ENG">p</span>
            </div>
            <div class="key">
                <span class="RU">х</span><span class="ENG">[</span><sup class="ENG">{</sup>
            </div>
            <div class="key">
                <span class="RU">ъ</span><span class="ENG">]</span><sup class="ENG">}</sup>
            </div>
            <div class="key del">
                <span>Del</span>
            </div>
        </div>
        <div class="row">
            <div class="key capslock capslock--activatable">
                <span><i class="material-icons">keyboard_capslock</i></span>
            </div>
            <div class="key">
                <span class="RU">ф</span><span class="ENG">a</span>
            </div>
            <div class="key">
                <span class="RU">ы</span><span class="ENG">s</span>
            </div>
            <div class="key">
                <span class="RU">в</span><span class="ENG">d</span>
            </div>
            <div class="key">
                <span class="RU">а</span><span class="ENG">f</span>
            </div>
            <div class="key">
                <span class="RU">п</span><span class="ENG">g</span>
            </div>
            <div class="key">
                <span class="RU">р</span><span class="ENG">h</span>
            </div>
            <div class="key">
                <span class="RU">о</span><span class="ENG">j</span>
            </div>
            <div class="key">
                <span class="RU">л</span><span class="ENG">k</span>
            </div>
            <div class="key">
                <span class="RU">д</span><span class="ENG">l</span>
            </div>
            <div class="key">
                <span class="RU">ж</span><span class="ENG">;</span><sup class="ENG">:</sup>
            </div>
            <div class="key">
                <span class="RU">э</span><span class="ENG">'</span><sup class="ENG">"</sup>
            </div>
            <div class="key enter">
                <span><i class="material-icons">keyboard_return</i></span>
            </div>
        </div>
        <div class="row">
            <div class="key shiftL">
                <span>Shift</span>
            </div>
            <div class="key">
                <span>/</span>
            </div>
            <div class="key">
                <span class="RU">я</span><span class="ENG">z</span>
            </div>
            <div class="key">
                <span class="RU">ч</span><span class="ENG">x</span>
            </div>
            <div class="key">
                <span class="RU">с</span><span class="ENG">c</span>
            </div>
            <div class="key">
                <span class="RU">м</span><span class="ENG">v</span>
            </div>
            <div class="key">
                <span class="RU">и</span><span class="ENG">b</span>
            </div>
            <div class="key">
                <span class="RU">т</span><span class="ENG">n</span>
            </div>
            <div class="key">
                <span class="RU">ь</span><span class="ENG">m</span>
            </div>
            <div class="key">
                <span class="RU">б</span><span class="ENG">,</span><sup class="ENG"><</sup>
            </div>
            <div class="key">
                <span class="RU">ю</span><span class="ENG">.</span><sup class="ENG">></sup>
            </div>
            <div class="key">
                <span class="RU">.</span><span class="ENG">/</span><sup class="RU">,</sup><sup class="ENG">?</sup>
            </div>
            <div class="key">
                <span class="ArrowUp"><i class="material-icons">keyboard_arrow_up</i></span>
            </div>
            <div class="key shiftR">
                <span>Shift</span>
            </div>
        </div>
        <div class="row">
            <div class="key ctrlL">
                <span>Ctrl</span>
            </div>
            <div class="key win">
                <span>Win</span>
            </div>
            <div class="key altL">
                <span>Alt</span>
            </div>
            <div class="key space">
                <i class="material-icons">space_bar</i>
            </div>
            <div class="key altR">
                <span>Alt</span>
            </div>
            <div class="key ctrlR">
                <span>Ctrl</span>
            </div>
            <div class="key">
                <span><i class="material-icons">keyboard_arrow_left</i></span>
            </div>
            <div class="key">
                <span><i class="material-icons">keyboard_arrow_down</i></span>
            </div>
            <div class="key">
                <span><i class="material-icons">keyboard_arrow_right</i></span>
            </div>
        </div>
    </div>
    <p>Операционная система - Windows</p>
    <p>Для переключения языка нажмите либо левыe Shift + Alt, либо правые Shift + Alt</p>`
    body.insertAdjacentHTML('afterbegin', content);
}
show()

const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 
                    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete', 
                    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 
                    'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 
                    'ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']

const keys = document.querySelectorAll('.key')
const result = document.getElementById('text')

document.addEventListener('keydown', (event) => {
    for (let i = 0; i < keys.length; i+=1) { 
        if (event.code === keyCodes[i]) {
            keys[i].classList.add('act')
            setTimeout(() => keys[i].classList.remove('act'), 200)
            result.focus()
        }
    }
    result.focus()
})

const rus = document.querySelectorAll('.RU')
const eng = document.querySelectorAll('.ENG')
let userLanguage = localStorage.getItem('lang')

function switchLang(switchL, ...codes) {
    const pressSwitch = new Set()

    document.addEventListener('keydown', (event) => {
        pressSwitch.add(event.code)
        for (const cod of codes) {
            if (!pressSwitch.has(cod)) return
        }
        pressSwitch.clear()
        switchL()
    })
    document.addEventListener('keyup', (event) => {
        pressSwitch.delete(event.code)
    })
}

switchLang(() => {
    rus.forEach(elem => {
        elem.classList.toggle('hidden')
    })
    eng.forEach(elem => {
        elem.classList.toggle('hidden')
    })

    if (userLanguage === 'ru') {
        localStorage.setItem('lang', 'en')
    } else if (userLanguage === 'en') {
        localStorage.setItem('lang', 'ru')
    }
}, 'ShiftLeft', 'AltLeft')

switchLang(() => {
    rus.forEach(elem => {
        elem.classList.toggle('hidden')
    })
    eng.forEach(elem => {
        elem.classList.toggle('hidden')
    })

    if (userLanguage === 'ru') {
        localStorage.setItem('lang', 'en')
    } else if (userLanguage === 'en') {
        localStorage.setItem('lang', 'ru')
    }
}, 'ShiftRight', 'AltRight')

if (userLanguage === 'ru') {
    eng.forEach(elem => {
        elem.classList.add('hidden')
        localStorage.setItem('lang', 'ru')
        userLanguage = 'ru'
    })
} else {
    rus.forEach(elem => {
        elem.classList.add('hidden')
        localStorage.setItem('lang', 'en')
        userLanguage = 'en'
    })
}

let caps = false

keys.forEach((element) => {
    element.addEventListener('click', (event) => {
        if (userLanguage === 'ru') {
            if (caps === true) {
                result.value += event.target.textContent[0].toUpperCase()
                return
            }
            result.value += event.target.textContent[0]
            result.focus()
            return
        } 
        if (userLanguage === 'en') {
            if (event.target.textContent.length === 2) {
                result.value += event.target.textContent[1]
                result.focus()
                return
            }
            result.value += event.target.textContent[0]
            result.focus()
        }
    })
})

keyCodes.forEach(elem => {
    element.addEventListener('click', (event) => {
        switch (elem) {
            case 'Backspace':
                result.value = result.value.slice(0, -1)
                result.focus()
                break 
            case 'Tab':
                result.value += '    '
                result.focus()
                break
            case 'Delete':
                result.value += '  del  '
                break
            case 'CapsLock':
                caps = !caps
                //element.toggle('capslock--active')
                result.focus()
                break
            case 'Space':
                result.value += '  g  '
                break
            case 'Enter':
                result.value += '\n'
                result.focus()
                break 
              
            case 'Shift':
            case 'Alt':
            case 'Ctrl':
            case 'Win':
                result.focus()
                break 
        }
       
        // if (event.document.querySelector === 'space') {
        //     result.value += '   gg    ';
        //     res.focus();
        //     return;
        // } if (event.target.textContent === 'Caps Lock') {
        //     caps = !caps;
        //     res.focus();
        //     return;
        // } if (event.target.textContent === '') {
        //     result.value += ' g ';
        //     res.focus();
        //     return;
        // } if (event.document.querySelector === 'shiftR' || event.querySelector === 'shiftL' || event.target.textContent === 'Ctrl' || event.target.textContent === 'Win') {
        //     result.value = result.value.substring(0, result.value.length - 1)
        //     res.focus();
        //     return;
        // } if (event.target.textContent === 'Enter') {
        //     result.value += '\n';
        //     res.focus();
        //     return;
        // } if (event.target.textContent === 'Backspace') {
        //     result.value = result.value.slice(0, -1);
        //     res.focus();
        //     //return;
        // }

    })
})
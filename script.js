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
                <span class="ENG">1</span><span class="RU">1</span><sup>!</sup>
            </div>
            <div class="key">
                <span class="ENG">2</span><span class="RU">2</span><sup class="ENG">@</sup><sup class="RU">"</sup>
            </div>
            <div class="key">
                <span class="ENG">3</span><span class="RU">3</span><sup class="ENG">#</sup><sup class="RU">№</sup>
            </div>
            <div class="key">
                <span class="ENG">4</span><span class="RU">4</span><sup class="ENG">$</sup><sup class="RU">;</sup>
            </div>
            <div class="key">
                <span class="ENG">5</span><span class="RU">5</span><sup>%</sup>
            </div>
            <div class="key">
                <span class="ENG">6</span><span class="RU">6</span><sup class="ENG">^</sup><sup class="RU">:</sup>
            </div>
            <div class="key">
                <span class="ENG">7</span><span class="RU">7</span><sup class="ENG">&</sup><sup class="RU">?</sup>
            </div>
            <div class="key">
                <span class="ENG">8</span><span class="RU">8</span><sup>*</sup>
            </div>
            <div class="key">
                <span class="ENG">9</span><span class="RU">9</span><sup>(</sup>
            </div>
            <div class="key">
                <span class="ENG">0</span><span class="RU">0</span><sup>)</sup>
            </div>
            <div class="key">
                <span  class="ENG">-</span><span  class="RU">-</span><sup>_</sup>
            </div>
            <div class="key">
                <span  class="ENG">=</span><span  class="RU">=</span><sup>+</sup>
            </div>
            <div class="key backspace">
                <i class="material-icons">backspace</i>
            </div>
        </div>
        <div class="row">
            <div class="key tab">
                <i class="material-icons">keyboard_tab</i>
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
                <i class="material-icons">keyboard_capslock</i>
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
                <i class="material-icons">keyboard_return</i>
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
                <i class="material-icons">keyboard_arrow_up</i>
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
            <div class="key space" id="space">
                <i class="material-icons">space_bar</i>
            </div>
            <div class="key altR">
                <span>Alt</span>
            </div>
            <div class="key ctrlR">
                <span>Ctrl</span>
            </div>
            <div class="key">
                <i class="material-icons">keyboard_arrow_left</i>
            </div>
            <div class="key">
                <i class="material-icons">keyboard_arrow_down</i>
            </div>
            <div class="key">
                <i class="material-icons">keyboard_arrow_right</i>
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
    for (let i = 0; i < keys.length; i++) { 
        if (event.code === keyCodes[i]) {
            if (event.code === 'CapsLock') {
                keys[i].classList.toggle('capslock--active')
                result.focus()
            }
            if (event.code === 'Tab') {
                result.value += '    '
                result.focus()
            }
            keys[i].classList.add('active')
            setTimeout(() => keys[i].classList.remove('active'), 200)
            result.focus()
        }
    }
    result.focus()
})

const rus = document.querySelectorAll('.RU')
const eng = document.querySelectorAll('.ENG')
let userLanguage = localStorage.getItem('lang')

function switchLang() {
    console.log(userLanguage + " switch")
    if (userLanguage === 'ru') {
        eng.forEach(elem => {
            elem.classList.add('hidden')
            localStorage.setItem('lang', 'en')
            userLanguage = 'en'
        })
        rusEngSwopper()
    } else {
        rus.forEach(elem => {
            elem.classList.add('hidden')
            localStorage.setItem('lang', 'ru')
            userLanguage = 'ru'
        })
        rusEngSwopper()
    }
}

function rusEngSwopper() {
    rus.forEach(elem => {
        elem.classList.toggle('hidden')
    })
    eng.forEach(elem => {
        elem.classList.toggle('hidden')
    })
}

document.addEventListener('DOMContentLoaded', function(event) {
    if (userLanguage === 'ru') userLanguage = 'en'
    else userLanguage = 'ru'
    switchLang()
})

document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.altKey) {
        switchLang()
    }
})

let caps = false
document.addEventListener('keydown', (event) => {
    if (event.code === 'CapsLock') {
        if (caps) caps = false
        else caps = true
        keys.forEach((elem) => { 
            if (elem.children[0].className !== 'material-icons' && elem.className === 'key')
            if (caps) { 
                console.log(elem.children[0].className + "")
                elem.children[0].innerHTML = elem.children[0].innerHTML.toUpperCase()
                if (elem.children[1] !== undefined) elem.children[1].innerHTML = elem.children[1].innerHTML.toUpperCase()
            } else {
                elem.children[0].innerHTML = elem.children[0].innerHTML.toLowerCase()
                if (elem.children[1] !== undefined) elem.children[1].innerHTML = elem.children[1].innerHTML.toLowerCase()
            }
        })
    }
})

keys.forEach((element) => {
    element.addEventListener('click', (event) => {
        switch (element.children[0].innerHTML) {
            case 'backspace':
                result.value = result.value.slice(0, -1)
                result.focus()
                return
            case 'keyboard_tab':
                result.value += '   '
                result.focus()
                return
            case 'Del':
                result.value += ' del '
                result.focus()
                return    
            case 'keyboard_capslock':
                element.classList.toggle('capslock--active');
                (caps) ? caps = false : caps = true;
                result.focus()
                return    
            case 'keyboard_return':
                result.value += '\n'
                result.focus()
                return
            case 'keyboard_arrow_up':
                 
                result.value = result.value.substring(0, result.value.length - 1)
                result.focus()
                return
            case 'space_bar':
                result.value += ' '
                result.focus()
                return
            case 'keyboard_arrow_left':
                //result.value.moveCursor(result. - 1)
                result.value += 'left'
                result.focus()
                return
            case 'keyboard_arrow_down':
                result.value += 'down'
                result.focus()
                return
            case 'keyboard_arrow_right':
                result.value += 'right'
                result.focus()
                return
            case 'Shift':
            case 'Alt':
            case 'Ctrl':
            case 'Win':
                result.focus()
                break 
        }

        if (userLanguage === 'ru') {
            if (caps === true) {
                result.value += element.children[0].innerHTML.toUpperCase()
                return
            }
            result.value += element.children[0].innerHTML
            result.focus()
            return
        }    
        if (userLanguage === 'en') {
            if (element.children[1] === undefined) return
            result.value += element.children[1].innerHTML
            result.focus()
            return
        } 
    })
})

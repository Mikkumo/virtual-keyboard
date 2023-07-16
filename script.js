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
            <div class="key shiftL shift--activatable">
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
            <div class="key shiftR shift--activatable">
                <span>Shift</span>
            </div>
        </div>
        <div class="row">
            <div class="key ctrlL">
                <span>Ctrl</span>
            </div>
            <div class="key win">
                <img class="win_key" src="./assets/images/win.png">
            </div>
            <div class="key altL">
                <span>Alt</span>
            </div>
            <div class="key space" id="space">
                <i class="material-icons">space_bar</i>
            </div>
            <div class="key language">
                <span class="RU">RU</span><span class="ENG">EN</span>
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
    <p class="keyboard_title">Операционная система - Windows</p>
    <p class="keyboard_title">Для переключения языка нажмите первую клавишу после space/пробел</p>
    
    <section class="theme_toggle">
        <p class="theme_title">Вы можете выбрать другую тему</p>
        <div class="theme_btn_container">
            <button class="theme_btn violet active_btn" type="button"type="button"></button>
            <button class="theme_btn blue" type="button"type="button"></button>
            <button class="theme_btn red" type="button"type="button"></button>
            <button class="theme_btn green" type="button"type="button"></button>
        </div>
    </section>`
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
const rus = document.querySelectorAll('.RU')
const eng = document.querySelectorAll('.ENG')
let userLanguage = localStorage.getItem('lang')
const languageKey = document.querySelector('.language')

document.addEventListener('keydown', (event) => {
    for (let i = 0; i < keys.length; i++) { 
        if (event.code === keyCodes[i]) {
            if (event.code === 'CapsLock') {
                keys[i].classList.toggle('capslock--active')
                caps = capslockClick()
                result.focus()
            }
            if (event.code === 'Tab') {
                event.preventDefault()
                let arrB = result.value.substring(0, result.selectionStart)
                let arrA = result.value.substring(result.selectionEnd)
                result.value = arrB + '\t' + arrA
                result.setSelectionRange(arrB.length + 1, arrA.length - 1)
                result.focus()
            } 
            if (event.code === 'AltRight' || event.code === 'AltLeft') {
                event.preventDefault()
                result.focus()
            }
            if (event.shiftKey && event.altKey || event.code === 'AltRight') {
                switchLang()
            }
            keys[i].classList.add('active')
            setTimeout(() => keys[i].classList.remove('active'), 200)
            result.focus()
        }
    }
    result.focus()
})

languageKey.addEventListener('click', function() {
    switchLang()    
})

function switchLang() {
    if (userLanguage === 'ru') {
        langHidden('en', eng)
        rusEngSwopper()
    } else {
        langHidden('ru', rus)
        rusEngSwopper()
    }
}

function langHidden(lang, keys) {
    keys.forEach(elem => {
        elem.classList.add('hidden')
        localStorage.setItem('lang', lang)
        userLanguage = lang
    })
}

function rusEngSwopper() {
    hiddenToggle(rus)
    hiddenToggle(eng)
}

function hiddenToggle(keys) {
    keys.forEach(elem => {
        elem.classList.toggle('hidden')
    })
}

document.addEventListener('DOMContentLoaded', function() {
    if (userLanguage === 'ru') userLanguage = 'en'
    else userLanguage = 'ru'
    switchLang()
})

let caps = false
let shift = false
let cursor = result.selectionStart
const areaBeforeMyCursor = result.value.substring(0, cursor).split('\n')
const areaAfterMyCursor = result.value.substring(result.selectionEnd).split('\n')
               
keys.forEach((element) => {
    element.addEventListener('click', () => {
        let arrB = result.value.substring(0, result.selectionStart)
        let arrA = result.value.substring(result.selectionEnd)
        console.log(result.selectionStart, result.selectionEnd)
        switch (element.children[0].innerHTML) {
            case 'backspace':
                backspaceClick()
                result.focus()
                return
            case 'keyboard_tab':
                result.value = arrB + '\t' + arrA
                result.setSelectionRange(arrB.length + 1, arrA.length - 1)
                result.focus()
                return
            case 'Del':
                delClick()
                result.focus()
                return    
            case 'keyboard_capslock':
                element.classList.toggle('capslock--active')
                capslockClick()
                result.focus()
                return    
            case 'keyboard_return':
                result.value = arrB + '\n' + arrA
                result.setSelectionRange(arrB.length + 1, arrA.length - 1)
                result.focus()
                return
            case 'space_bar':
                result.value = arrB + ' ' + arrA
                result.setSelectionRange(arrB.length + 1, arrA.length - 1)
                result.focus()
                return
            case 'keyboard_arrow_up':
                arrowUpClick()
                result.focus()
                return
            case 'keyboard_arrow_left':
                cursor = result.selectionEnd
                if (cursor !== 0) {
                    result.setSelectionRange(cursor, cursor - 1)
                }
                result.focus()
                return
            case 'keyboard_arrow_down':
                arrowDownClick()
                result.focus()
                return
            case 'keyboard_arrow_right':
                cursor = result.selectionEnd
                result.setSelectionRange(cursor + 1, cursor + 1)
                result.focus()
                return
            case 'Shift':
                element.classList.toggle('shift--active')
                shift = !shift
                result.focus()
                break 
        }
    })
})

keys.forEach(element => {
    if (element.children[0].className !== 'material-icons') {
        element.addEventListener('click', () => {
            if (userLanguage === 'ru') {
                keyClick(element, 0)
            } else if (userLanguage === 'en') {
                keyClick(element, 1)
            }
        })
    }
})

function backspaceClick() {
    if (result.selectionStart === result.selectionEnd) result.setRangeText('', result.selectionStart - 1, result.selectionStart, 'end')
    else result.setRangeText('', result.selectionStart, result.selectionEnd, 'end')
}

function capslockClick() {
    caps = !caps
    keys.forEach((elem) => {
        if (elem.children[0].className !== 'material-icons' && elem.className === 'key')
            if (caps) {
                elem.children[0].innerHTML = elem.children[0].innerHTML.toUpperCase()
                if (elem.children[1] !== undefined) elem.children[1].innerHTML = elem.children[1].innerHTML.toUpperCase()
            } else {
                elem.children[0].innerHTML = elem.children[0].innerHTML.toLowerCase()
                if (elem.children[1] !== undefined) elem.children[1].innerHTML = elem.children[1].innerHTML.toLowerCase()
            }
    })
    return caps
}

function keyClick(key, langCode) {
    if (shift) {
        if (withShiftClick(key, langCode)) return
    }
    if (key.children[langCode] === undefined) return
    if (key.children[langCode].innerHTML === 'EN' || 
            key.children[langCode].innerHTML === 'RU' ||
            key.children[langCode].innerHTML === 'Shift' ||
            key.children[langCode].innerHTML === 'Alt' ||
            key.children[langCode].innerHTML === 'Ctrl' ||
            key.children[langCode].innerHTML === 'Del') {
        result.value 
    } else {
        console.log(cursor)
        result.value += key.children[langCode].innerHTML

    }
    result.focus()
}

function withShiftClick(key, langCode){
    let sup = key.querySelector('sup')
    if (sup !== null) {
        result.value += sup.innerHTML
        result.focus()
        return true
    } else if (key.className === 'key') {
        if (key.children[langCode] === undefined) return false
        if (caps) result.value += key.children[langCode].innerHTML.toLowerCase()
        else result.value += key.children[langCode].innerHTML.toUpperCase()
        return true
    }
    return false
}

function delClick() {
    if (result.selectionStart === result.selectionEnd) result.setRangeText('', result.selectionStart, result.selectionStart + 1, 'end')
    else result.setRangeText('', result.selectionStart, result.selectionEnd, 'end')
}

function arrowUpClick() {
    if (areaBeforeMyCursor.length === 1 || areaBeforeMyCursor[areaBeforeMyCursor.length - 1].length >= 50) {
        cursor -= 50
    } else if (areaBeforeMyCursor[areaBeforeMyCursor.length - 1].length <= areaBeforeMyCursor[areaBeforeMyCursor.length - 2].length % 50) {
        cursor -= (areaBeforeMyCursor[areaBeforeMyCursor.length - 2].length % 50) + 1
    } else {
        cursor -= areaBeforeMyCursor[areaBeforeMyCursor.length - 1].length + 1
    }
    if (cursor < 0) cursor = 0
    result.setSelectionRange(cursor, cursor)
}

function arrowDownClick() {
    cursor = result.selectionEnd
    if (areaAfterMyCursor.length === 1 || areaAfterMyCursor[0].length >= 50) {
        cursor += 50
    } else if ((areaBeforeMyCursor[areaBeforeMyCursor.length - 1].length % 50) > areaAfterMyCursor[1].length) {
        cursor += areaAfterMyCursor[0].length + areaAfterMyCursor[1].length + 1
    } else if (((areaBeforeMyCursor[areaBeforeMyCursor.length - 1].length) + areaAfterMyCursor[0].length) > 50) {
        cursor += areaAfterMyCursor[0].length
    } else {
        cursor += (areaBeforeMyCursor[areaBeforeMyCursor.length - 1].length % 50) + areaAfterMyCursor[0].length + 1
    }
    result.setSelectionRange(cursor, cursor)
}

const themeBtn = document.querySelectorAll('.theme_btn');
const body = document.querySelector('body');
const textField = document.querySelector('.text');
const keyboard = document.querySelector('.keyboard');

themeBtn.forEach((element) => {
    element.addEventListener('click', () => {
        let activeTheme = document.querySelector('.active_btn');
        activeTheme.classList.remove('active_btn');
        element.classList.add('active_btn');

        if (element.classList.contains('violet')) {
            body.style.background = "url('./assets/images/viol_fon.jpg')";
            textField.style.background = "rgba(226, 169, 237, 0.85)";
            keyboard.style.background = "rgb(138, 43, 226)";
        } 
        if (element.classList.contains('blue')) {
            body.style.background = "url('./assets/images/blue_fon.jpg')";
            textField.style.background = "rgba(102, 207, 233, 0.85)";
            keyboard.style.background = "rgb(47, 13, 240)";
        } 
        if (element.classList.contains('red')) {
            body.style.background = "url('./assets/images/red_fon.jpg')";
            textField.style.background = "rgba(248, 86, 86, 0.85)";
            keyboard.style.background = "rgba(138, 37, 37, 0.849)";
        } 
        if (element.classList.contains('green')) {
            body.style.background = "url('./assets/images/green_fon.jpg')";
            textField.style.background = "rgba(168, 255, 173, 0.85)";
            keyboard.style.background = "rgb(0, 66, 9)";
        }
    })
})
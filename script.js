let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function appendToDisplay(value) {
    if (/[\+\-\*\/]/.test(value)) {
        display.value += ' ' + value + ' '
    } else {
        display.value += value;
    }
    
}

function backSpace() {
    display.value = display.value.slice(0, -1);
}


function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

document,addEventListener('keydown', function (event) {
    const key = event.key;
if (/[\d\.+\-*/]/i.test(key)) {
    appendToDisplay(key);
} else if (key === 'Backspace') {
    backSpace();
} else if (key === '=') {
    calculateResult();

}
});

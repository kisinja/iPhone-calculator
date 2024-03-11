let displayValue = "";

function clearDisplay() {
    displayValue = "";
    document.querySelector('#display').value = displayValue;
}

function appendChar(value) {
    displayValue += value;
    document.querySelector('#display').value = displayValue;
}

var deleteChar = () => {
    displayValue = displayValue.slice(0, -1);
    document.querySelector('#display').value = displayValue;
}

var calculate = () => {
    try {
        displayValue = eval(displayValue);
        document.querySelector('#display').value = displayValue;
    }
    catch (e) {
        displayValue = "Error";
        document.querySelector('#display').value = displayValue;
    }
}
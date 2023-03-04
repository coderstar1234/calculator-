<!-- JavaScript-->
function insertChar(char) {
    document.getElementById('output').value += char;
}

function clearOutput() {
    document.getElementById('output').value = '';
}

function deleteChar() {
    var output = document.getElementById('output').value;
    document.getElementById('output').value = output.substring(0, output.length - 1);
}

function calculate() {
    var expression = document.getElementById('output').value;
    try {
        var result = eval(expression);
        document.getElementById('output').value = result;
    } catch (e) {
        alert('Invalid expression');
    }
}




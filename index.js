
let inputContainer = document.getElementById('inputContainer');
let inputCounter = 1;
let resultDiv = document.getElementById('result');

document.getElementById('addInput').addEventListener('click', function(event) {
    event.preventDefault();
    let newInput = document.createElement('input');
    let newLabel = document.createElement('label');
    newLabel.textContent = `Zdarzenie #${inputCounter+1}:`;
    newLabel.htmlFor = newInput.id;
    newInput.type = 'number';
    newInput.step = 'any';
    newInput.required = true;
    newInput.className = 'form-control';
    newInput.id = 'multiplier_' + inputCounter++;
    newInput.name = 'multiplier';
    inputContainer.appendChild(newLabel);
    inputContainer.appendChild(newInput);
});

document.getElementById('removeInput').addEventListener('click', function(event) {
    event.preventDefault();
    let inputs = inputContainer.getElementsByTagName('input');
    let labels = inputContainer.getElementsByTagName('label');
    if (inputs.length > 0) {
        inputContainer.removeChild(inputs[inputs.length - 1]);
        inputContainer.removeChild(labels[labels.length - 1]);
    }
    if (inputCounter > 1)
        inputCounter--;
});

document.getElementById('calculator-form').addEventListener('reset', function(event) {
    let inputs = inputContainer.getElementsByTagName('input');
    let labels = inputContainer.getElementsByTagName('label');
    document.getElementById('result').textContent = '';
    resultDiv.classList.add('d-none');
});

document.getElementById('calculator-form').addEventListener('submit', function(event) {
    // Zapobiegaj domyślnej akcji formularza
    event.preventDefault();

    // Pobierz wartości z pól formularza
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let multiplierElements = document.getElementsByName('multiplier');

    // Oblicz iloczyn wszystkich wartości 'c'
    let multiplier = 1;
    for (let i = 0; i < multiplierElements.length; i++) {
        multiplier *= multiplierElements[i].value;
    }

    let result = a / b * multiplier;

    // Show result
    resultDiv.textContent = 'Wynik: ' + result;
    resultDiv.classList.remove('d-none');
    resultDiv.scrollIntoView();
});
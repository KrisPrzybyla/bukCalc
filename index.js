
let inputContainer = document.getElementById('inputContainer');
let inputCounter = 1;

document.getElementById('addInput').addEventListener('click', function() {
    let newInput = document.createElement('input');
    let newLabel = document.createElement('label');
    newLabel.textContent = `Mnożnik #${inputCounter+1}:`;
    newLabel.htmlFor = newInput.id;
    newInput.type = 'number';
    newInput.required = true;
    newInput.className = 'form-control';
    newInput.id = 'c' + inputCounter++;
    newInput.name = 'c';
    inputContainer.appendChild(newLabel);
    inputContainer.appendChild(newInput);
});

document.getElementById('removeInput').addEventListener('click', function() {
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
});

document.getElementById('calculator-form').addEventListener('submit', function(event) {
    // Zapobiegaj domyślnej akcji formularza
    event.preventDefault();

    // Pobierz wartości z pól formularza
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let cElements = document.getElementsByName('c');

    // Oblicz iloczyn wszystkich wartości 'c'
    let cProduct = 1;
    for (let i = 0; i < cElements.length; i++) {
        cProduct *= cElements[i].value;
    }
    console.log('ilosc c',cElements.length);

    // Wykonaj obliczenia
    let result = a / b * cProduct;

    // Wyświetl wynik
    document.getElementById('result').textContent = 'Wynik: ' + result;
});
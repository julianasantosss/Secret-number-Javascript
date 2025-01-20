let drawnNumbers = [];
let maxNumber = 10;
function assignText(text, element){
    let htmlElement = document.querySelector(element)
    htmlElement.innerHTML = text;
}

function generateSecretNumber(){
    let randomNumber = Math.floor(Math.random()*maxNumber + 1);
    if (drawnNumbers.length == maxNumber) {
        assignText("all numbers have been drawn! :c", 'p');
    } else {
        if (drawnNumbers.includes(randomNumber)) {
            return generateSecretNumber();
        } else {
            drawnNumbers.push(randomNumber);
            return randomNumber;
    
        }
    }
    
}

function initialConditions(){
    assignText(`Type a number from 1 to ${maxNumber}`, 'p');
    assignText('Number Secret Game', 'h1');
    attempts = 3;
    secretNumber = generateSecretNumber();
}

function verifyNumber(){
    let userNumber = parseInt(document.getElementById('input').value);
    if (userNumber === secretNumber) {
        assignText(`You win! in ${attempts} attempts`, 'p');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (userNumber > secretNumber) {
            assignText('The number is lower', 'p');
        } else {
            assignText('The number is greater', 'p');
        }
        attempts--
        clearImput();
    }
    if (attempts < 1) {
        assignText('You ran out of attempts!', 'p');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
}

function clearImput(){
    let input = document.querySelector('#input');
    input.value = '';
}
 
function newGame(){
    document.getElementById('reiniciar').setAttribute('disabled', true);
    initialConditions();
   
    clearImput();
}
initialConditions();
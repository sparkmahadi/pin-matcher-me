// utilities start
function pinGenerator(){
    const randomNumber = Math.round(Math.random()*10000);
    return randomNumber;
}

function stringMaker(number){
    const randomString = number + '';
    const stringSplit = randomString.split('');
    if(stringSplit.length === 4 ){
        stringJoin = stringSplit.join('');
        stringNumber = parseInt(stringJoin);
    }
    else{

    }
    return stringNumber;
}
// utilites finish

const pinField = document.getElementById('display-pin');

const generateField = document.getElementById('generate-pin');
generateField.addEventListener('click', function(){
    
    let pinMaker = pinGenerator();
    const stringNumber = stringMaker(pinMaker);

    pinField.value = stringNumber;
})

const typedNumberField = document.getElementById('typed-numbers');

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    

    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = null;
        }
        else if (number === '<'){
           const fieldValueArray =  typedNumberField.value.split('');
           fieldValueArray.pop();
           const fieldValueJoin = fieldValueArray.join('');
           typedNumberField.value = fieldValueJoin;
        }
    }
    else{
        console.log(number);
        typedNumberField.value = typedNumberField.value + number;
    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    if(pinField.value === typedNumberField.value){
        document.getElementById('pin-failure').style.display = 'none';
        document.getElementById('pin-success').style.display = 'block';
    }
    else{
        document.getElementById('pin-success').style.display = 'none';
        document.getElementById('pin-failure').style.display = 'block';
    }
})

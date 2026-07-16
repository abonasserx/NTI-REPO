/*============== Functions and Callback Functions Task ==============*/
/*===================================================================*/

function multiply(a,b) {
    return a*b;
}

function calculate(num1,num2,multi){
    return multi(num1,num2);
}


//Callback Function
function displayResult (calc) {
    console.log('The Result Is : ' + calc(5,2,multiply));
}

displayResult(calculate);
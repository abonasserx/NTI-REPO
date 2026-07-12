var fName = window.prompt("Enter Your First Name :");
var lName = window.prompt("Enter Your Last Name :");
var age = window.prompt("Enter Your Age :");

var num1 = parseInt(window.prompt("Enter Your First Number :"));
var num2 = parseInt(window.prompt("Enter Your Second Number :"));

var mainSection = document.querySelector('main section');
var h1Hello = document.createElement('h1');
var resultdoc = document.getElementById('result');

h1Hello.innerText = `Welcome ${fName + ' ' + lName} This is my simple Calculator , Your age is ${age}`;
h1Hello.style.fontSize = '16px';
mainSection.appendChild(h1Hello);



/*Handling Calc*/
var result = null;
function handleMath (event) {

    var valueOfattr =event.target.getAttribute('clicked-data');
    switch(valueOfattr) {
        case '+': result = num1 + num2;
        break;
        case '-': result = num1 - num2;
        break;
        case '*': result = num1 * num2;
        break;
        case '/': result = num1 / num2;
        break;
        case '^': result = num1 ** num2;
        break;
        case '%': result = num1 % num2;
        break;
        default: result = null;
        
    }

    if(resultdoc) {
        resultdoc.innerText = `Result is : ${result}`;
    }else {
        resultdoc.innerText = `There is Error in input`;
    }
    console.log(result);
}


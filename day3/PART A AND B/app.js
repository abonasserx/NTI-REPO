/* ========== PART A ========== */
console.log('========== PART A ==========');
console.log('===========================');

// 1-
console.log('1-');

var name = 'Ahmed Ali';
var nameCharactersNO = name.length;

console.log('Name : ' + name);
console.log('Name Length : ' + nameCharactersNO);


console.log('===========================');


// 2-
console.log('2-');
var sentence = 'I am learning JavaScript';

console.log('Sentence : ' + sentence);

console.log('LowerCase : ' + sentence.toLowerCase());
console.log('UpperCase : ' + sentence.toUpperCase());

console.log('===========================');


// 3-
console.log('3-');

var email = 'student@nti.com';

console.log('Email : ' + email);
console.log('Is contain @ : ' + email.includes('@'));

console.log('===========================');

// 4-
console.log('4-');

var word = 'JavaScript';
console.log('Word : ' + word);

console.log('First Character : ' + word[0]);
console.log('Last Character : ' + word[word.length - 1]);

console.log('===========================');

// 5-
console.log('5-');

var text = 'This is a bad day';


console.log('Sentance Is : ' + text);
console.log('After Replacing : ' + text.replace('bad', 'good'));

console.log('===========================');

//6-
console.log('6-');

var sentanceLove = 'I love coding';

console.log('Sentance Is : ' + sentanceLove);
console.log('After Spilt and Join : ' + sentanceLove.split(' ').join('-'));

console.log('===========================');

//7-
console.log('7-');

var ntiText = ' nti egypt training ';

console.log('Sentance Is : ' + ntiText);
console.log('After Modifing : ' + ntiText.trim().toUpperCase().replace('EGYPT', 'CAIRO'));

console.log('===========================');


/* ========== PART B ========== */
console.log('========== PART B ==========');
console.log('===========================');


//8-
console.log('8-');

var str = '45.8';
console.log('String To Number : ' + parseFloat(str));

console.log('===========================');

//9-
console.log('9-');


var val = 7.6;

console.log('Value is : ' + val);

console.log('Floor : ' + Math.floor(val));
console.log('Ceil : ' + Math.ceil(val));
console.log('Round : ' + Math.round(val));

console.log('===========================');

//10-
console.log('10-');

var numbers = [12,5,28,9];

console.log('Numbers Is : ' + numbers.join(' '));

console.log('Max Number : ' + Math.max(...numbers));
console.log('Min Number : ' + Math.min(...numbers));

console.log('===========================');

//11-
console.log('11-');

console.log('Random Number (1 -> 20) : ' + Math.floor(Math.random() * 20));

console.log('===========================');

//12-
console.log('12-');

var price = 19.4567;

console.log('Price : ' + price);
console.log('only 2 digits after the decimal point : ' + price.toFixed(2));

console.log('===========================');

//13-
console.log('13-');

var randomNumbers = [];

var average = 0;
for(var i = 0 ; i < 5 ; i++) {
    randomNumbers[i] = Math.floor(Math.random() * 50);
    average += randomNumbers[i];
}
average /= 5;


console.log('Generated Numbers are : ' + randomNumbers.join(' '));
console.log('smallest Number : ' + Math.min(...randomNumbers));
console.log('Largest Number : ' + Math.max(...randomNumbers));
console.log('Avg : ' + average.toFixed(2));

console.log('===========================');








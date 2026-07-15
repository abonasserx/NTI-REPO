/*========= PART C ==========*/
/*===========================*/

console.log('========= PART C ==========');
console.log('===========================');

//17-
console.log('17-');

var originalArr = ["apple", "banana", "cherry"];
var newArr = originalArr.map(function(ele) {
    return ele.toUpperCase();
});

console.log('Original Array : ');
console.log(originalArr);
console.log('===');
console.log('New Array : ');
console.log(newArr);

console.log('===========================');

//18-
console.log('18-');

var numbers = [10, 55, 30, 80, 45, 90];
var filterdNum = numbers.filter(function (num) {
    return num > 50;
});

console.log('Filterd Numbers : ');
console.log(filterdNum);

console.log('===========================');

//19-
console.log('19-');

var cityArr = ["Cairo", "Giza", "Alex", "Aswan"];

var firstACity = cityArr.find(function (ele) {return ele.startsWith('A')});
var indexOfFirstACity = cityArr.findIndex(function(ele) {return ele === firstACity;});

console.log('First Index Of City Array Starts With \'A\' : ' + indexOfFirstACity);

console.log('===========================');

//20-
console.log('20-');

var originalLetters = ["a", "b", "c", "d", "e"];
var copyLetters = originalLetters.slice(1,4);

console.log('Original Letters : ');
console.log(originalLetters);
console.log('===');
console.log('Copy Letters : ');
console.log(copyLetters);

console.log('===========================');

//21-
console.log('21-');

var originalNumbers = ["one", "two","three", "four", "five"];

originalNumbers.splice(1,2);

console.log('After Deleting 2 Elements : ');
console.log(originalNumbers);

console.log('===========================');


//22-
console.log('22-');

var result = [40, 100, 1, 5, 25].sort(function(a,b) {
    return a-b;
});

console.log('After Sorting The Array : ');
console.log(result);

console.log('===========================');

//23-
console.log('23-');

var agesArr = [16, 21, 17, 19];

console.log('After Using Some : ');
console.log(agesArr.some(function(num) {
    return num >= 18;
}));
console.log('===');
console.log('After Using Every : ');
console.log(agesArr.every(function(num) {
    return num >= 18;
}));

console.log('===========================');


//24-
console.log('24-');

var total = [5, 10, 15, 20].reduce(function(acc,ele) {
    return acc += ele;
}, 0);

console.log('Total : ' + total);

console.log('===========================');

/*========= PART B ==========*/
/*===========================*/

console.log('========= PART B ==========');
console.log('===========================');

//9-
console.log('9-');

var city = ['cairo', 'alex', 'fayoum','qena','sharm'];

city.forEach(function (val,index) {
    console.log('City Number '+ (index+1) +' : ' + val);
});
console.log('City Array\'s Length : ' + city.length);

console.log('===========================');

//10-
console.log('10-');

console.log('First City : ' + city[0]);
console.log('Second City : ' + city[1]);
console.log('Last City : ' + city.at(-1));

console.log('===========================');

//11-
console.log('11-');

city.push('madrid');
console.log('City Array After Pushing Madrid : ');
city.forEach(function (val,index) {
    console.log('City Number '+ (index+1) +' : ' + val);
});
console.log('===');
city.unshift('palestine');
console.log('City Array After UnShift Palestine : ');
city.forEach(function (val,index) {
    console.log('City Number '+ (index+1) +' : ' + val);
});

console.log('===========================');

//12-
console.log('12-');

city.pop();
console.log('City Array After Using Pop : ');
city.forEach(function (val,index) {
    console.log('City Number '+ (index+1) +' : ' + val);
});
console.log('===');
city.shift();
console.log('City Array After Using Shift : ');
city.forEach(function (val,index) {
    console.log('City Number '+ (index+1) +' : ' + val);
});

console.log('===========================');

//13-
console.log('13-');

var webLang =  ["HTML", "CSS", "JS", "React"];

console.log('The index of JS : ' + webLang.indexOf('JS'));
console.log('Is Python Exists : ' + webLang.includes('Python'));

console.log('===========================');

//14-
console.log('14-');

var equipments = ["pen", "book", "bag"];
equipments.forEach(function (val,index) {
    console.log('Equipment Index '+ index +' : ' + val);
});

console.log('===========================');

//15-
console.log('15-');

var colors = ["red", "green", "blue", "yellow"];

for(var col of colors) {
    console.log('Color Name : '+ col);
    if(col === 'blue'){
        break;
    }
}

console.log('===========================');

//16-
console.log('16-');

var letters = ["A", "B", "C"];
letters = letters.concat(['D','E']);
letters.shift();

for(var le of letters) {
    console.log('Letter Name : '+ le);
}

console.log('letters Length is : ' + letters.length);

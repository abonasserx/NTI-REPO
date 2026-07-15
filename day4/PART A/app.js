/*========= PART A ==========*/
/*===========================*/

console.log('========= PART A ==========');
console.log('===========================');

//1-
console.log('1-');

var car = {brand:"BMW" , model:"CS200" , year:"2022",color:"red"};

for(var ele in car) {
    console.log(ele + ' = ' + car[ele]);
}

console.log('===========================');

//2-
console.log('2-');

console.log('Print CarBrand dot notation : ' + car.brand);
console.log('Print CarYear bracket notation : ' + car['year']);

console.log('===========================');

//3-
console.log('3-');

console.log('Old Object : ');
for(var ele in car) {
    console.log(ele + ' = ' + car[ele]);
}
console.log('====');

console.log('New Object : ');
car.color = 'black';
car.price = '30000.00$';
for(var ele in car) {
    console.log(ele + ' = ' + car[ele]);
}

console.log('===========================');

//4-
console.log('4-');


delete car.year;

console.log('Car.year Has Deleted : ' + car.year);

/*Explaination :
    we already deleted the car.year from 
    the object that's why when we accessing 
    the car.year prints undefined because no value has located
*/

console.log('===========================');

//5-
console.log('5-');

var student = {'student-name':"Sara", age: 20};
console.log('Student Name is : ' + student['student-name']);

console.log('===========================');

//6-
console.log('6-');

var book = {title:"The Planet" , author:{firstName:"Mohamed", lastName:"Abdelnasser"}};
console.log('Author\'s lastName : ' + book.author.lastName);

console.log('===========================');

//7-
console.log('7-');


var employee = { name: "Ali", age: 25, city: "Cairo" };

console.log('Object Keys : ');
console.log(Object.keys(employee));
console.log('====');
console.log('Object Values : ');
console.log(Object.values(employee));
console.log('====');
console.log('Is The Object Has job : ' + employee.hasOwnProperty('job'));

console.log('===========================');

//8-
console.log('8-');

var settings = Object.freeze({theme:"dark", lang:"en"});

settings.theme = 'light';
settings.fontSize = 16;

console.log('Object : ');
console.log(settings);
/*
    Explantion :
    When we try add or modify in freeze mode nothing will happen
    freeze mode make object unable to modify or adding or deleting things
*/
console.log('===========================');










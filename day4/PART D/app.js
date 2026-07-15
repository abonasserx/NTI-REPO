/*========= PART D ==========*/
/*===========================*/

console.log('========= PART D ==========');
console.log('===========================');

//25-
console.log('25-');

var students = [{ name: "Omar", grade: 80 }, { name: "Mona",
grade: 90 }, { name: "Ali", grade: 70 }];

for(var student of students) {
    console.log('Student Name : ' + student.name);
    console.log(student.name +'\'s Grade : ' + student.grade);
}

console.log('===========================');

//26
console.log('26-');

var newStudents = students.filter(function(ele){
    return ele.grade >= 80; 
});

console.log('Students With Grade Equal or Greater than 80 :');
console.log(newStudents);

console.log('===========================');

//27
console.log('27-');

var products = [{name:"chips",price:40},{name:"cola",price:80}, {name:"shose",price:120}];


var totalPrice = products.reduce(function(acc,ele){
    acc += ele.price;
    return acc;
},0);


console.log('Total Price Of Products : ' + totalPrice);

console.log('===========================');

//28-
console.log('28-');

var webLang = ["js", "html", "css", "js", "react", "js"];

var repeatedJS = webLang.reduce(function(acc,ele){
    if(ele === 'js'){
        acc += 1;
    }
    return acc;
},0);

console.log('Repeated JS : ' + repeatedJS);

console.log('===========================');

//29-
console.log('29-');

var classroom = {teacher:"Adel",students:['Ibrahim','Mohamed','Khaled','Mariam']};

console.log('The Teacher Name : ' + classroom.teacher);
console.log('The Number Of Students : ' + classroom.students.length);
console.log('The Last Student Of Students : ' + classroom.students.at(-1));

console.log('===========================');

//30-
console.log('30-');

var thisArr = [{ id: 1, title: "Pen", price: 10 }, { id: 2, title: "Book",
price: 50 }, { id: 3, title: "Bag", price: 25 }];


var upperThisArr = thisArr.map(function(ele) {
    return ele.title.toUpperCase();
});

var productsLess = thisArr.filter(function(ele) {
    return ele.price < 30;
})

var totalPrices = thisArr.reduce(function(acc,ele){
    acc += ele.price;
    return acc;
}, 0);

console.log('Uppered Case Array : ');
console.log(upperThisArr);
console.log('Lower Than 30 Price Array : ');
console.log(productsLess);
console.log('Total Prices is : ' + totalPrices);


console.log('===========================');



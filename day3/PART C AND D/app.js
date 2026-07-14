/* ========== PART C ========== */
console.log('========== PART C ==========');
console.log('===========================');

//14-
console.log('14-');

for (var i = 1; i <= 20; i++) {
    console.log('Counting To 20 : ' + i);
}

console.log('===========================');

//15-
console.log('15-');


for (var i = 1; i <= 15; i += 2) {
    console.log('Odd Numbers From 1 -> 15 : ' + i);
}

console.log('===========================');


//16-
console.log('16-');

var start = 10;
while(start >= 1){
    console.log('Count From 10 -> 1 : ' + start);
    start--;
}

console.log('===========================');


//17-
console.log('17-');

var arr = ["Sara", "Omar", "Mona", "Youssef"];

console.log('The array is : ' + '[ ' + arr.join(' , ') + ' ]');

for(var val of arr) {
    console.log(val);
}

console.log('===========================');

//18-
console.log('18-');

console.log('Using a for \n break to print numbers from 1 to 10, but stop the loop before printing \n 7. The output should be: 1 2 3 4 5 6');


for (var i = 1; i <= 10; i++) {
    if(i === 7) {
        break;
    }

    console.log(i);
}

console.log('===========================');

//19-
console.log('19-');

for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 12; j++) {
        console.log(i + ' * ' + j + ' = ' + i*j);
    }    
}

console.log('===========================');

//20-
console.log('20-');

for (var i = 1; i <= 30; i++) {
    if(i === 26) {
        break;
    }
    if(i % 3 === 0) {
       continue;
    }

   console.log(i);
}

console.log('===========================');
console.log('========== PART D ==========');
console.log('===========================');

//21-
console.log('21-');

var word = 'HELLO';

for (var i = 0; i < word.length; i++) {
   console.log(word[i]);  
}

console.log('===========================');

//22-
console.log('22-');

var array = [10, 20, 30, 40];
var total = 0;
for(var ele of array) {
    total += ele;
}
console.log('Array : ' + array.join(' '));

console.log('Total : ' + total);

console.log('===========================');

//23-
console.log('23-');

var sentace = 'JavaScript is amazing and awesome'.toLowerCase();
var counter = 0;
for (var i = 0 ; i < sentace.length ; i++) {
    if(sentace[i] === 'a'){
        counter++;
    }
}

console.log('Sentance is : ' + sentace);
console.log('A counted : ' + counter);

console.log('===========================');


//24-
console.log('24-');

var grades = [70, 85, 92, 60, 77, 88];

console.log('Grades : ' + grades.join(' '));
for (var ele of grades){
    if(ele % 2 === 0){
        console.log('Even Grade : ' + ele);
    }
}

console.log('===========================');

//25-
console.log('25-');

for (let i = 0; i < 4; i++) {
    console.log('*'.repeat(i+1)); // عملتها كدا عشان الكونسول بيطلع توتال المتشابه ف مش بيرسم الرسمه
}

console.log('===========================');

//26-
console.log('26-');

var studentNames = ["ahmed", "sara", "omar", "laila", "hassan"];
console.log('Students array (before) : ' +  '[ ' + studentNames.join(' , ') + ' ]');

for (var i = 0; i < studentNames.length; i++) {
    studentNames[i] = studentNames[i].toUpperCase();
}

console.log('Students array (after) : ' +  '[ ' + studentNames.join(' , ') + ' ]');

var counter = 0 ;
for (var i = 0; i < studentNames.length; i++) {
    if(studentNames[i].startsWith('A') || studentNames[i].startsWith('S')){
        console.log('Names Start With (A OR S) : ' + studentNames[i]);
        counter++;
    }else {
        continue;
    }
}
console.log('Matched Number : ' + counter);

console.log('===========================');


/*================ Handling Dom =================*/
var infoH3 = document.getElementById('info');
var categoryH3 = document.getElementById('category');
var messageH3 = document.getElementById('message');



/*================ Handling Employee Object =================*/

var user = {};

user.name = prompt('Enter Your Name : ');
user.birth = +prompt('Enter Your Birth Year : ');
user.isStuding = confirm('Are you a student ?');
user.age = new Date().getFullYear() - user.birth;




var type = null;
if(user.age < 13) {
    type = 'Kid';
}else if(user.age >= 13 && user.age <= 17) {
    type = 'Teen';
}else if(user.age >= 18 && user.age <= 59) {
    type = 'Adult';
}else {
    type = 'Senior';
}

var message = user.isStuding ? "Don't forget to study hard!" : "";


window.alert(`
    Username : ${user.name}
    Birth : ${user.birth}
    Age : ${user.age}
    isStudying : ${user.isStuding}
    ${message ? message : ""}
    `);

console.log('Username : ' + user.name);
console.log('Birth : ' + user.birth);
console.log('Age : ' + user.age);
console.log('isStudying : ' + user.isStuding);
if(message) {
    console.log('Message : ' + message);
}


infoH3.innerText = 'Hello ' + user.name + ' ,you are ' + user.age + ' years old.';
categoryH3.innerText = 'Category : ' + type;
messageH3.innerText = message;


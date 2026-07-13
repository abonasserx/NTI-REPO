/*================ Handling Dom =================*/
var nameH3 = document.getElementById('name');
var ageH3 = document.getElementById('age');
var yearH3 = document.getElementById('rate');
var rateH3 = document.getElementById('years');
var salaryH3 = document.getElementById('salary');

var jobCategoryH3 = document.getElementById('JobCategory');
var perfromanceH3 = document.getElementById('performance');
var bouncedSalaryH3 = document.getElementById('bouncedSalary');
var shiftH3 = document.getElementById('shift');

/*================ Handling Employee Object =================*/

var employee = {};

employee.name = prompt('Enter Your Name : ');
employee.age = +prompt('Enter Your Age : ');
employee.years = +prompt('Enter Your Years Of EXP : ');
employee.salary = +prompt('Enter Your Salary : ');
employee.rate = +prompt('Rate Yourself (1/10):');

nameH3.innerText = 'Name : ' + employee.name;
ageH3.innerText = 'age : ' + employee.age;
yearH3.innerText = 'years of exp : ' + employee.years;
salaryH3.innerText = 'Employee\'s Salary: ' + employee.salary;
rateH3.innerText = 'rate of employee : ' + employee.rate;

/*================ Handling Job Category =================*/

var status = null;
if(employee.years <= 2) {
    status = 'Junior';
}else if(employee.years > 2 && employee.years < 5) {
    status = "Mid-Level";
}else if(employee.years >= 5 && employee.years < 10) {
    status =  "Senior";
}else {
    status =  "Expert";
}

jobCategoryH3.innerText = 'Job Category : ' + status;


/*================ Handling Employee Rate =================*/

var hisLevel = null;
switch(employee.rate) {
    case 10:
    case 9:
        hisLevel = "Excellent";
    break;

    case 8:
    case 7: 
        hisLevel = "Good";
    break;

    case 6:
    case 5: 
        hisLevel = "Average";
    break;

    default:
        hisLevel = "Needs Improvement";
}

if(employee.rate > 10 || employee.rate < 1) {
    var hisLevel = 'Input is Out Of Range';
}

perfromanceH3.innerText = 'Perfromance Level : ' + hisLevel;


/*================ Handling Bounced Salary =================*/

var bonucedSalary = null;
var bonus = null;
if(employee.years >= 0 && employee.years <= 2) {
    bonus = employee.salary * (10/100);
}else if (employee.years >= 3 && employee.years <= 5) {
    bonus = employee.salary * (15/100);
}else {
    bonus = employee.salary * (20/100);
}
bonucedSalary = employee.salary + bonus;
bouncedSalaryH3.innerText = 'Bounced Salary : ' + bonucedSalary;


/*================ Handling Shift =================*/
var date = new Date();
var timeDate = date.getHours();
var shift = null;

if(timeDate >= 9 && timeDate <= 18){
    shift = "day shift.";
}else {
    shift = "night shift.";
}

shiftH3.innerText = 'Working Shift : ' + shift;
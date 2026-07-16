/*============== Working with setTimeout and setInterval ==============*/
/*=====================================================================*/


//1-
var timeOutId= setTimeout(()=>{
    console.log("Hello, User!");
},3000);

clearTimeout(timeOutId);


//2-
var count = 10;
var thisInterval = setInterval(()=>{
    console.log('From Interval 1 : ' + count--);
    if(count === 0) {
        console.log('ZERO FROM INTERVAL 1');
        clearInterval(thisInterval);
        console.log( "Time's up! IN INTERVAL 1");
    }
},1000);

//3-
var count2 = 10;
var thisInterval2 = setInterval(()=>{
    console.log('From Interval 2 : ' + count2--);
    if(count2 === 5) {
        console.log('FIVE REACHED FROM INTERVAL 2');
        clearInterval(thisInterval2);
    }
},1000);

//4-

var example = setTimeout(()=>{
    console.log( "This will be cleared!");
},5000)

clearTimeout(example);
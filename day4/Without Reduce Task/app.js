var data = [{name : "mohamed",age : 30 , city : "cairo"},
    {name : "Khaled",age : 25 , city : "cairo"},
    {name : "Ibrahim",age : 30 , city : "alex"}];

//with reduce
var categoriedCity = data.reduce(function(acc, ele){
    acc[ele.city] = acc[ele.city] || [];
    acc[ele.city].push(ele);
    return acc;
},{});

console.log('With Reduce : ');
console.log(categoriedCity);
console.log('====================');


//with Out Reduce
var acc = {};
for(var ele of data) {
    acc[ele.city] = acc[ele.city] || [];
    acc[ele.city].push(ele);
}

console.log('Without Reduce : ');
console.log(acc);
console.log('====================');


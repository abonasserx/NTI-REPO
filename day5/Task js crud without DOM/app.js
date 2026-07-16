/*============== Task js crud without DOM ==============*/
/*======================================================*/

/*
{name:"pen", price:300 , color:'red'}
*/
var items = [];


function create(item) {
    items.push(item);   
}

function read() {
    for(var item of items){
        for(var it in item){
            console.log(it + ' = ' +item[it]);
        }
        console.log('===');
    }
}


/*Updating Dynimac ;') اي خدمه*/ 
/*لو مباسي item مش في propreties مش موجوده هيتاجهلها وهيابديت الموجود*/

/*

هنا هيابديت ال car و id لانهم بالفعل موجودين
update(0,{name:"car" , id:"0102030"});



هيتجاهل التايمر هنا 
update(0,{name:"car" , id:"0102030",timer:"AM"});

*/

function update(index,item) {
    if(!items[index]){
        console.log('Item Not Found To Update !');
        return;
    } 
    for(var it in item){
        if(items[index][it]){
            items[index][it] = item[it];
            console.log('Updated ' + it);
        }
    }
}

function delet(index) {
    (items[index]) ? delete items[index] : null;
}


create({id:"12356s214",name:"pen", price:300 , color:'red'});
create({id:"651595461",name:"book", price:200 , color:'black'});


read();



update(0,{name:"car" , id:"0102030"});
read();

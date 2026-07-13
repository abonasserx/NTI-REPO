var username = 'admin';
var pass = '123456wW';


if (username === 'admin' && pass.length >= 8) {
    if(pass === '123456wW'){
        console.log('UserName : ' + username);
        console.log('Pass : ' + pass);
    }else {
        console.log('Wrong Password');
    }
}else if (username === null){
    console.log('Username is required');
}else{
    if(pass.length < 8) {
        console.log('Password must be at least 8 characters');
    }else {
        console.log('Error Credintals Go Sign Up');
    }
}
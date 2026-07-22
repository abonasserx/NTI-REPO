
const root = document.getElementById('root');

/*=======================================================*/
/*================== CREATING ELEMENTS ==================*/
/*=======================================================*/

// ====================> FORM ELEMENTS

const cardFormContent = document.createElement('div');
const cardHeader = document.createElement('div');
const cardBody = document.createElement('div');
const formTitle = document.createElement('h1');
const form = document.createElement('form');

const labelFName = document.createElement('label');
const labelLName = document.createElement('label');
const labelAge = document.createElement('label');
const labelGender = document.createElement('label');
const labelDepartment = document.createElement('label');
const labelCheckBox = document.createElement('label');

const inputFName = document.createElement('input');
const inputLName = document.createElement('input');
const inputAge = document.createElement('input');
const inputGender = document.createElement('select');
const inputDepartment = document.createElement('select');


const divBtn = document.createElement('div');
const btnSumbit = document.createElement('button');
const btnTable = document.createElement('button');
const checkGrad = document.createElement('input');

// ====================================


/*=======================================================*/
/*=============== Adding Elements to DOM ================*/
/*=======================================================*/

// ====================> Adding Main Divs and modifing main elements

root.appendChild(cardFormContent);
cardFormContent.appendChild(cardHeader);
cardHeader.appendChild(formTitle);
cardFormContent.appendChild(cardBody);
cardBody.appendChild(form);



cardFormContent.classList.add('card');
cardHeader.classList.add('card-header');
cardBody.classList.add('card-body');
divBtn.classList.add('divBtn');

//=======================================

// ====================> Modifing Form Elements

formTitle.classList.add('title');
formTitle.textContent = 'Registration Form';


const labels = [labelFName,labelLName,labelAge,labelGender,labelDepartment];
const inputs = [inputFName,inputLName,inputAge,inputGender,inputDepartment];
const ids = ['fname','lname','age','gender','department'];
const labelNames = ['First Name', 'Last Name', 'Age', 'Gender', 'Department'];
const placeHolders = ['Your First Name ...', 'Your Last Name ...', '18'];
const names = ['fname', 'lname', 'age'];
const types = ['text','text','number'];

for (let i = 0; i < inputs.length; i++) {
    form.appendChild(labels[i]);
    form.appendChild(inputs[i]);
    labels[i].textContent = labelNames[i];
    labels[i].setAttribute('for',ids[i]);
    if(i < 3) {
        inputs[i].id = ids[i];
        inputs[i].placeholder = placeHolders[i];
        inputs[i].name = names[i];
        inputs[i].type = types[i];
    }
}

inputAge.max = 60;
inputAge.min = 18;

// ====================> Handling Select

inputGender.name = 'gender';
inputGender.id = 'gender';
inputDepartment.name = 'department';
inputDepartment.id = 'department';

const optionsGender = ['Select One','Male','Female'];

for(let ele of optionsGender) {
    if(ele ==='Select One'){
        inputGender.innerHTML += `<option value="" selected>${ele}</option>`;
    }else{
        inputGender.innerHTML += `<option value=${ele.toLowerCase()}>${ele}</option>`;
    }
}


const optionsDepartments = ['Select One','IS','CS'];

for(let ele of optionsDepartments) {
    if(ele ==='Select One'){
        inputDepartment.innerHTML += `<option value="" selected>${ele}</option>`;
    }else{
        inputDepartment.innerHTML += `<option value=${ele.toLowerCase()}>${ele}</option>`;
    }
}

// ==================================

// ====================> Handling Button

const checkDiv = document.createElement('div');
checkDiv.appendChild(labelCheckBox)
checkDiv.appendChild(checkGrad);
checkDiv.classList.add('checkDiv');


form.appendChild(checkDiv);
form.appendChild(divBtn);

labelCheckBox.style.display = 'inline-block';



divBtn.appendChild(btnTable);
divBtn.appendChild(btnSumbit);

btnSumbit.textContent = 'Add Person';
btnSumbit.type = 'sumbit';
btnSumbit.classList.add('sbtBtn');

labelCheckBox.textContent = 'Graduated : ';
labelCheckBox.setAttribute('for', 'checkGrad');


checkGrad.addEventListener('change', (event) => {
if (event.target.checked) {
    checkGrad.value = 'on';
    
} else {
    checkGrad.value = null;
}});

checkGrad.type = 'checkbox';

checkGrad.name = 'isGraduted';
checkGrad.id = 'checkGrad';



btnTable.classList.add('tblBtn');
btnTable.textContent = 'Go to Table ->';



function goToTable () {
    cardFormContent.classList.remove('animate__jello');
   cardFormContent.classList.add('animate__fadeOutBottomRight');

   setTimeout(()=>{
    cardFormContent.classList.add('hide');
   },500);
   setTimeout(()=>{
        renderTable(users);
   },500);
    root.appendChild(cardFormContent);
}

btnTable.addEventListener('click', ()=>{
    goToTable();
});



/* 
======================================
======================================
======================================
======================================
=============LOGIC HERE===============
======================================
======================================
======================================
======================================
======================================
======================================
*/


/* {fname:"Mohamed", lname:"Abdelnasser", age:22 , gender:"male" , department:"cs" , isGraduated:"on"} */
let users = [];
if(localStorage.getItem('tableData')){
    users = JSON.parse(localStorage.getItem('tableData'));
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
});

//Alert Function

function createAlert (alert) {
    const temp = document.createElement('div');
    temp.classList.add('animate__animated');
    temp.classList.add('animate__bounceInLeft');
    temp.classList.add('tempAlert');
    temp.innerHTML += alert;
    root.appendChild(temp);
    setTimeout(()=>{
        temp.classList.remove('animate__bounceInLeft');
        temp.classList.add('animate__bounceOutRight');
    },3000);
    setTimeout(()=>{
        console.log('removed');
        root.removeChild(temp);
    },4000);
}

// save function
function save(list) {
    if(list.length) {
        localStorage.setItem('tableData', JSON.stringify(list));
    }else{

    }
}

// CRUD Functions
let isUpdating = false

function create (item) {
    let successAlertPopup = `
    <div class="success-alert tempAlert">
    <div class="icon">✓</div>

    <div class="text">
        <h3>Success</h3>
        <p>The Person Details has been created successfully.</p>
    </div>
    </div>
`;
    createAlert(successAlertPopup);

    console.log('fired');
    users.push(item);
}

function delet (index){
    delete users[index];
    localStorage.setItem('tableData', JSON.stringify(users));
    reloadTable();
}
let userToUpdate = null;
function editByIndex(index) {
    isUpdating = true;
    btnSumbit.textContent = 'Update Person';

    userToUpdate = users[index];
    backToForm();

    inputFName.value = userToUpdate.fname;
    inputLName.value = userToUpdate.lname;
    inputAge.value = userToUpdate.age;
    inputGender.value = userToUpdate.gender;
    inputDepartment.value = userToUpdate.department;

    if(userToUpdate.isGrad) {
        checkGrad.setAttribute("checked",null);
    }

    // btnSumbit.classList.add('hide');
}



// VALIDATION

let errorMsg = null;

function validationFunction () {
    if(inputFName.value.trim().length < 3) {
        errorMsg = 'First name must be at least 3 Characters !';
        errorHandling(errorMsg);
        return 0;
    }else if(inputLName.value.trim().length < 3) {
        errorMsg = 'Last name must be at least 3 Characters !';
        errorHandling(errorMsg);
        return 0;
    }else if(+inputAge.value < 18 || +inputAge.value > 60){
        errorMsg = 'Age Out Of Range 18 -> 60 !';
        errorHandling(errorMsg);
        return 0;
    }else if(!inputGender.value) {
        errorMsg = 'Please Choose One Of Genders !';
        if(!optionsGender.includes(inputGender.value)){
            errorMsg = 'Inncorrect Value in Genders Feild';
        }
        errorHandling(errorMsg);
        return 0;
    }else if(!inputDepartment.value) {
        errorMsg = 'Please Choose One Of Departments !';
        if(!optionsDepartments.includes(inputDepartment.value)){
            errorMsg = 'Inncorrect Value in Departments Feild';
        }
        errorHandling(errorMsg);
        return 0;
    }else {
        return 1;
    }
}



btnSumbit.addEventListener('click', ()=>{
    if(!isUpdating) {
        if(validationFunction()){
            create({fname:inputFName.value, lname:inputLName.value, age:inputAge.value, gender:inputGender.value , department:inputDepartment.value, isGrad:checkGrad.value});
        }else {
            return;
        }
        
        save(users); // saves in local storage
    }else {
            if(userToUpdate) {
                btnSumbit.textContent = 'Update Person';
                const index = users.indexOf(userToUpdate);
                if(!validationFunction()){
                    return;
                }

                users[index].fname = inputFName.value;
                users[index].lname = inputLName.value;
                users[index].age= inputAge.value;
                users[index].gender= inputGender.value;
                users[index].department= inputDepartment.value;
                users[index].isGrad= checkGrad.value;
                
                localStorage.setItem('tableData', JSON.stringify(users));
                
                // btnSumbit.classList.remove('hide');
                // divBtn.removeChild(updateBtn);
                goToTable();
                resetUpdateToAddPerson();
            }
    }
});

function errorHandling (msg) {
    let errorAlertPopup = `
    <div class="alert tempAlert">
    <div class="icon">✕</div>

    <div class="content">
        <h4>Error</h4>
        <p>${msg}</p>
    </div>
    </div>
`;
    createAlert(errorAlertPopup);
    
    errorMsg = null;
}

// Animation

cardFormContent.classList.add('animate__animated');
cardFormContent.classList.add('animate__jello');


// Table 

let tableDiv = null;
function reloadTable (){
    root.removeChild(tableDiv);
    renderTable(users);
}

function backToForm () {
    tableDiv.classList.remove('animate__fadeInBottomLeft');
    tableDiv.classList.add('animate__fadeOutBottomRight');

    setTimeout(()=>{
        root.removeChild(tableDiv);
    },500);
    setTimeout(()=>{
        cardFormContent.classList.remove('hide');
    },500);
    cardFormContent.classList.remove('animate__fadeOutBottomRight');
    cardFormContent.classList.add('animate__fadeInBottomLeft');
}

function renderTable (list) {
    tableDiv = document.createElement('div');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const trHead = document.createElement('tr');
    const searchInput = document.createElement('input');

    searchInput.placeholder = 'Search Name/old/department'
    searchInput.classList.add('searchInput');

    tableDiv.classList.add('card');
    root.appendChild(tableDiv);



    tableDiv.appendChild(table);

    
    tableDiv.classList.add('animate__animated');
    tableDiv.classList.add('animate__fadeInBottomLeft');

    table.classList.add('modern-table');


    table.appendChild(thead);
    table.appendChild(tbody);

    thead.appendChild(trHead);

    const headNames = ['Name', 'Age', 'Gender', 'Department','isGraduated', 'Actions'];

    for(let ele of headNames) {
        trHead.innerHTML += `
            <td>${ele}</td>
        `;
    }

    
    function showResults(list) {
        if(searchInput.value){
            tbody.innerHTML = "";
            list.forEach((user,index)=>{
                        if(user){
                            tbody.innerHTML += `
                                <tr>
                                    <td>${user.fname + ' ' + user.lname}</td>
                                    <td>${user.age}</td>
                                    <td>${user.gender}</td>
                                    <td>${user.department}</td>
                                    <td>${user.isGrad ? 'Graduated' : "Student"}</td>
                                    <td>
                                        <button onclick="editByIndex(${users.indexOf(user)})" class="edit">Edit</button>
                                        <button onclick="delet(${users.indexOf(user)})" class="delete">Delete</button>
                                    </td>
                                </tr>
                            `;
                        }
            });
        }else{
            tbody.innerHTML = "";
            users.forEach((user,index) =>{
                if(user){
                    tbody.innerHTML += `
                                <tr>
                                    <td>${user.fname + ' ' + user.lname}</td>
                                    <td>${user.age}</td>
                                    <td>${user.gender}</td>
                                    <td>${user.department}</td>
                                    <td>${user.isGrad ? 'Graduated' : "Student"}</td>
                                    <td>
                                        <button onclick="editByIndex(${index})" class="edit">Edit</button>
                                        <button onclick="delet(${index})" class="delete">Delete</button>
                                    </td>
                                </tr>
                    `;
                }
            });
        }
        
    }

    let filteredUsers = [];
    showResults(filteredUsers);
    searchInput.addEventListener('keyup',(event)=>{
        filteredUsers = users.filter((user)=>{
            if(user) {
                return (user.fname.toLowerCase().includes(searchInput.value.trim().toLowerCase()) ||
                user.lname.toLowerCase().includes(searchInput.value.trim().toLowerCase()) ||
                +user.age === +searchInput.value ||
                user.department.toLowerCase() === searchInput.value.trim().toLowerCase()||
                user.gender.toLowerCase().includes(searchInput.value.trim().toLowerCase())); 
            }
        });

        showResults(filteredUsers);
});


    
    
    const backBtn = document.createElement('button');
    const clearBtn = document.createElement('button');

    backBtn.textContent = 'Back ->';
    clearBtn.textContent = 'clear';

    backBtn.classList.add('backBtn');
    tableDiv.appendChild(backBtn);
    tableDiv.appendChild(clearBtn);
    

    backBtn.addEventListener('click', ()=>{
        resetUpdateToAddPerson();
        backToForm();
    });

    clearBtn.addEventListener('click', ()=>{
        localStorage.clear();
        users = [];
        reloadTable();
    });

    

    tableDiv.appendChild(searchInput);

    
    
}

function resetUpdateToAddPerson () {
    isUpdating = false;
    btnSumbit.textContent = 'Add Person';
    userToUpdate = null;
}

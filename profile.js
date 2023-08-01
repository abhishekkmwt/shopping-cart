const firstNameInput=document.getElementById('first-name');
const lastNameInput=document.getElementById('last-name');
const oldPassInput=document.getElementById('old-pass');
const newPassInput=document.getElementById('new-pass');
const confPassInput=document.getElementById('conf-pass');

const saveInfoBtn=document.getElementById('save-info');
const changePassBtn=document.getElementById('changePass');
const logoutBtn=document.getElementById('logout');

const profileForm =document.getElementById('profile-form');
const passForm =document.getElementById('pass-form');



let currentUser=JSON.parse(localStorage.getItem('currentUser'));
let users=JSON.parse(localStorage.getItem('users'));

saveInfoBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    let updatedFNameVal=firstNameInput.value.trim();
    let updatedLNameVal=lastNameInput.value.trim();
    currentUser.firstName=updatedFNameVal;
    currentUser.lastName=updatedLNameVal;
    users.forEach(element => {
        if(element.email===currentUser.email){
            element.firstName=updatedFNameVal;
            element.lastName=updatedLNameVal;
        }
    });
    localStorage.setItem('currentUser',JSON.stringify(currentUser));
    localStorage.setItem('users',JSON.stringify(users));
    const errorMssg= document.createElement('div');
    errorMssg.innerText=`Success: Profile Name Updated.`
    errorMssg.style.color='black'
    errorMssg.style.display='flex'
    errorMssg.style.justifyContent='center'
    errorMssg.style.fontWeight='600'
    errorMssg.style.fontSize='15px'
    profileForm.appendChild(errorMssg);
});


changePassBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    let oldPassVal=oldPassInput.value.trim();
    let newPassVal=newPassInput.value.trim();
    let confPassVal=confPassInput.value.trim();
    if(oldPassVal===''||newPassVal===''||confPassVal===''){
                const errorMssg= document.createElement('div');
                errorMssg.innerText=`Error: All fields are mandatory!`
                errorMssg.style.color='black'
                errorMssg.style.display='flex'
                errorMssg.style.justifyContent='center'
                errorMssg.style.fontWeight='600'
                errorMssg.style.fontSize='15px'
                passForm.appendChild(errorMssg);
    }
    else{
        if(oldPassVal!==currentUser.password){
            const errorMssg= document.createElement('div');
            errorMssg.innerText=`Error: Old Password is Incorrect.`
            errorMssg.style.color='black'
            errorMssg.style.display='flex'
            errorMssg.style.justifyContent='center'
            errorMssg.style.fontWeight='600'
            errorMssg.style.fontSize='15px'
            passForm.appendChild(errorMssg);
        }
        else{
            if(newPassVal!==confPassVal){
                const errorMssg= document.createElement('div');
                errorMssg.innerText=`Error: New Password and Confirm Password should be same!!.`
                errorMssg.style.color='black'
                errorMssg.style.display='flex'
                errorMssg.style.justifyContent='center'
                errorMssg.style.fontWeight='600'
                errorMssg.style.fontSize='15px'
                passForm.appendChild(errorMssg);
            }
            else{
                if(oldPassVal===newPassVal){
                    const errorMssg= document.createElement('div');
                    errorMssg.innerText=`Error: Old Password and New Password should be different!!.`
                    errorMssg.style.color='black'
                    errorMssg.style.display='flex'
                    errorMssg.style.justifyContent='center'
                    errorMssg.style.fontWeight='600'
                    errorMssg.style.fontSize='15px'
                    passForm.appendChild(errorMssg);
                }
                else{
                    let updatedPass=newPassInput.value.trim();
                    currentUser.password=updatedPass;
                    users.forEach(element => {
                        if(element.email===currentUser.email){
                            element.password=updatedPass;
                        }
                    });
                    localStorage.setItem('currentUser',JSON.stringify(currentUser));
                    localStorage.setItem('users',JSON.stringify(users));
                    const errorMssg= document.createElement('div');
                    errorMssg.innerText=`Success: Password Updated.`
                    errorMssg.style.color='black'
                    errorMssg.style.display='flex'
                    errorMssg.style.justifyContent='center'
                    errorMssg.style.fontWeight='600'
                    errorMssg.style.fontSize='15px'
                    passForm.appendChild(errorMssg);
                }
            }
        }
    }
});

logoutBtn.addEventListener('click',()=>{
    localStorage.removeItem('currentUser');
    window.location.href='./login.html'
});

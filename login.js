const loginForm=document.getElementById('login-form');
const emailInput=document.getElementById('email');
const passInput=document.getElementById('pass');
const loginBtn=document.getElementById('login');

let users=JSON.parse(localStorage.getItem('users'));
console.log(users);
loginBtn.addEventListener('click',(event)=>{
    event.preventDefault();

    let emailVal=emailInput.value.trim();
    let passVal=passInput.value.trim();
    console.log(passVal);
   let obj= users.filter(element => {
         return element.email===emailVal;
    });
    let obj1=obj[0];
    console.log(obj1.password);
    if(emailVal===''|| passVal===''){
        const errorMssg= document.createElement('div');
            errorMssg.innerText=`Error: All fields are mandatory!`
            errorMssg.style.color='black'
            errorMssg.style.display='flex'
            errorMssg.style.justifyContent='center'
            errorMssg.style.fontWeight='600'
            errorMssg.style.fontSize='15px'
            loginForm.appendChild(errorMssg);
    }
    else{
        if(obj1===null || obj1.password!== passVal){
            const errorMssg= document.createElement('div');
                errorMssg.innerText=`Error: Invalid Credentials!! `
                errorMssg.style.color='black'
                errorMssg.style.display='flex'
                errorMssg.style.justifyContent='center'
                errorMssg.style.fontWeight='600'
                errorMssg.style.fontSize='15px'
                loginForm.appendChild(errorMssg);
        }
        else{
            localStorage.setItem('currentUser',JSON.stringify(obj1));
            window.location.href='./shop.html';
        }
    }
        
});
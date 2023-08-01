window.onload=function(){
    if(window.location.pathname=='/profile.html'&& !localStorage.getItem("currentUser")){
        window.location.href='./login.html'
    }
    if(window.location.pathname=='/login.html'&& localStorage.getItem("currentUser")){
        window.location.href='./shop.html'
    }
    if(window.location.pathname=='/mycart.html'&& !localStorage.getItem("currentUser")){
        window.location.href='./login.html'
    }
    if(window.location.pathname=='/sign.html'&& localStorage.getItem("currentUser")){
        window.location.href='./shop.html'
    }
}

const navHome=document.getElementById('home');
const navLogin=document.getElementById('login-index');
const navSignup=document.getElementById('signup-index');
const navMycart=document.getElementById('mycart-index');
const navProfile=document.getElementById('profile.index');

const login1Btn=document.getElementById('login1');
const signup1Btn=document.getElementById('signup1');

navHome.addEventListener('click',()=>{
    navHome.href='./index.html';
    console.log(navHome);
})

navLogin.addEventListener('click',()=>{
    if(localStorage.getItem("currentUser")){
        window.location.href='./shop.html'
    }else{
        navLogin.href='./login.html';
    }
   
})

navSignup.addEventListener('click',()=>{
    if(localStorage.getItem("currentUser")){
        window.location.href='./shop.html'
    }
    else{
        navSignup.href='./signup.html';
    }
    
})

navMycart.addEventListener('click',()=>{
    if(localStorage.getItem("currentUser")){
        window.location.href='./mycart.html'
    }
    else{
        navMycart.href='./login.html';
    }
    
})

navProfile.addEventListener('click',()=>{
    if(localStorage.getItem("currentUser")){
        window.location.href='./profile.html'
    }
    else{
        navProfile.href='./profile.html';
    }
    
})


"use srict";
function registerUser(){
    let fname= document.getElementById('fname').value;
    let lname= document.getElementById('lname').value;
    let email= document.getElementById('email').value;
    let pass= document.getElementById('pass').value;
    localStorage.setItem('fname',fname);
    localStorage.setItem('lname',lname);
    localStorage.setItem('email',email);
    localStorage.setItem('pass',pass);
    let home= "./home.html";
    window.open(home);
    // console.log(home); 
    // document.getElementById("register").addEventListener("click", home);
}


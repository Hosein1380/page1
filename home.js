


function loginpm() {
    let user= localStorage.getItem('fname');
    document.getElementById('pm').innerHTML= 'wellcom' + user ;
    console.log(user);

}

function singup(){
let form= "./login.html";
window.open(form); 
}
loginpm();
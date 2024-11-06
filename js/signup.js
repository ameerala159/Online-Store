let userName = document.querySelector("#userName");
let userNameEr = document.querySelector(".usernameer");
let userNameChecked = false;

userName.onblur = function () {  
    if(userName.value== ""){
        userNameEr.style.display = "block";
        userNameEr.innerHTML = "Don't leave this field empty !!";
        userName.style.borderColor = "red";
    }
    else if(userName.value.length < 5){
        userNameEr.style.display = "block";
        userNameEr.innerHTML = "Minimum length is five letters";
        userName.style.borderColor = "red";
    }
    else {
        userNameEr.style.display = "none";
        userName.style.borderColor = "Chartreuse";
        userNameChecked = true;
    }
}

let email = document.querySelector("#email");
let emailChecked = false;
let emailEr = document.querySelector(".emailer");
let approvedEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

email.onblur = function () {  
    if(email.value== ""){
        emailEr.style.display = "block";
        emailEr.innerHTML = "Don't leave this field empty !!";
        email.style.borderColor = "red";
    }
    else if(!(email.value.match(approvedEmail))){
        emailEr.style.display = "block";
        emailEr.innerHTML = "Email format is incorrect";
        email.style.borderColor = "red";
    }
    else {
        emailEr.style.display = "none";
        email.style.borderColor = "Chartreuse";
        emailChecked = true;
    }
}

let password = document.querySelector("#password");
let passworEr = document.querySelector(".passworder");
let passwordChecked = false;
let approvedPassword = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]))/
password.onblur = function () {  
    if(password.value== ""){
        passworEr.style.display = "block";
        passworEr.innerHTML = "Don't leave this field empty !!";
        password.style.borderColor = "red";
    }
    else if(password.value.length < 8){
        passworEr.style.display = "block";
        passworEr.innerHTML = "Minimum length is 8 letters"
        password.style.borderColor = "red";
    }
    else if(!(password.value.match(approvedPassword))){
        passworEr.style.display = "block";
        passworEr.innerHTML = "Password should contian 1 digit , 1 lowercase and 1 uppercase characters , 1 special charecter"
        password.style.borderColor = "red";
    }
    else{
        passworEr.style.display = "none";
        password.style.borderColor = "Chartreuse";
        passwordChecked = true ;
    }
}


let cpassword = document.querySelector("#cpassword");
let cpasswordEr = document.querySelector(".cpassworder");
let cpasswordchecked = false;

cpassword.onblur = function () {  
    if(cpassword.value== ""){
        cpasswordEr.style.display = "block";
        cpasswordEr.innerHTML = "Don't leave this field empty !!";
        cpassword.style.borderColor = "red";
    }
    else if(cpassword.value !== password.value){
        cpasswordEr.style.display = "block";
        cpasswordEr.innerHTML = "The Two Passwords don't match"
        cpassword.style.borderColor = "red";
    }
    else{
        cpasswordEr.style.display = "none";
        cpassword.style.borderColor = "Chartreuse";
        cpasswordchecked = true;
    }
}
let checkedAll = document.querySelector(".checked");
let form = document.querySelector("#form");
form.onsubmit = function(e){
    if(!(userNameChecked && emailChecked && passwordChecked && cpasswordchecked)){
        checkedAll.style.display = "block";
        e.preventDefault()
    }

}
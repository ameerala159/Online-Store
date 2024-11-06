let userName = document.querySelector("#userName");
let userNameEr = document.querySelector(".usernameer");
let userNameChecked = false;

userName.onblur = function () {  
    if(userName.value== ""){
        userNameEr.style.display = "block";
        userNameEr.innerHTML = "Don't leave this field empty !!";
        userName.style.borderColor = "red";
    }
    else {
        userNameEr.style.display = "none";
        userName.style.borderColor = "Chartreuse";
        userNameChecked = true;
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
    
    else{
        passworEr.style.display = "none";
        password.style.borderColor = "Chartreuse";
        passwordChecked = true ;
    }
}



let checkedAll = document.querySelector(".checked");
let form = document.querySelector("#form");
form.onsubmit = function(e){
    if(!(userNameChecked  && passwordChecked )){
        checkedAll.style.display = "block";
        e.preventDefault()
    }

}
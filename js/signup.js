let userName = document.querySelector("#userName");
let userNameEr = document.querySelector(".usernameer");

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
    else if(userName.value !== ""){
        userNameEr.style.display = "none";
        userName.style.borderColor = "black";
    }
}

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let cpassword = document.querySelector("#cpassword");



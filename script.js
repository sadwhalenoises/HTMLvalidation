let emailString, passwordString;
let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


document.getElementById("submit").addEventListener("click", dataValidation());

function dataValidation(){
    
    emailString = document.getElementById("email").value;
    passwordString = document.getElementById("pwd").value;
    ;
    if(!emailRegex.test(emailString) && !passwordRegex.test(passwordString)){
        document.getElementById("email").value = "";
        document.getElementById("pwd").value = "";

        window.alert("Enter a valid email address.\nEnter a password with a min of 8 letters, 1 symbol, upper and lower case letters and a number.")

    }else if(!emailRegex.test(emailString)){
        document.getElementById("email").value = "";
        window.alert("Enter a valid email address.")
    }
    else if(!passwordRegex.test(passwordString)){
        document.getElementById("pwd").value = "";
        window.alert("Enter a password with a min of 8 letters, 1 symbol, upper and lower case letters and a number.")
    }else{
        console.log("success!")
        document.getElementById("success").innerHTML = "Success!";
    }
}
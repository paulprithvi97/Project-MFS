let number = document.getElementById("number")
let pinNumber = document.getElementById("pinNumber")
let loginBtn = document.getElementById("loginBtn")
let errorMsg = document.getElementById("errorMsg")
let successMsg = document.getElementById("successMsg")

loginBtn.addEventListener("click", ()=> {
    if ( number.value == "0123456789" && pinNumber.value == 1234 ) {
successMsg.removeAttribute("hidden")
        console.log("Login Successful");
    }
    else {
        errorMsg.removeAttribute("hidden")
        console.log("Login Failed");
    }
})
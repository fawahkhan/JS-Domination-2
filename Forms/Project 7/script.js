let email = document.querySelector("#email")
let pw = document.querySelector("#password")
let form = document.querySelector("form")

form.addEventListener("submit" , function(dets){
    dets.preventDefault() ;

    document.querySelector("#emailError").textContent = ""
    document.querySelector("#pwError").textContent = ""
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let emailans = emailRegex.test(email.value)
    let pwans = passwordRegex.test(pw.value)

    let isValid = true ;

    if(!emailans){
        document.querySelector("#emailError").textContent = "Email is Incorrect"
        document.querySelector("#emailError").style.visibility = "initial"
        isValid = false 
    }
    if(!pwans){
        document.querySelector("#pwError").textContent = "Password is Incorrect"
        document.querySelector("#pwError").style.visibility = "initial"        
        isValid = false 
    }
    if(isValid){
        document.querySelector("#resultMessage").textContent = "Submitted"
    }
}) 
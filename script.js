let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("#loginForm")

form.addEventListener("submit" , function(dets){
  dets.preventDefault()
  // Accepts only Gmail addresses like: example@gmail.com
const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
// Must have: at least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    let eRegex =   gmailRegex.test(email.value)
    let pRegex = passwordRegex.test(password.value)
   
    let isValid = true;
    if(!eRegex){
      document.querySelector("#emailError").textContent = "Email is not correct"
      document.querySelector("#emailError").style.display = "initial"
      isValid = false;
    }else{
      document.querySelector("#emailError").textContent = "";
      document.querySelector("#emailError").style.display = "none"
    }
    
    if(!pRegex){
      document.querySelector("#passwordError").textContent = "Password is not correct"
     document.querySelector("#passwordError").style.display = "initial"
     isValid = false;
    }else{
       document.querySelector("#passwordError").textContent = "";
      document.querySelector("#passwordError").style.display = "none"
    }

    
    if(isValid){
      document.querySelector(".para").style.display = "initial"
    }

})
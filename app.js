var inputDiv = document.getElementsByClassName("input-div");
const btn = document.getElementById("btn");
var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const formValid=()=>{
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("email-address");
var password = document.getElementById("password");
    if (firstName.value === "") {
        inputDiv[0].classList.add("input-error");
      } else {
        inputDiv[0].classList.remove("input-error");
      }

      if (lastName.value === "") {    
        inputDiv[1].classList.add("input-error");
      } else {
        inputDiv[1].classList.remove("input-error");
      }

      if (email.value.match(regex)) {   
        inputDiv[2].classList.remove("input-error"); 
        
      } else {
        inputDiv[2].classList.add("input-error");
      }

      if (password.value === "") {    
        inputDiv[3].classList.add("input-error");
      } else {
        inputDiv[3].classList.remove("input-error");
      }
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    formValid();
  });

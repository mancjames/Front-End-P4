function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const form = document.getElementById('form')
const modalbg = document.querySelector(".bground");
const modalbg2 = document.querySelector(".bground-confirmation");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.getElementById('close');
const submitBtn = document.getElementById('btnSubmit');
const confirmationBtn = document.getElementById('btnConfirmation')




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Defining a function to display error message
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
  document.getElementById(elemId).classList.add('errormsg');
}

// validation - when clicking submit button run all functions to check form filled in

function validate(){

//DOM elements for validation
const firstName = document.reserve.first.value;
const lastName = document.reserve.last.value;
const location = document.reserve.location.value;
const email = document.reserve.email.value;
const birthDate = document.reserve.birthdate.value;
const tournament = document.reserve.quantity.value;
const terms = document.getElementById('checkbox1');

// defining error variables with a default value
var firstNameErr = lastNameErr = emailErr = birthDateErr  = tournamentErr = locErr = termsErr = false; //change to true

//validating first name with minimum of 2 characters

if (firstName.length < 2) {
  printError("firstNameError", "Please put in 2+ characters for your first name")
} else {
// added a validation to make sure only alpahbetical characters are used by using a regular expression
  var regex = /^[a-zA-Z\s]+$/;                
  if(regex.test(firstName) === false) {
      printError("firstNameError", "Please enter a valid name");
  } else {
      printError("firstNameError", "");
      firstNameErr = false;
  }
}

//validating surname with minimum of 2 characters

if (lastName.length < 2) {
  printError("lastNameError", "Please put in 2+ characters for your last name")
} else {
// added a validation to make sure only alpahbetical characters are used by using a regular expression
  var regex = /^[a-zA-Z\s]+$/;                
  if(regex.test(lastName) === false) {
      printError("lastNameError", "Please enter a valid name");
  } else {
      printError("lastNameError", "");
      lastNameErr = false;
  }
}

//validating email

if (email == "") {
  printError("emailError", "Please type in your email")
} else {
      printError("emailError", "");
      emailErr = false;
}

//validating date of birth

if (birthDate == "") {
  printError("birthDateError", "You must enter your date of bith")
} else {
      printError("birthDateError", "");
      birthDateErr = false;
}

//validating to make sure tournament number is a minimum of 0 

  if (tournament == "") {
    printError("tournamentError", "Please enter how many tournaments you've attended")
  } else {
        printError("tournamentError", "");
        tournamentErr = false;
  }


// validating location has been selected
if (location == "") {
  printError("locError", "Please select 1 option");
} else {
  printError("locError", "");
  locErr = false;
}

// validating tems and conditions has been selected

if (!terms.checked) {
    printError("termsError", "You must check to agree to terms and conditions.");
  } else {
    printError("termsError", "");
    termsErr = false;
  };

//prevent form from being submitted if any error

  if (firstNameErr || lastNameErr || emailErr || birthDateErr || tournamentErr || locErr || termsErr  == true) {
    return false;
  } else {
    return true;
  }
}

//Adding event listener to make confirmation screen appear
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    modalbg.style.display = "none";
    modalbg2.style.display = "block";
  });

  //Adding event listener to make confirrmation screen close
  confirmationBtn.addEventListener('click', () => {
    modalbg2.style.display = "none";
  })

// onclick function for radio buttons to remove error message when selected

function resetMsg() {
  printError("locError", "");
}

//close form

closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
})





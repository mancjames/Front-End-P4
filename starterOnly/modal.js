function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.getElementById('close');
const locationOptions = document.getElementsByName('location');
const locationErrorMsg = document.getElementById('location-errorMsg')
const termsCheckbox = document.getElementById('checkbox1');
const termsErrorMsg = document.getElementById('checkbox1-errorMsg');
const submitBtn = document.getElementById('btnSubmit');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// validation - radio buttons have required in html - however javascript below shows error message when none are selected
function validateLocation() {
  for (let i = 0; i < locationOptions.length; i++) {
    if (locationOptions[i].checked) {
      locationErrorMsg.style.display = "none";
      break
    } else {
      locationErrorMsg.style.display = "block";
    }
  }  
}

// onclick function for radio buttons to remove error message when selected

function resetMsg() {
  locationErrorMsg.style.display = "none";
}

// validation - making sure that terms and conditions are checked

termsCheckbox.addEventListener('change', ($event) => {
  if ($event.target.checked) {
    termsErrorMsg.style.display = 'none';
  } else {
    termsErrorMsg.style.display = 'inline-block';
    var brElement = document.getElementById('br');
    brElement.parentNode.removeChild('brElement');
  };
});

//close form

closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
})



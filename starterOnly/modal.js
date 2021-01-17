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
const termsCheckbox = document.getElementById('checkbox1');
const termsErrorMsg = document.getElementById('checkbox1-errorMsg');
const submitBtn = document.getElementById('btnSubmit');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// validation - making sure that terms and conditions are checked

termsCheckbox.addEventListener('change', ($event) => {
  if ($event.target.checked) {
    termsErrorMsg.style.display = 'none';
  } else {
    termsErrorMsg.style.display = 'inline-block';
  };
});

//close form

closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
})



const password = document.getElementById('password'); 
const passwordConfirm = document.getElementById('confirmPassword'); 
const errorMessage = document.getElementsByClassName('formContainer-passwordErrorMessage');

password.addEventListener('keyup', confirmPassword);
passwordConfirm.addEventListener('keyup', confirmPassword);

function removeClass(className) {
  password.classList.remove(className);
  passwordConfirm.classList.remove(className);
}

function addClass(className) {
  password.classList.add(className);
  passwordConfirm.classList.add(className);
}

function confirmPassword () {
  if (password.value === passwordConfirm.value) { 
    //adds match and removes noMatch classes if passwords matches
    removeClass('noMatch');
    addClass('match');
    passwordConfirm.setCustomValidity('');
    errorMessage[0].innerHTML = '<br>';
  };
  if (password.value && passwordConfirm.value && !(password.value === passwordConfirm.value)) { 
    //adds noMatch and removes match classes if both password inputs have values which do not match 
    removeClass('match');
    addClass('noMatch'); 
    passwordConfirm.setCustomValidity('Passwords do not match.');
    errorMessage[0].innerText = 'Passwords do not match.'
  }; 
  if (!(password.value && passwordConfirm.value)) { 
    //removes the match class if the password inputs are cleared
    removeClass('match');
    removeClass('noMatch');
    errorMessage[0].innerHTML = '<br>';
  };
}


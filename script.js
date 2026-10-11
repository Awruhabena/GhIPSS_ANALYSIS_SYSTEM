const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#login-form');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');
const submitButton = document.querySelector('.submit-btn');

function handleSubmit(event) {
    event.preventDefault();
    if(email.value ===""){
        emailError.textContent = "Please enter your email";
    }
    else if(password.value ===""){
        passwordError.textContent = "Please enter your password";
    }
    else{ 
        emailError.textContent ="";
        passwordError.textContent = "";
    }
    console.log('Form submitted');
    console.log('Email:', email.value);
    console.log('Password:', password.value);

} 
submitButton.addEventListener('click', handleSubmit);
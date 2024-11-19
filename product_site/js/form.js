// create three variables and assign them to by their respective id element
var email_input = document.getElementById('Email');
var feedback = document.getElementById('feedback');
var form = document.getElementById('contactForm');

// a helper function to validate or checks email
function validate_check(email) {
    // using the indexOf to find the first occurrence of '@'
    // if the index of @ is not -1 return true else return false
    if (email.indexOf('@') !== -1) {
        return true;
    } else {
        return false;
    }
}

// adding an event listener to email input and set focus as event when trigger
// and update html content of the feedback element
email_input.addEventListener('focus', () => {
    feedback.innerHTML = "Email address is valid .";
    feedback.style.color = "blue";
});

// adding an event listener to email input and set bur as event when trigger

email_input.addEventListener('blur', () => {
    // if value is empty then change the content of the feedback element and change the color blue
    if (!email_input.value) {
        feedback.innerHTML = "Email is required.";
        feedback.style.color = "red";
    // else if the email input value isnt valid then  change text and feedback style color
    } else if (!validate_check(email_input.value)) {
        feedback.innerHTML = "Please enter a valid email address.";
        feedback.style.color = "red";
    // else Clear feedback if valid
    } else {
        feedback.innerHTML = "";
    }
});

// add event listener to form element and set the event submit when trigger
// funtion => event
// Prevent form submission if inputs are invalid
form.addEventListener('submit', (event) => {
    // email input is empty and not validated 
    if (!email_input.value || !validate_check(email_input.value)) {
        // prevent page from reloading
        event.preventDefault();
        // change the feedback context and change color to red
        feedback.innerHTML = "Please correct the errors before submitting.";
        feedback.style.color = "red";
    // else notify the user has Successfully Submitted and recorded!
    } else {
        alert("Survey Successfully Submitted and recorded!");
    }
});
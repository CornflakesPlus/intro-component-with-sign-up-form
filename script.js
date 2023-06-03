

const invalidFeedbackCustom = document.querySelector(".invalid-feedback-custom");
const btn = document.getElementById("btn");
const body = document.getElementById("body");
const email = document.getElementById("email");


// BOOTSTRAP COPY PASTE 
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            invalidFeedbackCustom.style.display = "block"
        event.preventDefault()
        event.stopPropagation()
        }
        form.classList.add('was-validated')
    }, false)
    })
})()

// BOOTSTRAP COPY PASTE 





// CUSTOM SCRIPT

const password = document.getElementById("password");
const invalidFeedback2 = document.querySelector(".invalid-feedback2");

password.onblur = function() {
    invalidFeedback2.style.display = "none";
    password.classList.remove("password")
  }

password.onkeyup = function () {
    if(password.checkValidity()) {
        invalidFeedback2.style.display = "none";
        password.classList.remove("password");
        console.log("everything seems good")
        btn.addEventListener("click", function() {
            body.innerHTML = `<h1>Have you ever pondered, What is the purpose of life? What's the point if we just turn to dust in the end? Maybe we were "Created" for a purpose, what is that purpose?.<br><br>Daniel Haqiqatjou</h1>`;
            preventDefault();
        });
    } else if(password.value == null || password.value == "") {
        invalidFeedback2.style.display = "none";
        password.classList.remove("password");
    } else {
        invalidFeedback2.style.display = "block";
        invalidFeedbackCustom.style.display = "none";
        password.classList.add("password");
    }
}


btn.addEventListener("click", function() {
    if(!email.checkValidity()) {
        email.placeholder = " email@example/com";
        email.classList.add("email");
    }
})

// CUSTOM SCRIPT

// END OF SCRIPT
 
/* ==========================================
   AMM Rentals Form Validation
   Author: Angela Gonzales
   ========================================== */

// Get the contact form
const form = document.getElementById("webForm");

// Listen for form submission
form.addEventListener("submit", function(event) {

    console.log("Form submission detected.");

    // Check the HTML5 validation rules
    if (!form.checkValidity()) {

        console.log("Form contains invalid information.");

        // Prevent the form from submitting
        event.preventDefault();

        // Get all input elements
        const controls = form.getElementsByTagName("input");

        // Check each input
        for (let i = 0; i < controls.length; i++) {

            if (!controls[i].checkValidity()) {

                console.log("Invalid field:", controls[i].name);

                // Add a custom validation message
                controls[i].setCustomValidity(
                    "Please enter valid information in this field."
                );

            } else {

                // Remove custom message from valid fields
                controls[i].setCustomValidity("");
            }
        }

        displayValidationMessage(
            "Please correct the highlighted fields before submitting the form.",
            "error"
        );

    } else {

        console.log("All form fields are valid.");

        // Remove custom messages
        const controls = form.getElementsByTagName("input");

        for (let i = 0; i < controls.length; i++) {
            controls[i].setCustomValidity("");
        }

        displayValidationMessage(
            "Your form has been successfully validated!",
            "success"
        );

        // Allow form.js to process the submitted information
        displayFormData();
    }
});


/* ==========================================
   Display Validation Messages
   ========================================== */

function displayValidationMessage(message, type) {

    // Remove previous validation message
    const oldMessage = document.getElementById("validationMessage");

    if (oldMessage) {
        oldMessage.remove();
    }

    // Create the message
    const messageElement = document.createElement("p");

    messageElement.id = "validationMessage";
    messageElement.textContent = message;

    // Apply CSS class
    if (type === "error") {
        messageElement.className = "error-message";
    } else {
        messageElement.className = "success-message";
    }

    // Display message above the form
    form.parentNode.insertBefore(messageElement, form);

    console.log("Validation message displayed:", message);
}


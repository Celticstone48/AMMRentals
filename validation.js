/* ==========================================
   AMM Rentals Form Validation
   Author: Angela Gonzales
   ========================================== */

// Get the contact form
const form = document.getElementById("webForm");

// Allow JavaScript to handle the validation
form.noValidate = true;

// Listen for form submission
form.addEventListener("submit", function(event) {

    console.log("Form submission detected.");

    // Stop the normal form submission
    event.preventDefault();

    // Check the HTML5 validation rules
    if (!form.checkValidity()) {

        console.log("Form contains invalid information.");

        // Ask the browser to identify invalid fields
        form.reportValidity();

        displayValidationMessage(
            "Please correct the highlighted fields before submitting the form.",
            "error"
        );

        return;
    }

    // If we get here, every required field is valid
    console.log("All form fields are valid.");

    displayValidationMessage(
        "Your form has been successfully validated!",
        "success"
    );

    // Process and display the submitted information
    displayFormData();
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


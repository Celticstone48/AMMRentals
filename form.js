/* ==========================================
   AMM Rentals Form Data Processing
   Author: Angela Gonzales
   ========================================== */

// Function to read and display the form data
function displayFormData() {

    console.log("Reading form data...");

    // Read individual fields using getElementById()
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;
    const propertyType = document.getElementById("propertyType").value;
    const message = document.getElementById("message").value;

    console.log("Name:", firstName, lastName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Preferred location:", location);
    console.log("Property type:", propertyType);
    console.log("Message:", message);


    /* ==========================================
       Read the selected radio button
       ========================================== */

    const bedroomOptions = document.getElementsByName("bedrooms");

    let bedrooms = "Not selected";

    for (let i = 0; i < bedroomOptions.length; i++) {

        if (bedroomOptions[i].checked) {
            bedrooms = bedroomOptions[i].value;
            break;
        }
    }

    console.log("Bedrooms:", bedrooms);


    /* ==========================================
       Read selected checkboxes
       ========================================== */

    const interests = document.getElementsByName("interests");

    let selectedInterests = [];

    for (let i = 0; i < interests.length; i++) {

        if (interests[i].checked) {
            selectedInterests.push(
                interests[i].parentElement.textContent.trim()
            );
        }
    }

    console.log("Interests:", selectedInterests);


    /* ==========================================
       Create formatted output
       ========================================== */

    let output = `
        <section id="formResults">
            <h2>Submitted Contact Information</h2>

            <p><strong>Name:</strong> ${firstName} ${lastName}</p>

            <p><strong>Email:</strong> ${email}</p>

            <p><strong>Phone:</strong> ${phone}</p>

            <p><strong>Preferred Rental Location:</strong> ${location}</p>

            <p><strong>Preferred Property Type:</strong> ${propertyType}</p>

            <p><strong>Bedrooms:</strong> ${bedrooms}</p>

            <p><strong>Interests:</strong> ${
                selectedInterests.length > 0
                ? selectedInterests.join(", ")
                : "None selected"
            }</p>

            <p><strong>Message:</strong> ${message}</p>
        </section>
    `;


    /* ==========================================
       Display the information below the form
       ========================================== */

    const oldResults = document.getElementById("formResults");

    if (oldResults) {
        oldResults.remove();
    }

    document.getElementById("webForm").insertAdjacentHTML(
        "afterend",
        output
    );

    console.log("Form data displayed successfully.");
}


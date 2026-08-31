// AMM Rentals Assessment 6 JavaScript
// This script uses an array and a for loop to create a list
// of featured rental properties dynamically. 

// Array containing the featured rental properties from the AMM Rentals home page.
let rentalProperties = [ 
    "Modern Apartment", 
    "Luxury Townhouse", 
    "Family Home", 
    "Downtown Living", 
    "Suburban Retreat", 
    "Spacious Living" 
];

// Function that creates an unordered list from the rental property array.
function listRentalProperties() {
    
    // Start the HTML string with the opening unordered list tag. 
    let listCode = "<ul>";

    // Log a message to show that the function has started.
    console.log("The rental property list function has started.");

    // Use a for loop to process each property in the array.
    for (let i = 0; i < rentalProperties.length; i++) {

        // Add each rental property to the unordered list. 
        listCode = listCode + "<li>" + rentalProperties[i] + "</li>";

        // Log each property as it is processed by the loop. 
        console.log("Adding rental property: " + rentalProperties[i]); 
    }

    // Add the closing unordered list tag.
    listCode = listCode + "</ul>";

    // Insert the completed list into the paragraph with the id "list".
    document.getElementById("list").innerHTML = listCode;

    // Log a message after the list has been inserted into the webpage. 
    console.log("The rental property list has been inserted into the page.");
}

// Run the function when the webpage finishes loading. 
window.onload = function() {
    listRentalProperties();
};

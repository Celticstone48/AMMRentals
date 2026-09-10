/* ==========================================
   AMM Rentals Weather Lookup
   Author: Angela Gonzales
   ========================================== */

// OpenWeatherMap API key
const API_KEY = "cfa051352abe7466572d5300047777b5";

// Get references to HTML elements
const weatherForm = document.getElementById("weatherForm");
const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");
const weatherMessage = document.getElementById("weatherMessage");
const weatherResults = document.getElementById("weatherResults");
const locationName = document.getElementById("locationName");
const temperature = document.getElementById("temperature");
const weatherDescription = document.getElementById("weatherDescription");

// Hide weather results until a successful search
weatherResults.style.display = "none";

// Listen for form submission
weatherForm.addEventListener("submit", function (event) {

    // Prevent the form from reloading the page
    event.preventDefault();

    // Get the latitude and longitude values
    const latitude = latitudeInput.value.trim();
    const longitude = longitudeInput.value.trim();

    // Convert the values to numbers
    const latitudeNumber = Number(latitude);
    const longitudeNumber = Number(longitude);

    // Validate latitude
    if (
        latitude === "" ||
        isNaN(latitudeNumber) ||
        latitudeNumber < -90 ||
        latitudeNumber > 90
    ) {
        weatherMessage.textContent =
            "Please enter a valid latitude between -90 and 90.";
        weatherResults.style.display = "none";
        return;
    }

    // Validate longitude
    if (
        longitude === "" ||
        isNaN(longitudeNumber) ||
        longitudeNumber < -180 ||
        longitudeNumber > 180
    ) {
        weatherMessage.textContent =
            "Please enter a valid longitude between -180 and 180.";
        weatherResults.style.display = "none";
        return;
    }

    // Display loading message
    weatherMessage.textContent = "Loading weather data...";

    // Hide previous weather results
    weatherResults.style.display = "none";

    // Build the OpenWeatherMap API URL
    const apiURL =
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitudeNumber}&lon=${longitudeNumber}&units=imperial&appid=${API_KEY}`;

    // Make the API request
    fetch(apiURL)

        // Convert the response to JSON
        .then(function (response) {

            // Check for an unsuccessful API response
            if (!response.ok) {
                throw new Error("Unable to retrieve weather data.");
            }

            return response.json();
        })

        // Extract and display the weather data
        .then(function (data) {

            // Get location information
            const city = data.name;
            const country = data.sys.country;

            // Get temperature
            const currentTemperature = data.main.temp;

            // Get weather description
            const description = data.weather[0].description;

            // Display the information
            locationName.textContent = `${city}, ${country}`;
            temperature.textContent =
                `${currentTemperature.toFixed(1)} °F`;
            weatherDescription.textContent = description;

            // Display success message
            weatherMessage.textContent =
                "Weather data retrieved successfully.";

            // Show weather results
            weatherResults.style.display = "block";
        })

        // Handle errors
        .catch(function (error) {

            console.error("Weather API error:", error);

            weatherMessage.textContent =
                "Unable to retrieve weather data. Please check your coordinates and try again.";

            weatherResults.style.display = "none";
        });
});
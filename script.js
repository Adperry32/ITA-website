// script.js

// Wait for the DOM to be fully loaded before executing any JavaScript
// This ensures that all elements are available to interact with

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page fully loaded and ready!");  // Log to console when the page has fully loaded
    
    // Apply flipping animation to the logo when the page loads
    const logo = document.querySelector(".logo");
    if (logo) {
        logo.style.animation = "flip 3s ease-in-out infinite";  // Set the flipping animation to the logo
    }

    // Example: Adding a simple click handler to a button
    const button = document.querySelector("button");
    if (button) {
        button.addEventListener("click", () => {
            alert("Button clicked!");  // Show an alert when the button is clicked
        });
    }
});

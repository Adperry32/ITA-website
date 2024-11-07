// script.js

// Wait for the DOM to be fully loaded before executing any JavaScript
// This ensures that all elements are available to interact with

document.addEventListener("DOMContentLoaded", () => {
    try {
        console.log("Page fully loaded and ready!");  // Log to console when the page has fully loaded
        
        // Apply smooth continuous flipping animation to the logo when the page loads
        const logo = document.querySelector(".logo");
        const logoR = document.querySelector(".logo2"); // logo to the right side of header
        if (logo) {
            logo.style.animation = "smoothFlip 5s linear infinite";  // Set the smooth flipping animation to the logo with slower speed
            logo.style.transformStyle = "preserve-3d";  // Preserve 3D effect to ensure smooth flipping
            logo.style.inlineSize = "150px";  // Use logical property for width (inline-size) to enlarge the logo
            logo.style.blockSize = "auto";  // Use logical property for height (block-size) to maintain aspect ratio
        }
        if (logoR) {
            logoR.style.animation = "smoothFlip 5s linear infinite";  // Set the smooth flipping animation to the logo with slower speed
            logoR.style.transformStyle = "preserve-3d";  // Preserve 3D effect to ensure smooth flipping
            logoR.style.inlineSize = "150px";  // Use logical property for width (inline-size) to enlarge the logo
            logoR.style.blockSize = "auto";  // Use logical property for height (block-size) to maintain aspect ratio
        }

        // Apply click event to navigation links for active page styling
        const navLinks = document.querySelectorAll("nav a");
        navLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                try {
                    navLinks.forEach(nav => nav.classList.remove("active"));  // Remove active class from all links
                    event.target.classList.add("active");  // Add active class to clicked link
                } catch (err) {
                    console.error("Error applying active class to navigation link: ", err);  // Log any errors
                }
            });
        });

        // Example: Adding a simple click handler to a button
        const button = document.querySelector("button");
        if (button) {
            button.addEventListener("click", () => {
                try {
                    alert("Button clicked!");  // Show an alert when the button is clicked
                } catch (err) {
                    console.error("Error handling button click: ", err);  // Log any errors
                }
            });
        }
    } catch (err) {
        console.error("Error initializing the script: ", err);  // Log any errors that occur during script initialization
    }
});

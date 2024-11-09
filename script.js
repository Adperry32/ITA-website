document.addEventListener("DOMContentLoaded", () => {
    try {
        console.log("Page fully loaded!"); // Log a message to confirm the page has fully loaded

        // Highlight active navigation link
        const navLinks = document.querySelectorAll("nav a"); // Select all navigation links
        navLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                try {
                    // Remove 'active' class from all navigation links
                    navLinks.forEach(nav => nav.classList.remove("active"));
                    // Add 'active' class to the clicked link for visual indication
                    event.target.classList.add("active");
                } catch (error) {
                    // Log an error if there is an issue applying the 'active' class
                    console.error("Error applying active class: ", error);
                }
            });
        });

        // Log gallery item clicks
        const galleryItems = document.querySelectorAll(".gallery-item a"); // Select all gallery item links
        galleryItems.forEach(item => {
            item.addEventListener("click", (event) => {
                try {
                    // Log the URL of the clicked gallery item to the console
                    console.log("Navigating to: ", event.currentTarget.href);
                } catch (error) {
                    // Log an error if there is an issue handling the click event
                    console.error("Error handling gallery item click: ", error);
                }
            });
        });

    } catch (error) {
        // Log any errors that occur during the initialization of the script
        console.error("Error initializing the script: ", error);
    }
});

document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', function() {
        const description = this.querySelector('.service-description');
        description.style.display = description.style.display === 'block' ? 'none' : 'block';
        this.style.transform = description.style.display === 'block' ? 'translateY(0)' : 'translateY(-10px)';
    });
});

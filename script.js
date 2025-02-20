// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page Loaded Successfully!");

    // Smooth scrolling for internal links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Contact form submission handling
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission behavior

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;

            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been received.`);
                contactForm.reset();
            } else {
                alert("Please fill out all fields.");
            }
        });
    }
});

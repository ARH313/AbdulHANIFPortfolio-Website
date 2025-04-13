// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.main-nav ul');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close Mobile Navigation on Link Click (Optional)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// Basic Form Submission Handling (Client-Side Only - No actual email sending)
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.className = 'form-message error';
        return;
    }

    // Basic email validation (you might want more robust validation)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.className = 'form-message error';
        return;
    }

    // Simulate successful submission (in a real scenario, you'd send data to a server)
    formMessage.textContent = 'Message sent successfully!';
    formMessage.className = 'form-message success';
    contactForm.reset(); // Clear the form
});

// Optional: Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust offset for header height if needed
                behavior: 'smooth'
            });

            // Close mobile navigation after clicking a link
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
            }
        }
    });
});
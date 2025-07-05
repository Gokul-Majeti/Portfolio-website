// Animate hero-content on page load
window.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('loaded');
});
// Smooth scroll for navigation
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact form submission (demo only)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = 'Thank you for reaching out! I will get back to you soon.';
    this.reset();
});

// Fade-in on scroll for sections
const fadeSections = document.querySelectorAll('section, .project');
function handleFadeIn() {
    fadeSections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            sec.classList.add('visible');
        }
    });
}
fadeSections.forEach(sec => sec.classList.add('fade-in-section'));
window.addEventListener('scroll', handleFadeIn);
window.addEventListener('load', handleFadeIn);

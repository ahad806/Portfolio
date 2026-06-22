document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuButton = document.getElementById('menuButton');
    const myLinks = document.getElementById('myLinks');
    
    menuButton.addEventListener('click', function() {
        if (myLinks.style.display === 'block') {
            myLinks.style.display = 'none';
        } else {
            myLinks.style.display = 'block';
        }
    });
    
    // Close menu when a link is clicked
    const navLinks = myLinks.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            myLinks.style.display = 'none';
        });
    });
    
    // Scroll animation functionality
    const animatedElements = document.querySelectorAll('.heading, .image, #about h2, #about p, .design, .develop, .education, #skills h2, #skills h4, .skill2, .skill3, .skill4, .skill6, .skill7, .learning2, .learning3, .other1, .other3, #projects h3, .project-card, #contactme h4, .contact-subtitle, .contact-info p, .contact-socials a');
    
    // Add animation class to all elements
    animatedElements.forEach(element => {
        element.classList.add('animate-on-scroll');
    });
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll events
    function handleScroll() {
        animatedElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('animated');
            }
        });
    }
    
    // Initial check on page load
    setTimeout(handleScroll, 100);
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
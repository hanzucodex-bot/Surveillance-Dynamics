// main.js - Premium Interactions

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Dynamic Navbar Shrink on Scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Cinematic Scroll Reveals
    // Add the class 'reveal' to any HTML element you want to fade up on scroll!
    const revealElements = document.querySelectorAll('.interactive-card, .service-card, .image-card, .feature-box, .premium-card, .trust-strip, .split-showcase, .cta-band');
    
    // Auto-add the 'reveal' class to major components
    revealElements.forEach(el => el.classList.add('reveal'));

    const revealOptions = {
        threshold: 0.15, // Triggers when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed to keep it visible
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
});

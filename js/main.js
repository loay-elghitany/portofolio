const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // Hamburger Animation
        hamburger.classList.toggle('toggle');
    });
}

const activeLink = () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Handle index.html being the root path
        if (linkPath === 'index.html' && (currentPath === '' || currentPath === 'index.html')) {
            link.classList.add('active-link');
        } else if (linkPath !== 'index.html' && linkPath === currentPath) {
            link.classList.add('active-link');
        }
    });
}

const scrollAnimation = () => {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    hiddenElements.forEach((el) => observer.observe(el));
}


// Run all functions on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    activeLink();

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => card.classList.add('hidden'));

    const contactInfo = document.querySelector('.contact-info');
    if(contactInfo) {
        contactInfo.classList.add('hidden');
    }

    scrollAnimation();
});

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
    }, 2000);
});

// Theme Toggle
const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');

function toggleTheme() {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
}

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    body.classList.remove('dark');
}

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});


// Smooth Scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navHeight = document.querySelector('nav').offsetHeight;
    const targetPosition = section.offsetTop - navHeight;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
    
    // Close mobile menu if open
    mobileMenu.classList.remove('show');
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.textContent.toLowerCase() === sectionId) {
            link.classList.add('active');
        }
    });
}

// Active Section Detection
const sections = ['home', 'projects', 'contact'];
let activeSection = 'home';

window.addEventListener('scroll', () => {
    const navHeight = document.querySelector('nav').offsetHeight;
    
    sections.forEach(section => {
        const element = document.getElementById(section);
        const rect = element.getBoundingClientRect();
        
        if (rect.top <= navHeight + 100 && rect.bottom >= navHeight + 100) {
            if (activeSection !== section) {
                activeSection = section;
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.textContent.toLowerCase() === section) {
                        link.classList.add('active');
                    }
                });
            }
        }
    });
});

// Contact Form

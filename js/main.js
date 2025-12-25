/* ============================================
   Custom Cursor
============================================ */
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Smooth cursor movement
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';

    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .project-card, .blog-card');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering');
        cursorFollower.classList.add('hovering');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
        cursorFollower.classList.remove('hovering');
    });
});

/* ============================================
   Theme Toggle
============================================ */
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

/* ============================================
   Typing Effect
============================================ */
const typingText = document.querySelector('.typing-text');
const words = ['Developer', 'Creator', 'Innovator', 'Problem Solver', 'Builder'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before next word
    }

    setTimeout(type, typeSpeed);
}

// Start typing effect after a delay
setTimeout(type, 1500);

/* ============================================
   Smooth Scroll
============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ============================================
   Scroll Animations
============================================ */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to sections and elements
const animatedElements = document.querySelectorAll(
    '.section-title, .about-content, .project-card, .blog-card, .contact-content'
);

animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Stagger animation for project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

const blogCards = document.querySelectorAll('.blog-card');
blogCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

/* ============================================
   Navigation Background on Scroll
============================================ */
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Hide/show nav on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

/* ============================================
   Mobile Menu Toggle
============================================ */
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Add mobile menu styles dynamically
const mobileStyles = document.createElement('style');
mobileStyles.textContent = `
    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: var(--bg-primary);
            padding: var(--space-xl);
            flex-direction: column;
            gap: var(--space-lg);
            border-bottom: 1px solid var(--border);
            transform: translateY(-150%);
            transition: transform 0.3s ease;
            display: flex;
        }

        .nav-links.active {
            transform: translateY(0);
        }

        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }

        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
        }
    }
`;
document.head.appendChild(mobileStyles);

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

/* ============================================
   Parallax Effect for Gradient Orbs
============================================ */
const orbs = document.querySelectorAll('.gradient-orb');

window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.02;
        const x = (clientX - centerX) * speed;
        const y = (clientY - centerY) * speed;

        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

/* ============================================
   Console Easter Egg
============================================ */
console.log('%c Hey there, curious one! 👋', 'font-size: 20px; font-weight: bold; color: #a855f7;');
console.log('%c Thanks for checking out my site. Feel free to reach out!', 'font-size: 14px; color: #a1a1aa;');

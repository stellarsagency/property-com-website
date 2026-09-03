// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Create WhatsApp message
        const whatsappMessage = `Hello Property.com!%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0AMessage: ${message}`;
        const whatsappUrl = `https://wa.me/923001234567?text=${whatsappMessage}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Show success message
        alert('Thank you for your message! We will redirect you to WhatsApp to complete your inquiry.');
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Property card hover effect
document.querySelectorAll('.property-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const img = card.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1.05)';
        }
    });
    card.addEventListener('mouseleave', () => {
        const img = card.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1)';
        }
    });
});

// Service card hover effect
document.querySelectorAll('.service-card, .service-detail-card, .area-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = '#b08d57';
        card.style.boxShadow = '0 20px 60px rgba(176,141,87,0.1)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'rgba(0,0,0,0.06)';
        card.style.boxShadow = 'none';
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.property-card, .service-card, .service-detail-card, .testimonial-section, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-bg');
    if (hero) {
        const scrolled = window.scrollY;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set initial body opacity
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    // Trigger load
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

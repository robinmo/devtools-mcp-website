// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Update navigation active state
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
        
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Handle navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        if (pageId) {
            showPage(pageId);
        }
    });
});

// Handle all internal links with data-page attribute
document.querySelectorAll('a[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        if (pageId) {
            showPage(pageId);
        }
    });
});

// Smooth scrolling for anchor links
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

// Create scroll to top button
function createScrollToTopButton() {
    const button = document.createElement('div');
    button.className = 'scroll-to-top';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    document.body.appendChild(button);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// Add loading animation for feature cards
function animateOnScroll() {
    const cards = document.querySelectorAll('.feature-card, .content-card, .contact-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    
    // Show home page by default
    showPage('home');
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // Only handle keyboard navigation if no input is focused
    if (document.activeElement.tagName === 'INPUT' || 
        document.activeElement.tagName === 'TEXTAREA') {
        return;
    }
    
    const currentPage = document.querySelector('.page.active');
    const currentPageId = currentPage.id;
    const pageIds = Array.from(pages).map(page => page.id);
    const currentIndex = pageIds.indexOf(currentPageId);
    
    // Left arrow - previous page
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
        showPage(pageIds[currentIndex - 1]);
    }
    
    // Right arrow - next page
    if (e.key === 'ArrowRight' && currentIndex < pageIds.length - 1) {
        showPage(pageIds[currentIndex + 1]);
    }
    
    // Home key - go to home page
    if (e.key === 'Home') {
        showPage('home');
    }
});

// Add focus management for accessibility
function manageFocus() {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = document.querySelector('.page.active');
    const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
    const focusableContent = modal.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1];

    // Focus first element when page changes
    if (firstFocusableElement) {
        firstFocusableElement.focus();
    }
}

// Handle focus when pages change
const originalShowPage = showPage;
showPage = function(pageId) {
    originalShowPage(pageId);
    // Small delay to ensure page is rendered
    setTimeout(manageFocus, 100);
};

// Add smooth transitions for mobile menu
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        
        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`;
document.head.appendChild(style);

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if images are present
if (document.querySelectorAll('img[data-src]').length > 0) {
    lazyLoadImages();
}

// Add error handling for missing elements
window.addEventListener('error', (e) => {
    console.warn('An error occurred:', e.error);
});

// Console welcome message
console.log(`
🚀 Welcome to Google DevFest Workshop - Chrome DevTools MCP Server
Built with modern web technologies
© 2024 Robin (AI Coder)
`);

// Export functions for potential use
window.DevFestWorkshop = {
    showPage,
    animateOnScroll,
    manageFocus
};
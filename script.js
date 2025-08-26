// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add typing effect to the name
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        nameElement.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                nameElement.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add skill tag hover effects
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add section hover effects
    const allSections = document.querySelectorAll('.section');
    allSections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.15)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
        });
    });

    // Add contact item hover effects
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Add language item hover effects
    const languageItems = document.querySelectorAll('.language-item');
    languageItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.background = '#e9ecef';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.background = '#f8f9fa';
        });
    });

    // Add career and education item hover effects
    const careerItems = document.querySelectorAll('.career-item, .education-item');
    careerItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = '#fafbfc';
            this.style.borderLeft = '4px solid #F3890B';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'transparent';
            this.style.borderLeft = 'none';
        });
    });

    // Add research list item hover effects
    const researchItems = document.querySelectorAll('.research-list li');
    researchItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = '#f8f9fa';
            this.style.paddingLeft = '2rem';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'transparent';
            this.style.paddingLeft = '1.5rem';
        });
    });

    // Add expertise list item hover effects
    const expertiseItems = document.querySelectorAll('.expertise-list li');
    expertiseItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = '#e9ecef';
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = '#f8f9fa';
            this.style.transform = 'translateX(0)';
        });
    });

    // Add honors list item hover effects
    const honorsItems = document.querySelectorAll('.honors-list li');
    honorsItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = '#f8f9fa';
            this.style.paddingLeft = '2rem';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'transparent';
            this.style.paddingLeft = '1.5rem';
        });
    });

    // Add teaching list item hover effects
    const teachingItems = document.querySelectorAll('.teaching-list li');
    teachingItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = '#f8f9fa';
            this.style.paddingLeft = '2rem';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'transparent';
            this.style.paddingLeft = '1.5rem';
        });
    });

    // Add publications summary item hover effects
    const publicationsItems = document.querySelectorAll('.publications-summary li');
    publicationsItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = '#f8f9fa';
            this.style.paddingLeft = '2rem';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'transparent';
            this.style.paddingLeft = '1.5rem';
        });
    });

    // Add publication list item hover effects
    const publicationItems = document.querySelectorAll('.publication-list li');
    publicationItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = '#f8f9fa';
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'transparent';
            this.style.transform = 'translateX(0)';
        });
    });

    // Add publication category title hover effects
    const publicationCategoryTitles = document.querySelectorAll('.publication-category-title');
    publicationCategoryTitles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.style.color = '#F3890B';
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.color = '#001F5A';
            this.style.transform = 'translateX(0)';
        });
    });

    // Add service list item hover effects
    const serviceItems = document.querySelectorAll('.service-list li');
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = '#f8f9fa';
            this.style.paddingLeft = '2rem';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'transparent';
            this.style.paddingLeft = '1.5rem';
        });
    });

    // Add talks list item hover effects
    const talksItems = document.querySelectorAll('.talks-list li');
    talksItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = '#f8f9fa';
            this.style.paddingLeft = '2rem';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'transparent';
            this.style.paddingLeft = '1.5rem';
        });
    });

    // Add reference item hover effects
    const referenceItems = document.querySelectorAll('.reference-item');
    referenceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = '#e9ecef';
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = '#f8f9fa';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Add visit item hover effects
    const visitItems = document.querySelectorAll('.visit-item');
    visitItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = '#e9ecef';
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = '#f8f9fa';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Add scroll to top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #F3890B;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        box-shadow: 0 4px 20px rgba(243, 137, 11, 0.4);
        transition: all 0.3s ease;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
    `;

    document.body.appendChild(scrollToTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add hover effect to scroll to top button
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.background = '#e67e00';
        this.style.transform = 'scale(1.1)';
    });

    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.background = '#F3890B';
        this.style.transform = 'scale(1)';
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Home') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        if (e.key === 'End') {
            e.preventDefault();
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }
    });



    // Add smooth reveal animation for sections
    const revealSections = function() {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.classList.add('revealed');
            }
        });
    };

    window.addEventListener('scroll', revealSections);
    revealSections(); // Initial check

    // Add CSS for revealed sections
    const style = document.createElement('style');
    style.textContent = `
        .section.revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    console.log('CV Website loaded successfully! ');
});

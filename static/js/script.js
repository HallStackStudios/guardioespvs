// Create floating particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    
    const colors = ['#00ffff', '#ff00ff', '#ffff00', '#ff0080'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 12000);
}

// Create particles continuously
function startParticleSystem() {
    setInterval(createParticle, 500);
}

// Animate elements on scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.pillar-card, .info-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.9)';
        card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(card);
    });
}

// Enhanced hover effects for cards
function setupHoverEffects() {
    document.querySelectorAll('.pillar-card, .info-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add cyber glitch effect to titles on hover
function setupGlitchEffects() {
    const titles = document.querySelectorAll('.main-logo, .hero-title, .pillars-title, .qr-title, .games-title');
    
    titles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.style.animation = 'neonGlow 0.1s ease-in-out 3, gradientText 3s ease infinite';
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.animation = 'neonGlow 2s ease-in-out infinite alternate, gradientText 3s ease infinite';
        });
    });
}

// Create dynamic background effects
function createDynamicBackground() {
    // Add extra glow effects on mouse move
    document.addEventListener('mousemove', function(e) {
        const glowElements = document.querySelectorAll('.pillar-card, .info-card, .qr-container, .games-container');
        
        glowElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                element.style.boxShadow = `
                    0 25px 50px rgba(0, 255, 255, 0.4),
                    ${x - rect.width/2}px ${y - rect.height/2}px 50px rgba(255, 0, 255, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `;
            }
        });
    });
}

// Add sound effect simulation (visual feedback)
function addSoundEffects() {
    const interactiveElements = document.querySelectorAll('.pillar-card, .info-card, .qr-container, .games-container');
    
    interactiveElements.forEach(element => {
        element.addEventListener('click', function() {
            // Create visual "sound wave" effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(0, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Smooth scrolling for anchor links (if any are added later)
function setupSmoothScrolling() {
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}

// Performance optimization - reduce animations on low-end devices
function optimizePerformance() {
    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all effects
    startParticleSystem();
    setupScrollAnimations();
    setupHoverEffects();
    setupGlitchEffects();
    createDynamicBackground();
    addSoundEffects();
    setupSmoothScrolling();
    optimizePerformance();
    
    // Add loading animation completion
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('🚀 Projeto Guardiões 2.0 - Sistema iniciado!');
    console.log('💎 Efeitos futuristas ativados!');
    console.log('⚡ Todas as animações carregadas!');
});

// Add special effects for special dates or events
function addSpecialEffects() {
    const today = new Date();
    const isChristmas = today.getMonth() === 11 && today.getDate() === 25;
    const isNewYear = today.getMonth() === 0 && today.getDate() === 1;
    
    if (isChristmas || isNewYear) {
        // Add extra particle effects for special occasions
        setInterval(() => {
            for (let i = 0; i < 3; i++) {
                setTimeout(createParticle, i * 100);
            }
        }, 1000);
    }
}

// Call special effects
addSpecialEffects();

// Export functions for potential future use
window.GuardioesEffects = {
    createParticle,
    setupScrollAnimations,
    setupHoverEffects,
    setupGlitchEffects,
    createDynamicBackground,
    addSoundEffects
};
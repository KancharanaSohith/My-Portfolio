// ===================================
// FUTURISTIC DASHBOARD PORTFOLIO
// Interactive Functionality
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    
    // Create Moving Stars Background
    function createMovingStars() {
        const starsContainer = document.getElementById('starsContainer');
        const numberOfStars = 40; // Not too many, just enough to be recognizable
        
        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.className = 'moving-star';
            
            // Random size (small, medium, large)
            const sizeRandom = Math.random();
            if (sizeRandom < 0.6) {
                star.classList.add('small');
            } else if (sizeRandom < 0.9) {
                star.classList.add('medium');
            } else {
                star.classList.add('large');
            }
            
            // Random horizontal position
            star.style.left = Math.random() * 100 + '%';
            
            // Random starting vertical position (some already in view, some coming)
            star.style.top = Math.random() * -100 + '%';
            
            // Random animation duration (speed varies for depth effect)
            // Smaller stars move faster (closer), larger stars move slower (further)
            const duration = star.classList.contains('small') 
                ? Math.random() * 20 + 15  // 15-35s
                : star.classList.contains('medium')
                ? Math.random() * 30 + 25  // 25-55s
                : Math.random() * 40 + 35; // 35-75s
            
            star.style.animationDuration = `${duration}s, 2s`;
            
            // Random delay for staggered effect
            star.style.animationDelay = Math.random() * -30 + 's';
            
            starsContainer.appendChild(star);
        }
    }
    
    // Initialize moving stars
    createMovingStars();
    
    // Get elements
    const segments = document.querySelectorAll('.segment');
    const detailPanel = document.getElementById('detailPanel');
    const detailContent = document.getElementById('detailContent');
    const closePanel = document.getElementById('closePanel');
    
    // Segment click handlers
    segments.forEach(segment => {
        segment.addEventListener('click', () => {
            const segmentType = segment.getAttribute('data-segment');
            openDetailPanel(segmentType);
        });
    });
    
    // Close panel
    closePanel.addEventListener('click', () => {
        closeDetailPanel();
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && detailPanel.classList.contains('active')) {
            closeDetailPanel();
        }
    });
    
    // Open detail panel with content
    function openDetailPanel(type) {
        // Get the content template
        const contentTemplate = document.getElementById(`${type}-content`);
        
        if (contentTemplate) {
            // Clone and insert content
            detailContent.innerHTML = contentTemplate.innerHTML;
            
            // Show panel with animation
            setTimeout(() => {
                detailPanel.classList.add('active');
            }, 10);
            
            // Prevent body scroll when panel is open
            document.body.classList.add('panel-open');
            
            // Add entrance animation to content
            animateContent();
        }
    }
    
    // Close detail panel
    function closeDetailPanel() {
        detailPanel.classList.remove('active');
        
        // Re-enable body scroll
        setTimeout(() => {
            document.body.classList.remove('panel-open');
        }, 500);
    }
    
    // Animate content entrance
    function animateContent() {
        const elements = detailContent.querySelectorAll('.detail-heading, .detail-text, .skill-category, .timeline-item, .project-card, .achievement-card, .education-card');
        
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }
    
    // Segment hover effects
    segments.forEach(segment => {
        segment.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });
    });
    
    // Rotating ring animation enhancement
    const profileRing = document.querySelector('.profile-ring');
    let rotation = 0;
    
    setInterval(() => {
        rotation += 0.5;
        if (rotation >= 360) rotation = 0;
    }, 30);
    
    // Add pulse effect to stats on hover
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const value = this.querySelector('.stat-value');
            value.style.transform = 'scale(1.2)';
            value.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            const value = this.querySelector('.stat-value');
            value.style.transform = 'scale(1)';
        });
    });
    
    // Add glow effect on social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.8)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    // Smooth scroll for navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                // Remove active from all
                navLinks.forEach(l => l.classList.remove('active'));
                
                // Add active to clicked
                this.classList.add('active');
            }
        });
    });
    
    // Add particle effect on mouse move
    let particles = [];
    const maxParticles = 50;
    
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.95) {
            createParticle(e.clientX, e.clientY);
        }
    });
    
    function createParticle(x, y) {
        if (particles.length >= maxParticles) {
            const oldParticle = particles.shift();
            oldParticle.remove();
        }
        
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '3px';
        particle.style.height = '3px';
        particle.style.background = '#00d4ff';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';
        particle.style.boxShadow = '0 0 10px rgba(0, 212, 255, 0.8)';
        particle.style.opacity = '1';
        particle.style.transition = 'all 1s ease';
        
        document.body.appendChild(particle);
        particles.push(particle);
        
        setTimeout(() => {
            particle.style.opacity = '0';
            particle.style.transform = 'translateY(-50px)';
        }, 10);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
    
    // Resume Download Functionality
    const resumeDownloadNav = document.getElementById('resumeDownload');
    
    function downloadResume() {
        // Path to your PDF resume
        const resumePath = 'resume/Sohith_Kancharana_Resume.pdf';
        
        // Create a temporary link and trigger download
        const a = document.createElement('a');
        a.href = resumePath;
        a.download = 'Sohith_Kancharana_Resume.pdf'; // Downloaded filename
        a.target = '_blank'; // Open in new tab as fallback
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    
    // Attach to nav resume button
    if (resumeDownloadNav) {
        resumeDownloadNav.addEventListener('click', (e) => {
            e.preventDefault();
            downloadResume();
        });
    }
    
    // Attach to contact panel resume button (will be added dynamically)
    document.addEventListener('click', (e) => {
        if (e.target && (e.target.id === 'resumeDownloadBtn' || e.target.closest('#resumeDownloadBtn'))) {
            e.preventDefault();
            downloadResume();
        }
    });
    
    // Shooting Stars Effect
    function createShootingStar() {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        
        // Randomly make some stars purple variant
        if (Math.random() > 0.6) {
            star.classList.add('variant');
        }
        
        // Random position at top or right edge
        const startFromTop = Math.random() > 0.5;
        
        if (startFromTop) {
            // Start from top edge
            star.style.left = Math.random() * 100 + '%';
            star.style.top = '0px';
        } else {
            // Start from right edge
            star.style.left = '100%';
            star.style.top = Math.random() * 50 + '%';
        }
        
        document.body.appendChild(star);
        
        // Trigger animation
        setTimeout(() => {
            star.classList.add('animate');
        }, 10);
        
        // Remove after animation
        setTimeout(() => {
            star.remove();
        }, 1500);
    }
    
    // Create shooting stars at random intervals
    function scheduleShooting() {
        createShootingStar();
        
        // Schedule next shooting star between 3-8 seconds
        const nextDelay = Math.random() * 5000 + 3000;
        setTimeout(scheduleShooting, nextDelay);
    }
    
    // Start shooting stars after page load
    setTimeout(scheduleShooting, 2000);
    
    // Console greeting
    console.log('%c🚀 FUTURISTIC PORTFOLIO', 'font-size: 20px; color: #00d4ff; font-weight: bold;');
    console.log('%cBuilt with passion and innovation', 'font-size: 14px; color: #a855f7;');
    
});

// Loading animation
window.addEventListener('load', () => {
    const segments = document.querySelectorAll('.segment');
    
    segments.forEach((segment, index) => {
        segment.style.opacity = '0';
        segment.style.transform = 'scale(0.5)';
        
        setTimeout(() => {
            segment.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            segment.style.opacity = '1';
            segment.style.transform = 'scale(1)';
        }, 100 * index);
    });
});

// Slideshow functionality for Picverse Community Homepage
let currentSlideIndex = 0;
let slides = [];
let indicators = [];
let slideInterval;
let isTransitioning = false;

// Configuration
let SLIDE_DURATION = 5000; // 5 seconds per slide
const TRANSITION_DURATION = 1000; // 1 second transition
const SWIPE_THRESHOLD = 50; // Minimum swipe distance

// Touch/swipe variables
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

let swipeDetected = false;

// Initialize slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSlideshow();
});

// Initialize all slideshow functionality
function initializeSlideshow() {
    // Get DOM elements
    slides = document.querySelectorAll('.slide');
    indicators = document.querySelectorAll('.indicator');
    
    // Check if slideshow elements exist
    if (slides.length === 0) {
        console.warn('No slides found. Make sure your HTML has elements with class "slide".');
        return;
    }
    
    // Initialize first slide
    showSlide(0);
    
    // Start auto-slideshow
    startAutoSlide();
    
    // Initialize all event listeners
    initializeEventListeners();
    
    console.log(`Slideshow initialized with ${slides.length} slides`);
}

// Show specific slide with smooth transition
function showSlide(index) {
    if (isTransitioning || slides.length === 0) return;
    
    // Validate index
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    // Set transitioning flag
    isTransitioning = true;
    
    // Update current index
    currentSlideIndex = index;
    
    // Remove active class from all slides
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        // Add fade-out effect to non-active slides
        if (i !== index) {
            slide.style.opacity = '0';
        }
    });
    
    // Remove active class from all indicators
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Show current slide with fade-in effect
    if (slides[index]) {
        slides[index].style.opacity = '1';
        slides[index].classList.add('active');
        
        // Trigger slide content animations
        animateSlideContent(slides[index]);
    }
    
    // Activate current indicator
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
    
    // Reset transitioning flag after transition completes
    setTimeout(() => {
        isTransitioning = false;
    }, TRANSITION_DURATION);
    
    // Dispatch custom event for slide change
    dispatchSlideChangeEvent(index);
}

// Animate slide content (titles, text, buttons)
function animateSlideContent(slide) {
    const slideContent = slide.querySelector('.slide-content');
    if (!slideContent) return;
    
    const elements = slideContent.querySelectorAll('h2, p, .cta-button');
    
    elements.forEach((element, index) => {
        // Reset animation
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        
        // Apply animation based on element type
        if (element.tagName === 'H2') {
            element.style.animation = 'slideInFromTop 1s ease-out';
        } else if (element.tagName === 'P') {
            element.style.animation = `slideInFromBottom 1s ease-out ${0.3 + (index * 0.2)}s both`;
        } else if (element.classList.contains('cta-button')) {
            element.style.animation = `slideInFromBottom 1s ease-out ${0.6 + (index * 0.2)}s both`;
        }
    });
}

// Navigate to next/previous slide
function changeSlide(direction) {
    if (isTransitioning) return;
    
    let newIndex = currentSlideIndex + direction;
    showSlide(newIndex);
    resetAutoSlide();
}

// Go to specific slide (for indicators)
function currentSlide(slideNumber) {
    if (isTransitioning) return;
    
    const index = slideNumber - 1;
    showSlide(index);
    resetAutoSlide();
}

// Start automatic slideshow
function startAutoSlide() {
    // Clear any existing interval
    clearInterval(slideInterval);
    
    // Start new interval
    slideInterval = setInterval(() => {
        if (!isTransitioning && slides.length > 1) {
            // Move to next slide
            let nextIndex = currentSlideIndex + 1;
            if (nextIndex >= slides.length) {
                nextIndex = 0; // Loop back to first slide
            }
            showSlide(nextIndex);
        }
    }, SLIDE_DURATION);
    
    console.log(`Auto-slide started: changing every ${SLIDE_DURATION / 1000} seconds`);
}

// Stop automatic slideshow
function stopAutoSlide() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
        console.log('Auto-slide stopped');
    }
}

// Reset automatic slideshow timer
function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

// Initialize all event listeners
function initializeEventListeners() {
    // Navigation button listeners
    initializeNavigationButtons();
    
    // Indicator listeners
    initializeIndicators();
    
    // Keyboard navigation
    initializeKeyboardNavigation();
    
    // Touch/swipe support
    initializeTouchSupport();
    
    // Mouse hover pause/resume
    initializeHoverControls();
    
    // Window resize handler
    initializeResizeHandler();
    
    // Visibility change handler (pause when tab is not active)
    initializeVisibilityHandler();

    // Enables swipe-click protection
    initializeSwipeClickPrevention();
}

// Initialize navigation button event listeners
function initializeNavigationButtons() {
    const prevButton = document.querySelector('.slide-nav.prev');
    const nextButton = document.querySelector('.slide-nav.next');
    
    if (prevButton) {
        prevButton.addEventListener('click', () => changeSlide(-1));
        // Add keyboard accessibility
        prevButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                changeSlide(-1);
            }
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => changeSlide(1));
        // Add keyboard accessibility
        nextButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                changeSlide(1);
            }
        });
    }
}

// Initialize indicator event listeners
function initializeIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => currentSlide(index + 1));
        
        // Add keyboard accessibility
        indicator.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                currentSlide(index + 1);
            }
        });
        
        // Make indicators focusable
        indicator.setAttribute('tabindex', '0');
        indicator.setAttribute('role', 'button');
        indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
    });
}

// Initialize keyboard navigation
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Only handle keys when not focused on input elements
        if (e.target.tagName === 'INPUT' || 
            e.target.tagName === 'TEXTAREA' || 
            e.target.isContentEditable) {
            return;
        }
        
        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                changeSlide(-1);
                break;
            case 'ArrowRight':
                e.preventDefault();
                changeSlide(1);
                break;
            case 'Home':
                e.preventDefault();
                showSlide(0);
                resetAutoSlide();
                break;
            case 'End':
                e.preventDefault();
                showSlide(slides.length - 1);
                resetAutoSlide();
                break;
            case ' ': // Spacebar
                e.preventDefault();
                if (slideInterval) {
                    stopAutoSlide();
                    console.log('Slideshow paused by spacebar');
                } else {
                    startAutoSlide();
                    console.log('Slideshow resumed by spacebar');
                }
                break;
        }
    });
}

// Initialize touch/swipe support
function initializeTouchSupport() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (!slideshowContainer) return;
    
    // Touch start
    slideshowContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    // Touch end
    slideshowContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: false });
    
    // Prevent default touch behaviors during move
    slideshowContainer.addEventListener('touchmove', (e) => {
        // Only prevent default if it's a horizontal swipe
        const deltaX = Math.abs(e.touches[0].clientX - touchStartX);
        const deltaY = Math.abs(e.touches[0].clientY - touchStartY);
        
        if (deltaX > deltaY) {
            e.preventDefault();
        }
    }, { passive: false });
}

// Handle swipe gestures
function handleSwipe() {
    const deltaX = touchStartX - touchEndX;
    const deltaY = touchStartY - touchEndY;
    
    // Check if horizontal swipe is more significant than vertical
     if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
        swipeDetected = true; // <-- Set flag here

        if (deltaX > 0) {
            changeSlide(1); // swipe left - next slide
        } else {
            changeSlide(-1); // swipe right - previous slide
        }
    }
}

// Initialize hover controls (pause/resume on hover)
function initializeHoverControls() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (!slideshowContainer) return;
    
    slideshowContainer.addEventListener('mouseenter', stopAutoSlide);
    slideshowContainer.addEventListener('mouseleave', startAutoSlide);
}

// Initialize resize handler
function initializeResizeHandler() {
    let resizeTimeout;
    
    window.addEventListener('resize', () => {
        // Debounce resize events
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Refresh slideshow after resize
            showSlide(currentSlideIndex);
        }, 250);
    });
}

// Initialize visibility change handler
function initializeVisibilityHandler() {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopAutoSlide();
        } else {
            startAutoSlide();
        }
    });
}

// Initialize enables swipe-click protection
function initializeSwipeClickPrevention() {
    document.querySelectorAll('.slide a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (swipeDetected) {
                e.preventDefault();
                swipeDetected = false; // reset
            }
        });
    });
}

// Dispatch custom event when slide changes
function dispatchSlideChangeEvent(slideIndex) {
    const event = new CustomEvent('slideChange', {
        detail: {
            currentSlide: slideIndex,
            totalSlides: slides.length,
            slideElement: slides[slideIndex]
        }
    });
    document.dispatchEvent(event);
}

// Public API for external control
window.PicverseSlideshow = {
    // Navigation methods
    next: () => changeSlide(1),
    prev: () => changeSlide(-1),
    goTo: (index) => showSlide(index),
    
    // Control methods
    play: startAutoSlide,
    pause: stopAutoSlide,
    
    // Info methods
    getCurrentSlide: () => currentSlideIndex,
    getTotalSlides: () => slides.length,
    
    // Configuration methods
    setDuration: (duration) => {
        if (duration > 0) {
            SLIDE_DURATION = duration;
            console.log(`Slide duration updated to ${duration / 1000} seconds`);
            resetAutoSlide();
        }
    },
    
    // Get current duration
    getDuration: () => SLIDE_DURATION
};

// Clean up when page is unloaded
window.addEventListener('beforeunload', () => {
    stopAutoSlide();
});

// Initialize smooth scrolling for CTA buttons and anchor links
document.addEventListener('DOMContentLoaded', () => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Slideshow error:', e.error);
});

// Log initialization
console.log('Picverse Slideshow script loaded successfully');
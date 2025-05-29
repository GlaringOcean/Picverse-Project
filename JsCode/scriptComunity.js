// Community Page Script Interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // Follow button functionality
    initializeFollowButtons();
    
    // Post interaction functionality
    initializePostInteractions();
    
    // Notification interactions
    initializeNotificationInteractions();
    
    // Add smooth scrolling behavior
    addSmoothScrolling();
    
    // Add loading animation for user avatars
    initializeImageLoading();
});

// Follow button functionality
function initializeFollowButtons() {
    const followButtons = document.querySelectorAll('.follow-btn');
    
    followButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
            }, 100);
            
            // Toggle follow state
            if (this.textContent === 'Follow') {
                this.textContent = 'Following';
                this.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
                showNotification('Successfully followed user!', 'success');
            } else {
                this.textContent = 'Follow';
                this.style.background = 'linear-gradient(45deg, #ffd700, #ffed4e)';
                showNotification('Unfollowed user', 'info');
            }
        });
        
        // Add hover effects
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Post interaction functionality
function initializePostInteractions() {
    const postStats = document.querySelectorAll('.post-stats span');
    
    postStats.forEach(stat => {
        stat.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Handle different types of interactions
            if (this.classList.contains('likes') || this.textContent.includes('♡')) {
                handleLikeClick(this);
            } else if (this.classList.contains('comments') || this.textContent.includes('💬')) {
                handleCommentClick(this);
            } else if (this.classList.contains('bookmark') || this.textContent.includes('🔖')) {
                handleBookmarkClick(this);
            }
        });
    });
}

// Handle like button clicks
function handleLikeClick(element) {
    const currentText = element.textContent;
    const currentCount = parseInt(currentText.match(/\d+/)[0]);
    
    if (element.style.color === 'rgb(255, 107, 129)' || element.dataset.liked === 'true') {
        // Unlike
        element.innerHTML = `♡ ${currentCount - 1}`;
        element.style.color = '#cccccc';
        element.dataset.liked = 'false';
        showNotification('Post unliked', 'info');
    } else {
        // Like
        element.innerHTML = `❤️ ${currentCount + 1}`;
        element.style.color = '#ff6b81';
        element.dataset.liked = 'true';
        showNotification('Post liked!', 'success');
    }
}

// Handle comment button clicks
function handleCommentClick(element) {
    showNotification('Comment feature coming soon!', 'info');
    
    // Add pulse animation
    element.style.animation = 'pulse 0.6s ease-in-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 600);
}

// Handle bookmark button clicks
function handleBookmarkClick(element) {
    if (element.style.color === 'rgb(255, 215, 0)' || element.dataset.bookmarked === 'true') {
        // Remove bookmark
        element.style.color = '#cccccc';
        element.dataset.bookmarked = 'false';
        showNotification('Bookmark removed', 'info');
    } else {
        // Add bookmark
        element.style.color = '#ffd700';
        element.dataset.bookmarked = 'true';
        showNotification('Post bookmarked!', 'success');
    }
}

// Notification interactions
function initializeNotificationInteractions() {
    const notificationItems = document.querySelectorAll('.notification-item');
    
    notificationItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add click feedback
            this.style.background = 'rgba(255, 255, 255, 0.15)';
            setTimeout(() => {
                this.style.background = 'rgba(255, 255, 255, 0.05)';
            }, 200);
            
            // Mark as read (visual feedback)
            if (!this.classList.contains('read')) {
                this.classList.add('read');
                this.style.opacity = '0.8';
            }
        });
    });
    
    // See More links functionality
    const seeMoreLinks = document.querySelectorAll('.see-more');
    seeMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const notificationText = this.previousElementSibling;
            if (notificationText) {
                if (this.textContent === 'See More') {
                    notificationText.style.maxHeight = 'none';
                    notificationText.style.overflow = 'visible';
                    this.textContent = 'See Less';
                } else {
                    notificationText.style.maxHeight = '40px';
                    notificationText.style.overflow = 'hidden';
                    this.textContent = 'See More';
                }
            }
        });
    });
}

// Add smooth scrolling behavior
function addSmoothScrolling() {
    // Smooth scroll to top functionality
    let scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        border: none;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
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
        
        // Add click animation
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Add hover effect
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 25px rgba(102, 126, 234, 0.4)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 20px rgba(102, 126, 234, 0.3)';
    });
}

// Add loading animation for user avatars
function initializeImageLoading() {
    const avatars = document.querySelectorAll('.user-avatar, .avatar, img[src*="avatar"]');
    
    avatars.forEach(img => {
        // Create loading placeholder
        const placeholder = document.createElement('div');
        placeholder.className = 'avatar-loading';
        placeholder.style.cssText = `
            width: ${img.offsetWidth || 50}px;
            height: ${img.offsetHeight || 50}px;
            border-radius: 50%;
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
            position: absolute;
            top: 0;
            left: 0;
        `;
        
        // Add shimmer animation
        if (!document.querySelector('#shimmer-keyframes')) {
            const style = document.createElement('style');
            style.id = 'shimmer-keyframes';
            style.textContent = `
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Set up image loading
        if (!img.complete || img.naturalHeight === 0) {
            img.style.opacity = '0';
            
            // Make parent container relative for absolute positioning
            const parent = img.parentElement;
            if (parent && getComputedStyle(parent).position === 'static') {
                parent.style.position = 'relative';
            }
            
            parent.appendChild(placeholder);
            
            img.addEventListener('load', function() {
                this.style.opacity = '1';
                this.style.transition = 'opacity 0.3s ease';
                placeholder.remove();
                
                // Add entrance animation
                this.style.animation = 'fadeInUp 0.5s ease-out';
            });
            
            img.addEventListener('error', function() {
                // Fallback for broken images
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9IiNlMGUwZTAiLz4KPHN2ZyB4PSIxNSIgeT0iMTUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5OTk5OTkiIHN0cm9rZS13aWR0aD0iMiI+CjxwYXRoIGQ9Im0yMCA3LTgtMTItOC4wMSAxMi4wMXoiLz4KPGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjIiLz4KPC9zdmc+Cjwvc3ZnPgo=';
                this.style.opacity = '1';
                placeholder.remove();
            });
        }
    });
}

// Show notification function
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.toast-notification');
    existingNotifications.forEach(notif => notif.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'toast-notification';
    notification.textContent = message;
    
    // Style based on type
    const colors = {
        success: '#4CAF50',
        error: '#f44336',
        warning: '#ff9800',
        info: '#2196F3'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
    
    // Click to dismiss
    notification.addEventListener('click', function() {
        this.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (this.parentNode) {
                this.remove();
            }
        }, 300);
    });
}

// Add parallax effect to hero sections
function initializeParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax, .hero-section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Initialize search functionality
function initializeSearch() {
    const searchInputs = document.querySelectorAll('input[type="search"], .search-input');
    
    searchInputs.forEach(input => {
        let searchTimeout;
        
        input.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.trim();
            
            // Add loading state
            this.classList.add('searching');
            
            searchTimeout = setTimeout(() => {
                if (query.length > 0) {
                    performSearch(query);
                } else {
                    clearSearchResults();
                }
                this.classList.remove('searching');
            }, 300);
        });
        
        // Add search styling
        input.style.transition = 'all 0.3s ease';
        
        input.addEventListener('focus', function() {
            this.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.2)';
            this.style.borderColor = '#667eea';
        });
        
        input.addEventListener('blur', function() {
            this.style.boxShadow = 'none';
            this.style.borderColor = '#ddd';
        });
    });
}

// Perform search (placeholder function)
function performSearch(query) {
    showNotification(`Searching for: "${query}"`, 'info');
    // Here you would implement actual search functionality
}

// Clear search results
function clearSearchResults() {
    // Clear any search result displays
    const searchResults = document.querySelectorAll('.search-results');
    searchResults.forEach(result => result.innerHTML = '');
}

// Initialize modal functionality
function initializeModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.dataset.modal;
            const modal = document.getElementById(modalId);
            
            if (modal) {
                openModal(modal);
            }
        });
    });
    
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.modal-close, .close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => closeModal(modal));
        }
        
        // Close on backdrop click
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this);
            }
        });
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal.active');
            if (openModal) {
                closeModal(openModal);
            }
        }
    });
}

// Open modal
function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add animation
    modal.style.animation = 'fadeInUp 0.3s ease-out';
}

// Close modal
function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Add closing animation
    modal.style.animation = 'fadeOut 0.3s ease-out';
}

// Initialize all additional features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeParallaxEffect();
    initializeSearch();
    initializeModals();
});
document.addEventListener('DOMContentLoaded', () => {
    // Notification banner close functionality
    const notificationBanner = document.getElementById('notification-banner');
    const closeBannerBtn = document.getElementById('close-banner');
    
    // Close banner when X is clicked (will reappear on page refresh)
    closeBannerBtn?.addEventListener('click', () => {
        notificationBanner?.classList.add('hidden');
    });

    // Yellow notification banner close functionality
    const notificationBannerYellow = document.getElementById('notification-banner-yellow');
    const closeBannerYellowBtn = document.getElementById('close-banner-yellow');
    
    // Close yellow banner when X is clicked (will reappear on page refresh)
    closeBannerYellowBtn?.addEventListener('click', () => {
        notificationBannerYellow?.classList.add('hidden');
    });

    // Load header and footer components if they exist
    const includeComponents = () => {
        document.querySelectorAll('[data-include]').forEach(element => {
            const filePath = element.getAttribute('data-include');
            if (filePath) {
                fetch(filePath)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Error loading ${filePath}: ${response.status}`);
                        }
                        return response.text();
                    })
                    .then(html => {
                        element.innerHTML = html;
                        
                        // Re-initialize smooth scrolling after components are loaded
                        initSmoothScrolling();
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        });
    };

    // Smooth scrolling for navigation links
    const initSmoothScrolling = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for header height
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // Initialize components and smooth scrolling
    includeComponents();
    initSmoothScrolling();
});

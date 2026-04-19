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

    // Load events from JSON
    const loadEvents = () => {
        const eventList = document.querySelector('.event-list');
        if (!eventList) return;

        fetch('data/events.json')
            .then(response => response.json())
            .then(events => {
                eventList.innerHTML = events.map(event => `
                    <div class="event">
                        <div class="event-date">
                            <span class="month">${event.month}</span>
                            <span class="day">${event.day}</span>
                        </div>
                        <div class="event-details">
                            <h3>${event.title}</h3>
                            <p class="event-time"><i class="fas fa-clock"></i>${event.time}</p>
                            <p class="event-location"><i class="fas fa-map-marker-alt"></i> <a href="${event.mapLink}" target="_blank">${event.location}</a></p>
                            <p>${event.description}${event.facebookLink || event.mobilizeLink ? ' More info on' : ''}${event.facebookLink ? ` <a href="${event.facebookLink}" target="_blank">Facebook</a>` : ''}${event.facebookLink && event.mobilizeLink ? ' and' : ''}${event.mobilizeLink ? ` <a href="${event.mobilizeLink}" target="_blank">Mobilize</a>` : ''}${event.facebookLink || event.mobilizeLink ? '.' : ''}</p>
                        </div>
                    </div>
                `).join('');
            })
            .catch(error => {
                console.error('Error loading events:', error);
            });
    };

    // Initialize components and smooth scrolling
    includeComponents();
    initSmoothScrolling();
    loadEvents();
});

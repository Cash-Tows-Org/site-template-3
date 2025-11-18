// Scroll to top on page load/navigation
// Disable browser's automatic scroll restoration
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Scroll to top when page loads
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

// Also scroll to top immediately if page is already loaded
if (document.readyState !== 'loading') {
    window.scrollTo(0, 0);
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Services Dropdown Toggle
    const servicesToggle = document.querySelector('.services-toggle');
    const servicesMenu = document.querySelector('.services-menu');
    const servicesDropdown = document.querySelector('.services-dropdown');
    
    if (servicesToggle && servicesMenu) {
        servicesToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            servicesMenu.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (servicesDropdown && !servicesDropdown.contains(event.target)) {
                servicesMenu.classList.add('hidden');
            }
        });
    }
    
    
    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});


// Component Loader
// This script loads header and footer components dynamically

function loadComponent(componentId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            const container = document.getElementById(componentId);
            if (container) {
                container.innerHTML = html;
            } else {
                console.warn(`Container with id "${componentId}" not found`);
            }
        })
        .catch(error => console.error('Error loading component:', error));
}

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Determine the base path based on current page location
    const pathArray = window.location.pathname.split('/');
    let basePath = '';
    
    // Check if we're in a subdirectory (portfolio, services, etc.)
    const currentPath = window.location.pathname;
    if (currentPath.includes('/portfolio/') || currentPath.includes('/services/')) {
        basePath = '../';
    }
    
    // Load components
    loadComponent('header-container', basePath + 'components/header.html');
    loadComponent('footer-container', basePath + 'components/footer.html');
});

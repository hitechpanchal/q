/**
 * Q by Hitz - Interactive Logic
 */

const setTheme = (theme) => {
    const html = document.documentElement;
    if (theme === 'system') {
        html.removeAttribute('data-theme');
    } else {
        html.setAttribute('data-theme', theme);
    }
    localStorage.setItem('theme', theme);

    // Update Active State in Drawer
    document.querySelectorAll('.theme-card').forEach((item) => {
        item.classList.toggle('active', item.getAttribute('data-theme-id') === theme);
    });

    // Auto-close hamburger menu if it's open
    const navToggle = document.getElementById('nav-toggle');
    if (navToggle) navToggle.checked = false;
};

const filterThemes = () => {
    const query = document.getElementById('theme-search').value.toLowerCase();
    const activeTab = document.querySelector('.filter-tab.active').getAttribute('data-filter');

    document.querySelectorAll('.theme-card').forEach((card) => {
        const name = card.querySelector('.theme-name').textContent.toLowerCase();
        const type = card.getAttribute('data-theme-type');
        const matchesSearch = name.includes(query);
        const matchesTab = activeTab === 'all' || type === activeTab;

        card.style.display = matchesSearch && matchesTab ? 'flex' : 'none';
    });
};

const setFilterTab = (tab) => {
    document.querySelectorAll('.filter-tab').forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    filterThemes();
};

// Global Event Listeners
window.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme') || 'system';
    setTheme(theme);

    // Close menu on brand click
    const navBrand = document.querySelector('.nav-brand');
    if (navBrand) {
        navBrand.addEventListener('click', () => {
            const navToggle = document.getElementById('nav-toggle');
            if (navToggle) navToggle.checked = false;
        });
    }
});

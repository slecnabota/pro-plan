window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('[data-menu]');
    const btn = document.querySelector('[data-trigger]');
    const navItems = document.querySelectorAll('[data-header-nav-item]');

    btn.addEventListener('click', e => {
        e.preventDefault();
        menu.classList.toggle('header-menu--active');
    });

    menu.addEventListener('click', e => {
        if (e.target.matches('[data-menu]')) {
            menu.classList.remove('header-menu--active');
        }
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('header-menu--active');
        });
    });
});
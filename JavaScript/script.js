
const navToggle = document.querySelector('.navtoggle');

const navItems = document.querySelector('.navitems');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navItems.classList.toggle('active');
}); 


const navToggle = document.querySelector('.navtoggle');

const navItems = document.querySelector('.navitems');

const navSpace = document.querySelector('.navspace')

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navItems.classList.toggle('active');
    navSpace.classList.toggle('active')
}); 


const navToggle = document.querySelector('.navtoggle');

const navItems = document.querySelector('.navitems');

const navSpace = document.querySelector('.navspace')

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navItems.classList.toggle('active');
    navSpace.classList.toggle('active');
}); 

// const zoomElement = document.querySelector('.zoomOne');
// let zoom = 5;

// const ZOOM_SPEED = 0;

// document.addEventListener('wheel', function(e){
//     if(e.deltaY > 0) {
//         zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
//     }else {
//         zoomElement.style.transform =`scale(${(zoom += ZOOM_SPEED)})`;
//     }
// });

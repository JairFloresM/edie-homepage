const d = document;

//  Implementation of the menu responsive
const menu = d.getElementById('menu');

const toogleMenu = e => {
    const span = menu.firstElementChild;
    const nav = menu.nextElementSibling;
    
    if(span.innerHTML == 'menu') {
        nav.classList.add('nav-active');
        span.innerHTML = 'close';
    } else {
        nav.classList.remove('nav-active');
        span.innerHTML = 'menu';
    }
}
menu.addEventListener('click', toogleMenu)

//  Implementation of the menu responsive



// const hamburger = document.querySelector('.menu1');
// hamburger.addEventListener('click',display );
// function display() {
//     //alert('It was clicked!');

//  let div =document.createElement('div');
//  div.className = 'top-name';
//         div.innerHTML = '<p>CreateElement example</p> <h2> hola mundo<h2>';
//         document.body.appendChild(div);

// }

const mobile_nav = document.querySelector(".mobile-navbar-btns");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
nav_header.classList.toggle('active')
}

mobile_nav.addEventListener('click', () => toggleNavbar())


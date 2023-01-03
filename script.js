
const mobile_nav = document.querySelector(".mobile-navbar-btns");
const nav_header = document.querySelector(".header");
const nav_link1 = document.querySelector(".navbar-link1");
const nav_link2 = document.querySelector(".navbar-link2");
const nav_link3 = document.querySelector(".navbar-link3");
const nav_link4 = document.querySelector(".navbar-link4");

const toggleNavbar = () => {
nav_header.classList.toggle('active')
}

mobile_nav.addEventListener('click', () => toggleNavbar())
nav_link1.addEventListener('click', () => toggleNavbar())
nav_link2.addEventListener('click', () => toggleNavbar())
nav_link3.addEventListener('click', () => toggleNavbar())
nav_link4.addEventListener('click', () => toggleNavbar())


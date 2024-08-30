let nav = document.getElementById("nav");
let navList = document.getElementById("nav-list");
let links = document.querySelectorAll(".link");
let closeIcon = document.querySelector(".close-menu");
let openIcon = document.querySelector(".open-menu");

window.onscroll = () => {
    if (this.scrollY >= 100) {
        nav.classList.add('active');
        links.forEach(link => link.classList.add('active'));
        openIcon.classList.add('active');
    }
    else {
        nav.classList.remove('active');
        links.forEach(link => link.classList.remove('active'));
        openIcon.classList.remove('active');
    }
}

function openMenu() {
    navList.classList.add('active');
}

function closeMenu() {
    navList.classList.remove('active');
}
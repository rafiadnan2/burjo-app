// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika burjo menu di klik
document.querySelector('#burjo-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// Klik di luar sidebar untuk mengilangkan nav
const burjo = document.querySelector('#burjo-menu');

document.addEventListener('click', function(e) {
    if(!burjo.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
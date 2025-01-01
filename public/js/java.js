const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle class "active" pada nav-links saat hamburger diklik
    mobileMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});


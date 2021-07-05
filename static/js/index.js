document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelectorAll('.toggle-btn')[0];
    const navList = document.querySelectorAll('.nav-list')[0];

    btn.addEventListener('click', function () {
        navList.classList.toggle('active');
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const navList = document.querySelectorAll('.nav-list')[0];

    navList.addEventListener('click', function () {
        navList.classList.toggle('active');
    });

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
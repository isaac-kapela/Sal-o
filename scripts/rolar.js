document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    var navBar = document.querySelector('.navBar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
            navBar.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            navBar.classList.remove('scrolled');
        }
    });
});

const scrollUpButton = document.querySelector('.scroll-up-btn');

window.addEventListener("scroll", () => {
    
    if (document.documentElement.scrollTop > 100) {
        scrollUpButton.classList.add('show'); 
        scrollUpButton.classList.remove('hide');
    } else {
        scrollUpButton.classList.remove('show'); 
        scrollUpButton.classList.add('hide');
    }
});

scrollUpButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
const menuEl = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');
const menuBtn = document.querySelector('.menu-btn');
const headerEl = document.querySelector('header');
const navlinkEl = document.querySelectorAll('.nav-links');

navlinkEl.forEach((btn) => {
    btn.addEventListener('click', () =>{
        menuEl.classList.remove('menu-active');
    })
});

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        menuEl.classList.remove('menu-active');
    });
}

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        menuEl.classList.add('menu-active');
    });
}

window.addEventListener('scroll', () => {
    headerEl.classList.toggle('header-active', scrollY > 0);
});

//ANIMATION

const scroll_animation = ScrollReveal({reset: false, distance: "80px", duration: 2500, delay: 400});

scroll_animation.reveal(".hero-box__content, .about-box__img, .user-contact", {origin: "left"});
scroll_animation.reveal(".about-titles, .about-box__content ", {origin: "right"});
scroll_animation.reveal(".stack-titles", {origin: "bottom", interval: 200});
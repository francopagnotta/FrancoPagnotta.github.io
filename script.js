// NAV BAR
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__list__item--link');

navToggle.addEventListener('click', (e) => {
    document.body.classList.toggle('nav-open');
}); 

navLinks.forEach(link => {
    link.addEventListener('click', (e)=> {
        document.body.classList.remove('nav-open');
	})
});



// BACK TO TOP  BUTTON
const myButton = document.querySelector('.myBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { // ----> document.body for safari and document.documentElement for Chrome and firefox
        myButton.classList.add('show');
    } else {
        myButton.classList.remove('show');
    }
};

myButton.addEventListener('click',(e)=> {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
});

myButton.addEventListener('touch',(e)=> {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
});

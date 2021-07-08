const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__list__item--link');
const goUp = document.querySelector('.social-list__link__go-up');
const viejo = document.querySelector('.i')
const nuevo = document.querySelector('.text');


// NAV BAR
navToggle.addEventListener('click', (e) => {
    document.body.classList.toggle('nav-open');
}); 


navLinks.forEach(link => {
    link.addEventListener('click', (e)=> {
        document.body.classList.remove('nav-open');
	})
});


// GO UP BUTTON
goUp.addEventListener('mouseover', (e)=> {
    
    nuevo.innerHTML = 'go <br> up!';
    nuevo.classList.add('goup')
    goUp.replaceChild(nuevo,viejo);
    goUp.removeChild(viejo);
});


goUp.addEventListener('mouseout', (e)=> {
    nuevo.innerHTML = '';
    goUp.replaceChild(viejo,nuevo);
    goUp.removeChild(nuevo);
    
});

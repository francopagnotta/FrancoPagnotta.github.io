const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__list__item--link');
const goUp = document.querySelector('.social-list__link__go-up');
const oldElement = document.querySelector('.old-element')
const newElement = document.querySelector('.new-element');


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
    
    newElement.innerHTML = 'up!';
    newElement.classList.add('go-up')
    goUp.replaceChild(newElement,oldElement);
    goUp.removeChild(oldElement);
});


goUp.addEventListener('mouseout', (e)=> {
    newElement.innerHTML = '';
    goUp.replaceChild(oldElement,newElement);
    goUp.removeChild(newElement);
    
});

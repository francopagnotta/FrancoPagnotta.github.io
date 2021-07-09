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



// GO UP BUTTON
const goUp = document.querySelector('.social-list__link__go-up');
const primerHijo = document.querySelector('.primerHijo');

const segundoHijo = document.createElement("A");
segundoHijo.classList.add("social-list__link__go-up");
segundoHijo.setAttribute("href","#header");
segundoHijo.innerHTML = "up!";

goUp.addEventListener('mouseover', (e)=> {
    primerHijo.classList.remove("fas");
    primerHijo.classList.remove("fa-arrow-circle-up");
    primerHijo.classList.remove("primerHijo");
    goUp.appendChild(segundoHijo)
});

goUp.addEventListener('mouseout', (e)=> {
    goUp.removeChild(segundoHijo);
    primerHijo.classList.add("fas");
    primerHijo.classList.add("fa-arrow-circle-up");
    primerHijo.classList.add("primerHijo");
});

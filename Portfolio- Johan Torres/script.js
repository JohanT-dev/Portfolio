// Resalta la sección activa en el header al hacer scroll o clic
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar-sections .nav-link');

function activarSeccion() {
  let scrollPos = window.scrollY + 120;
  sections.forEach((section, idx) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[idx].classList.add('active');
    }
  });
}

window.addEventListener('scroll', activarSeccion);
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Animaciones de aparición al hacer scroll
function animarAparicion() {
  const aparecerElems = document.querySelectorAll('.aparecer, .fade-in');
  const triggerBottom = window.innerHeight * 0.92;
  aparecerElems.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animarAparicion);
window.addEventListener('DOMContentLoaded', animarAparicion); 
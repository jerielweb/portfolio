// Resalta la pestaña activa según la sección visible
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section, .about, .knowledge, .projects, .contact, .experience, .education');
  const navLinks = document.querySelectorAll('nav .navigation a');

  function activateNav() {
    let index = sections.length - 1;
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top <= 80) {
        index = i;
      }
    }
    navLinks.forEach(link => link.classList.remove('active'));
    if (navLinks[index]) navLinks[index].classList.add('active');
  }

  window.addEventListener('scroll', activateNav);
  activateNav();
});

// Funcionalidad del menú hamburguesa para móviles
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navOverlay = document.getElementById('navOverlay');
  
  // Función para abrir/cerrar el menú
  function toggleMenu() {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
    
    // Prevenir scroll del body cuando el menú está abierto
    if (navMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
  
  // Función para cerrar el menú
  function closeMenu() {
    hamburgerBtn.classList.remove('active');
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  
  // Event listeners
  hamburgerBtn.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', closeMenu);
  
  // Cerrar menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Cerrar menú al redimensionar la ventana (si se cambia a desktop)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
});

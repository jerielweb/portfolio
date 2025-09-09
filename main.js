// Inicialización principal - Todo se ejecuta cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // ===== NAVEGACIÓN ACTIVA =====
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

  // ===== MENÚ HAMBURGUESA =====
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
  
  // Event listeners del menú hamburguesa
  hamburgerBtn.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', closeMenu);
  
  // Cerrar menú al hacer clic en un enlace
  const navMenuLinks = document.querySelectorAll('.nav-menu a');
  navMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Cerrar menú al redimensionar la ventana (si se cambia a desktop)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });

  // ===== SISTEMA DE TEMAS =====
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.querySelector('.theme-icon');
  const html = document.documentElement;
  
  // Función para obtener el tema preferido del sistema
  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  
  // Función para aplicar el tema
  function applyTheme(theme) {
    if (theme === 'light') {
      html.setAttribute('data-theme', 'light');
      themeToggle.checked = true;
      localStorage.setItem('theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
      themeToggle.checked = false;
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // Función para inicializar el tema
  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      // Si hay un tema guardado manualmente, usarlo
      applyTheme(savedTheme);
    } else {
      // Si no hay tema guardado, no establecer data-theme para permitir detección automática
      // El CSS con media queries se encargará del tema automático
      const systemTheme = getSystemTheme();
      // Solo actualizar el estado del toggle sin establecer data-theme
      themeToggle.checked = systemTheme === 'light';
    }
  }
  
  // Función para cambiar el tema
  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    let newTheme;
    
    if (currentTheme === 'light') {
      newTheme = 'dark';
    } else if (currentTheme === 'dark') {
      newTheme = 'light';
    } else {
      // Si no hay data-theme (tema automático), determinar basado en el toggle
      newTheme = themeToggle.checked ? 'light' : 'dark';
    }
    
    applyTheme(newTheme);
  }
  
  // Event listeners del sistema de temas
  themeToggle.addEventListener('change', toggleTheme);
  
  // Escuchar cambios en la preferencia del sistema
  const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
  mediaQuery.addEventListener('change', (e) => {
    // Solo cambiar si no hay un tema guardado manualmente
    if (!localStorage.getItem('theme')) {
      // Actualizar el toggle para reflejar el cambio del sistema
      themeToggle.checked = e.matches;
      // No establecer data-theme para permitir que CSS maneje el tema automático
    }
  });
  
  // Inicializar el tema al cargar la página
  initTheme();
});

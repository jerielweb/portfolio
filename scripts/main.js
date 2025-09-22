// Inicialización principal - Todo se ejecuta cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  function toggleMenu() {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
    
    if (navMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
  
 
  function closeMenu() {
    hamburgerBtn.classList.remove('active');
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  
  hamburgerBtn.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', closeMenu);
  
  const navMenuLinks = document.querySelectorAll('.nav-menu a');
  navMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });

  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.querySelector('.theme-icon');
  const html = document.documentElement;
  
  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  
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
  
  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      const systemTheme = getSystemTheme();
      themeToggle.checked = systemTheme === 'light';
    }
  }
  
  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    let newTheme;
    
    if (currentTheme === 'light') {
      newTheme = 'dark';
    } else if (currentTheme === 'dark') {
      newTheme = 'light';
    } else {
      newTheme = themeToggle.checked ? 'light' : 'dark';
    }
    
    applyTheme(newTheme);
  }
  
  themeToggle.addEventListener('change', toggleTheme);
  const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
  mediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      themeToggle.checked = e.matches;
    }
  });
  
  initTheme();
});

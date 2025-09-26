document.addEventListener('DOMContentLoaded', () => {
      function toggleMenu() {
    hamburgerBtn.classList.toggle('active')
    navMenu.classList.toggle('active')
    
    if (navMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }
  
 
  function closeMenu() {
    hamburgerBtn.classList.remove('active')
    navMenu.classList.remove('active')
    navOverlay.classList.remove('active')
    document.body.style.overflow = 'auto'
  }
  
  hamburgerBtn.addEventListener('click', toggleMenu)
  navOverlay.addEventListener('click', closeMenu);
  
  const navMenuLinks = document.querySelectorAll('.nav-menu a')
  navMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu)
  });
  
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMenu()
    }
  })
})
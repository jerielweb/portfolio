document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle')
  const themeIcon = document.querySelector('.theme-icon')
  const icons = document.querySelectorAll('.icon-theme')
  const html = document.documentElement
  
  const iconThemes = {
      'cv-icon': {
      light: 'assets/icons/cv-light.svg',
      dark: 'assets/icons/cv-dark.svg',
    },
      'mail-icon': {
      light: 'assets/icons/mail-light.svg',
      dark: 'assets/icons/mail-dark.svg',
    },
      'proyect-icon': {
      light: 'assets/icons/code-light.svg',
      dark: 'assets/icons/code-dark.svg',
    },
      'knowledge-icon': {
      light: 'assets/icons/know-light.svg',
      dark: 'assets/icons/know-dark.svg',
    },
      'education-icon': {
      light: 'assets/icons/edu-light.svg',
      dark: 'assets/icons/edu-dark.svg',
    },
      'contact-icon': {
      light: 'assets/icons/contact-light.svg',
      dark: 'assets/icons/contact-dark.svg',
    },
  }
  
  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: light)');matches ? 'light' : 'dark'
  }
  
  function applyTheme(theme) {
    if (theme === 'light') {
      html.setAttribute('data-theme', 'light')
      themeToggle.checked = true
      localStorage.setItem('theme', 'light')         
    } else {
      html.setAttribute('data-theme', 'dark')
      themeToggle.checked = false
      localStorage.setItem('theme', 'dark')
    }

    icons.forEach(icon => {
      const newSrc = iconThemes[icon.id][theme];
      if (newSrc) {
        icon.src = newSrc;
      }
    })

  }
  

  function initTheme() {
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme) {
      applyTheme(savedTheme)
    } else {
      const systemTheme = getSystemTheme()
      themeToggle.checked = systemTheme === 'light'
    }
  }
  
  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme')
    let newTheme;
    
    if (currentTheme === 'light') {
      newTheme = 'dark'
    } else if (currentTheme === 'dark') {
      newTheme = 'light'
    } else {
      newTheme = themeToggle.checked ? 'light' : 'dark'
    }
    
    applyTheme(newTheme)
  }
  
  themeToggle.addEventListener('change', toggleTheme)
  const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
  mediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      themeToggle.checked = e.matches
    }
  })
  
  initTheme()
})

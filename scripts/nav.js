document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn')
    const navMenu = document.getElementById('navMenu')
    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active')
        hamburgerBtn.classList.toggle('active')
        
    })
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
            navMenu.classList.remove('active')
            hamburgerBtn.classList.remove('active')
        }
    })   
})
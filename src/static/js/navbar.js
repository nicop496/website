const navbar = document.getElementById('navbar')
const links = document.getElementById('navbar-links')
const menuBtn = document.getElementById('navbar-menu-btn')

links.classList.add(`pt-[${navbar.clientHeight + 'px'}]`)
links.classList.add(`pl-[${window.getComputedStyle(navbar, null).getPropertyValue('padding-left')}]`)

menuBtn.addEventListener('click', () => {
    navbar.classList.remove('motion-safe:animate-fade-in-after-draw-svg-path')
    navbar.classList.toggle('backdrop-blur-lg')
    links.classList.toggle('backdrop-blur-lg')
    links.classList.toggle('hidden')
    links.classList.toggle('flex')
    for (const icon of menuBtn.children) {
        icon.classList.toggle('hidden')
    }
})
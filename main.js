const activeNav = document.querySelectorAll('.nav-text');

activeNav.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.add('active-nav')
    })
})
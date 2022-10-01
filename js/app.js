const navSlide = () => {
    const icon = document.querySelector('.icon');
    const middle = document.querySelector('.middle');

    icon.addEventListener('click', () => {
        middle.classList.toggle('nav-active')
    })
}

navSlide();
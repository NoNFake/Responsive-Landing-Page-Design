const headerNav = document.querySelector('header__nav');
const headerLogin = document.querySelector('header__login');


const headerMenuOpenButton = document.querySelector('.menu-nav');
const headerMenuCloseButton = document.querySelector('.close-nav');

headerMenuOpenButton.addEventListener('click', (e) => {
    headerNav.classList.add('active');
    document.body.style.overflow = 'hidden';
});

headerMenuCloseButton.addEventListener('click', () => {
    headerNav.classList.contains('active')
        ? headerMenu.classList.remove('active')
        : null;
    document.body.style.overflow = 'auto';
});

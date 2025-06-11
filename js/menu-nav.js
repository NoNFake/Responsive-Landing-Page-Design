const burgerBtn = document.querySelector('.nav-btn');
const headerNav = document.querySelector('.header__nav');
const headerLogin = document.querySelector('.header__login');

burgerBtn.addEventListener('click', () => {
    const isActive = burgerBtn.classList.toggle('active');
    headerNav.classList.toggle('active');
    headerLogin.classList.toggle('active');



    document.body.style.overflow = isActive ? 'hidden' : '';

});


// headerMenuOpenButton.addEventListener('click', (e) => {
//     headerNav.classList.add('active');
//     headerLogin.classList.add('active')
//     document.body.style.overflow = 'hidden';
// });

// headerMenuCloseButton.addEventListener('click', () => {
//     headerNav.classList.contains('active')
//         ? headerMenu.classList.remove('active')
//         : null;
//     document.body.style.overflow = 'auto';
// });

const user = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

user.addEventListener('click', showhide);

function showhide() {
    desktopMenu.classList.toggle('showHide');

    console.log('clicked');
}
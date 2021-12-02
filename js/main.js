const navBtn = document.querySelector('.menu-icon');
const navBar = document.querySelector('.mobile-navigation');
const transparent = document.querySelector('.transparent');
navBtn.addEventListener('click', function (){
    navBar.classList.toggle('clicked');
    transparent.classList.toggle('appear');
})
transparent.addEventListener('click', function(){
    navBar.classList.toggle('clicked');
    transparent.classList.toggle('appear');
})
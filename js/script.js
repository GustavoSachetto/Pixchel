const header = document.querySelector('header');
document.addEventListener('scroll',()=>{
    header.classList.toggle('scroll', scrollY > 20);
});

const menuResponsivo = document.querySelector('#menuResponsivo');
const nav = document.querySelector('nav');

menuResponsivo.addEventListener('click', () => {
    menuResponsivo.classList.toggle('ativo');
    nav.classList.toggle('ativo');
});
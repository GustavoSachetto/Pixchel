const header = document.querySelector('header');
document.addEventListener('scroll',()=>{
    header.classList.toggle('scroll', scrollY > 20);
});
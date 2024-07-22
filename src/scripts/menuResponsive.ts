const hamburguer:HTMLElement = document.querySelector('.hamburguer')!;
const menu:HTMLElement = document.querySelector('.menu-mobile')!;
const header:HTMLHeadElement = document.querySelector('header')!;
const main:HTMLElement = document.querySelector('main')!;
const sections =[...document.querySelectorAll<HTMLElement>('section')!];

let active = false;

hamburguer.onclick = function(){
    const transisiton = 'transform 0.3s'
    header.style.transition = transisiton;
    main.style.transition = transisiton;
    sections.map((section:HTMLHeadElement)=> section.style.transition = transisiton)

    hamburguer.classList.toggle('active');
    active = !active;

    const transformvaule = active ? 'translateX(-250px)' : 'translateX(0)';
    const menuRigth = active ? '0' : '-250px';

    menu.style.right = menuRigth;
    header.style.transform = transformvaule;
    main.style.transform = transformvaule;
    sections.map((section:HTMLHeadElement)=> section.style.transform = transformvaule)
}
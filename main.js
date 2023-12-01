const navItems=document.querySelector('.nav__items');
const openNavBtn=document.querySelector('#open__nav__btn');
const closeNavBtn=document.querySelector('#close__nav__btn');
const body=document.querySelector(' section');
const openNav =()=>{
    navItems.style.display='flex';
    openNavBtn.style.display='none';
    closeNavBtn.style.display='inline-block';
}

const closeNav =()=>{
    navItems.style.display='none';
    openNavBtn.style.display='inline-block';
    closeNavBtn.style.display='none';
}

openNavBtn.addEventListener('click',openNav);
closeNavBtn.addEventListener('click',closeNav);
body.addEventListener('click',closeNav);





const sidebar=document.querySelector('aside');
const showsidebarBtn=document.querySelector('#show__sidebar-btn');
const hidesidebarBtn=document.querySelector('#hide__sidebar-btn');


const showsidebar =()=>{
    sidebar.style.left='0';
    showsidebarBtn.style.display='none';
    hidesidebarBtn.style.display='inline-block';
}

const hidesidebar =()=>{
    sidebar.style.left= '-100%';
    showsidebarBtn.style.display='inline-block';
    hidesidebarBtn.style.display='none';
}

showsidebarBtn.addEventListener('click',showsidebar);
hidesidebarBtn.addEventListener('click',hidesidebar)
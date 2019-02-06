
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
  ul.style.display='flex';
  ul.style.flexDirection='column-reverse';
  h1.style.textTransform='uppercase';
 h1.style.transform="rotate(360deg)";
  h1.style.transitionDuration='1s';
  header.style.backgroundColor='blue';
  
}

// Start Here: Create a reference to the ".menu" class
// const menu;

const menu = document.querySelector('.menu');
// const menuDiv = document.querySelector('div .menu');

// create a reference to the ".menu-button" class
// const menuButton;

const menuButton = document.querySelector('.menu-button');

const ul= document.querySelector('ul');
// console.log(ul);
const  h1 = document.querySelector('h1');
const header = document.querySelector('.header');
console.log(h1);

// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', toggleMenu);




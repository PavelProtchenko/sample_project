const mainMenu = document.querySelectorAll('#main li');
const registerWindow = document.querySelector('#register');
const accountLink = document.querySelector('#account');

const mainMenuClick = () => {
  if(accountLink) {
    registerWindow.style.visibility='visible';
  }else {
    alert('You clicked me!');
  }
};

const mainMenuLink = mainMenu.forEach(link => {
  link.addEventListener('click', mainMenuClick)
});

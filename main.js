const mainMenu = document.querySelectorAll('#main li');
const registerWindow = document.querySelector('#register');
const accountLink = document.querySelector('#account');
const mainLink = document.querySelector('#m-menu');

const mainMenuClick = () => {
  mainMenu.forEach(el => {
    if(el.id == accountLink.id) {
      return registerWindow.style.visibility='visible';
    }else if(el.id == mainLink.id) {
      alert('Main Link');
    }else{
      alert('You clicked me!');
    }
  })
};

const mainMenuLink = mainMenu.forEach(link => {
  link.addEventListener('click', mainMenuClick)
});

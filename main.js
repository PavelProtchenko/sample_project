window.onload = () => {
  const registerWindow = document.querySelector('#register');
  const mainMenu = document.querySelector('#main');

  const clickList = (event) => {
    if (event.target.getAttribute('data-list') === 'm-menu' ||
        event.target.parentElement.getAttribute('data-list') ===
        'm-menu') {
          alert('Main link!');
    } else if (event.target.getAttribute('data-list') ===
    'account' || event.target.parentElement.getAttribute('data-list') ===
    'account') {
      registerWindow.style.visibility = 'visible';
    }
  };

  mainMenu.addEventListener('click', clickList);

  const tabsHandler = document.querySelector('.tabs-header');

  const fTabs = (event) => {
    if (event.target.className === 'tab-h') {
      // dataTab - tab number is needed to be displayed
      const dataTab = event.target.getAttribute('data-tab');
      // switch off active class
      const tabHs = document.querySelectorAll('.tab-h');
      for(let i = 0; i < tabHs.length; i++) {
        tabHs[i].classList.remove('active');
      }
      event.target.classList.add('active');
      // all tabs with content
      const tabsBody = document.querySelectorAll('.tab-b');
      for(let i = 0; i < tabsBody.length; i++) {
        if(dataTab == i) {
          tabsBody[i].style.display = 'block';
        }else {
          tabsBody[i].style.display = 'none';
        }
      }
    }
  }
  tabsHandler.addEventListener('click', fTabs);
}

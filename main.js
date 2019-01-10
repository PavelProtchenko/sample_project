window.onload = () => {
  const registerWindow = document.querySelector('#register');
  const mainMenu = document.querySelector('#main').addEventListener('click', clickList);
  const tabsHandler = document.querySelector('.tabs-header').addEventListener('click', fTabs);

  function clickList(event) {
    if(event.target.className == 'menu-item') {
      let dataList = document.querySelector('.menu-item');
      for(let i = 0; i < dataList.length; i++) {
      if(dataList[i].getAttribute('data-list') == 'account') {
        return registerWindow.style.visibility = 'visible';
      }else if(dataList[i].getAttribute('data-list') == 'm-menu') {
        alert('Main link!');
      }else {
        return;
      }
      }
    }
  };


  function fTabs(event) {
    if(event.target.className == 'tab-h') {
      // dataTab - tab number is needede to be displayed
      var dataTab = event.target.getAttribute('data-tab');
      // switch off active class
      var tabH = document.querySelectorAll('.tab-h');
      for(var i = 0; i < tabH.length; i++) {
        tabH[i].classList.remove('active');
      }
      event.target.classList.add('active');
      // all tabs with content
      var tabBody = document.querySelectorAll('.tab-b');
      for(var i = 0; i < tabBody.length; i++) {
        if(dataTab == i) {
          tabBody[i].style.display = 'block';
        }else {
          tabBody[i].style.display = 'none';
        }
      }
    }
  }
}

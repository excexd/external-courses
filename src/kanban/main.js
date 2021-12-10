const userPanel = document.querySelector('.user-panel');
const userPanelButton = document.querySelector('.user-panel__button');
const mainContent = document.querySelector('.content');

const userMenu = document.createElement('div');
userMenu.className = 'user-menu';
const userMenuItems = [
  '<a href="main.html" class="user-panel__item">My account</a>',
  '<a href="main.html" class="user-panel__item">My tasks</a>',
  '<a href="main.html" class="user-panel__item">Settings</a>',
  '<a href="main.html" class="user-panel__item">Log out</a>',
];

function showUserMenu() {
  userMenu.innerHTML = userMenuItems.join('');
  userPanelButton.classList.add('user-panel__button--active');
  mainContent.appendChild(userMenu);
}

function hideUserMenu() {
  userPanelButton.classList.remove('user-panel__button--active');
  mainContent.removeChild(userMenu);
}

function handleUserPanelClick() {
  if (!Array.from(mainContent.childNodes).includes(userMenu)) {
    showUserMenu();
  } else {
    hideUserMenu();
  }
}

userPanel.addEventListener('click', handleUserPanelClick);

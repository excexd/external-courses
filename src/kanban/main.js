/* eslint-disable no-plusplus */
const userPanel = document.querySelector('.user-panel');
const userPanelButton = document.querySelector('.user-panel__button');
const userPanelWrapper = document.querySelector('.user-panel-wrapper');

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
  userPanelWrapper.appendChild(userMenu);
}

function hideUserMenu() {
  userPanelButton.classList.remove('user-panel__button--active');
  userPanelWrapper.removeChild(userMenu);
}

function handleUserPanelClick() {
  if (!Array.from(userPanelWrapper.childNodes).includes(userMenu)) {
    showUserMenu();
  } else {
    hideUserMenu();
  }
}

userPanel.addEventListener('click', handleUserPanelClick);

const mainContent = document.querySelector('.main');
let taskLists = [];
let addCardBtns = [];

let boardTaskLists = [
  {
    title: 'Backlog',
    tasks: [
      {
        id: 'task1',
        name: 'Backlog task example',
      },
    ],
  },
  {
    title: 'Ready',
    tasks: [
      {
        id: 'task1',
        name: 'Ready task example',
      },
    ],
  },
  {
    title: 'In Progress',
    tasks: [
      {
        id: 'task1',
        name: 'In progress task example',
      },
    ],
  },
  {
    title: 'Finished',
    tasks: [
      {
        id: 'task1',
        name: 'Finished task example',
      },
    ],
  },
];

if (localStorage.getItem('boardTaskLists')) {
  boardTaskLists = JSON.parse(localStorage.getItem('boardTaskLists'));
}

function createTaskHTML(task) {
  const newTaskHTML = document.createElement('li');

  newTaskHTML.className = 'kanban-list__task';
  newTaskHTML.id = task.id;
  newTaskHTML.innerText = task.name;
  return newTaskHTML;
}

function createTaskLists() {
  boardTaskLists.forEach((element) => {
    const list = document.createElement('div');
    const listHeader = document.createElement('h1');
    const listDetailsBtn = document.createElement('button');
    const listTasks = document.createElement('ul');
    const listAddCardBtn = document.createElement('button');

    list.className = 'kanban-list';
    listHeader.className = 'kanban-list__header';
    listHeader.innerText = element.title;
    listDetailsBtn.className = 'kanban-list__details-btn';
    listDetailsBtn.innerText = '•••';
    listTasks.className = 'kanban-list__tasks';
    listAddCardBtn.className = 'kanban-list__add-card-btn';
    listAddCardBtn.innerText = 'Add card';

    element.tasks.forEach((task) => {
      listTasks.append(createTaskHTML(task));
    });

    list.append(listHeader);
    list.append(listDetailsBtn);
    list.append(listTasks);
    list.append(listAddCardBtn);

    mainContent.append(list);

    addCardBtns = document.querySelectorAll('.kanban-list__add-card-btn');
    taskLists = document.querySelectorAll('.kanban-list__tasks');
  });
}

function isListEmpty(listIndex) {
  let isEmpty = false;

  if (boardTaskLists[listIndex].tasks.length === 0) {
    isEmpty = true;
  }

  return isEmpty;
}

function disableAddingFromEmptyLists() {
  for (let index = 0; index < taskLists.length - 1; index++) {
    const addCardBtn = addCardBtns[index + 1];
    if (isListEmpty(index)) {
      addCardBtn.disabled = true;
    } else {
      addCardBtn.disabled = false;
    }
  }
}

function createTask(title, listIndex) {
  const taskList = boardTaskLists[listIndex].tasks;
  let lastTaskId = 0;

  if (taskList.length > 0) {
    lastTaskId = taskList[taskList.length - 1].id.slice(4);
  }

  const newTask = {
    id: `task${+lastTaskId + 1}`,
    name: title,
  };

  boardTaskLists[listIndex].tasks.push(newTask);
  localStorage.setItem('boardTaskLists', JSON.stringify(boardTaskLists));
  taskLists[listIndex].append(createTaskHTML(newTask));
  disableAddingFromEmptyLists();
}

function deleteTask(taskIndex, listIndex) {
  boardTaskLists[listIndex].tasks.splice(taskIndex, 1);
  localStorage.setItem('boardTaskLists', JSON.stringify(boardTaskLists));
  const listTasks = taskLists[listIndex].querySelectorAll('.kanban-list__task');
  taskLists[listIndex].removeChild(listTasks[taskIndex]);

  disableAddingFromEmptyLists();
}

function createNewTaskInput() {
  const newTaskInput = document.createElement('input');
  newTaskInput.setAttribute('type', 'text');
  newTaskInput.className = 'kanban-list__new-task-input';
  taskLists[0].append(newTaskInput);
  newTaskInput.focus();
  newTaskInput.addEventListener('blur', () => {
    if (newTaskInput.value === '') {
      taskLists[0].removeChild(newTaskInput);
    } else {
      createTask(newTaskInput.value, 0);
      taskLists[0].removeChild(newTaskInput);
    }
  });
}

function removeDropdown() {
  const dropdown = document.querySelector('.kanban-list__dropdown');
  if (dropdown) {
    const addCardBtnOpened = document.querySelector('.dropdown-opened');

    dropdown.parentNode.removeChild(dropdown);
    addCardBtnOpened.classList.toggle('dropdown-opened');
  }
}

function moveTask(event) {
  const dropdown = event.target.parentElement.parentElement;
  const currentListIndex = Array.from(taskLists).indexOf(dropdown);
  const taskId = event.target.id.slice(-1);

  removeDropdown();
  createTask(boardTaskLists[currentListIndex - 1].tasks[taskId - 1].name, currentListIndex);
  deleteTask(taskId - 1, currentListIndex - 1);
}

function createDropdownTaskSelector(event) {
  const currentListIndex = Array.from(addCardBtns).indexOf(event.target);
  removeDropdown();
  const taskDropdown = document.createElement('ul');
  taskDropdown.className = 'kanban-list__dropdown';

  let dropdownTaskId = 1;
  Array.from(boardTaskLists[currentListIndex - 1].tasks).forEach((task) => {
    const dropdownItem = document.createElement('li');

    dropdownItem.className = 'kanban-list__dropdown-item';
    dropdownItem.id = `dropdown-task${dropdownTaskId++}`;
    dropdownItem.innerText = task.name;
    dropdownItem.addEventListener('click', moveTask);
    taskDropdown.append(dropdownItem);
  });

  taskLists[currentListIndex].append(taskDropdown);
  event.target.classList.toggle('dropdown-opened');
}

function removeDropdownHandler(event) {
  if (!event.target.matches('.kanban-list__add-card-btn')) {
    removeDropdown();
  } else {
    removeDropdown();
    if ((Array.from(addCardBtns).indexOf(event.target) !== 0)) {
      createDropdownTaskSelector(event);
    }
  }
}

function addListeners() {
  addCardBtns[0].addEventListener('click', createNewTaskInput);
  window.addEventListener('click', removeDropdownHandler);
}

createTaskLists();
addListeners();
disableAddingFromEmptyLists();

// localStorage.clear();

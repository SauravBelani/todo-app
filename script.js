const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const themeToggle = document.getElementById('theme-toggle');

// Initialize theme from localStorage or system preference
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.classList.toggle('dark-theme', savedTheme === 'dark');
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark-theme', prefersDark);
  }
  updateThemeIcon();
};

const updateThemeIcon = () => {
  const isDark = document.documentElement.classList.contains('dark-theme');
  themeToggle.querySelector('.theme-icon').textContent = isDark ? '☀️' : '🌙';
};

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
  const isDark = document.documentElement.classList.contains('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcon();
});

// Initialize theme on page load
initTheme();

todoForm.addEventListener('submit', event => {
  event.preventDefault();
  const text = todoInput.value.trim();
  if (!text) return;

  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  const itemText = document.createElement('span');
  itemText.className = 'todo-text';
  itemText.textContent = text;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.type = 'button';
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(listItem);
  });

  itemText.addEventListener('click', () => {
    itemText.classList.toggle('completed');
  });

  listItem.append(itemText, deleteButton);
  todoList.appendChild(listItem);
  todoInput.value = '';
  todoInput.focus();
});

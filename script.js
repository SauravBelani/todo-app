const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const themeToggle = document.getElementById('theme-toggle');
const todoInfo = document.getElementById('todo-info');
const todoCount = document.getElementById('todo-count');
const clearCompletedButton = document.getElementById('clear-completed');

const TODOS_STORAGE_KEY = 'todos';
let todos = [];

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

const saveTodos = () => {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
};

const loadTodos = () => {
  const savedTodos = localStorage.getItem(TODOS_STORAGE_KEY);
  todos = savedTodos ? JSON.parse(savedTodos) : [];
};

const updateSummary = () => {
  const totalTasks = todos.length;
  const remainingTasks = todos.filter(todo => !todo.completed).length;

  todoCount.textContent = `${remainingTasks} task${remainingTasks === 1 ? '' : 's'} left`;
  todoInfo.textContent = totalTasks === 0
    ? 'No todos yet. Add your first task to get started.'
    : `${totalTasks} item${totalTasks === 1 ? '' : 's'} in your list. Tap a task to mark it complete.`;

  clearCompletedButton.style.display = todos.some(todo => todo.completed) ? 'inline-flex' : 'none';
};

const createTodoElement = (todo, index) => {
  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  const itemText = document.createElement('button');
  itemText.className = 'todo-text';
  itemText.type = 'button';
  itemText.textContent = todo.text;
  itemText.setAttribute('aria-pressed', todo.completed);
  if (todo.completed) {
    itemText.classList.add('completed');
  }

  itemText.addEventListener('click', () => {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
  });

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.type = 'button';
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
  });

  listItem.append(itemText, deleteButton);
  return listItem;
};

const renderTodos = () => {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    todoList.appendChild(createTodoElement(todo, index));
  });
  updateSummary();
};

todoForm.addEventListener('submit', event => {
  event.preventDefault();
  const text = todoInput.value.trim();
  if (!text) return;

  todos.push({ text, completed: false });
  saveTodos();
  renderTodos();

  todoInput.value = '';
  todoInput.focus();
});

clearCompletedButton.addEventListener('click', () => {
  todos = todos.filter(todo => !todo.completed);
  saveTodos();
  renderTodos();
});

loadTodos();
renderTodos();

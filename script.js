const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

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

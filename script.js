const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const emptyMsg = document.getElementById('emptyMsg');

function updateEmptyMsg() {
  emptyMsg.style.display = taskList.children.length === 0 ? 'block' : 'none';
}

function createTask(text) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = text;

  const badge = document.createElement('span');
  badge.className = 'status-badge';
  badge.textContent = 'Pendente';

  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-btn';
  removeBtn.textContent = '✕';
  removeBtn.addEventListener('click', () => {
    li.remove();
    updateEmptyMsg();
  });

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      li.classList.add('done');
      badge.textContent = 'Concluída';
    } else {
      li.classList.remove('done');
      badge.textContent = 'Pendente';
    }
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(badge);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  updateEmptyMsg();
}

addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;
  createTask(text);
  input.value = '';
  input.focus();
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addBtn.click();
});

updateEmptyMsg();